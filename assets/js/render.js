// Fills every [data-render] slot from the content in assets/data/*.js.
// Headings and intro copy stay in each page's HTML; lists and cards come from data.
(() => {
  "use strict";

  const LAB = window.LAB || {};
  const site = LAB.site || {};

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const list = (value) => (Array.isArray(value) ? value : value ? [value] : []);
  const paragraphs = (value) => list(value).map((text) => `<p>${esc(text)}</p>`).join("");
  const pad2 = (n) => String(n).padStart(2, "0");
  const slugify = (text) =>
    String(text).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  // First and last name: "Prof. Zizwe A. Chase" becomes "ZC".
  const initials = (name) => {
    const words = String(name).replace(/^(prof\.|dr\.)\s*/i, "").split(/\s+/).filter(Boolean);
    return ((words[0] || "")[0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
  };

  const areaPage = (area) => area.page || `research-${area.slug}.html`;
  const profileHref = (person) => `person.html?p=${encodeURIComponent(person.slug)}`;
  const findPerson = (slug) => (LAB.people || []).find((person) => person.slug === slug);
  const findArea = (slug) => (LAB.research || []).find((area) => area.slug === slug);
  const status = (message) => `<p class="status">${esc(message)}</p>`;

  // Pages can mark text that should follow the data, e.g. <h1 data-bind="title">.
  const bind = (name, text) =>
    document.querySelectorAll(`[data-bind="${name}"]`).forEach((node) => {
      node.textContent = text;
    });

  const setMeta = (title, description) => {
    document.title = `${title} | ${site.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  };

  const avatar = (person, large = false) => {
    const size = large ? " avatar--lg" : "";
    if (person.photo) {
      return `<img class="avatar${size}" src="${esc(person.photo)}" alt="" width="64" height="64" loading="lazy">`;
    }
    return `<span class="avatar${size}" aria-hidden="true">${person.placeholder ? "?" : esc(initials(person.name))}</span>`;
  };

  const chips = (items) => `<ul class="chips">${list(items).map((item) => `<li class="chip">${esc(item)}</li>`).join("")}</ul>`;

  // People ------------------------------------------------------------------

  const personCard = (person) => {
    const body = `
      ${avatar(person)}
      <div class="person__body">
        <h3 class="person__name">${esc(person.name)}</h3>
        <p class="person__role">${esc(person.role)}</p>
        ${list(person.interests).length ? chips(person.interests) : ""}
      </div>`;
    if (person.placeholder) return `<div class="tile tile--static person person--placeholder">${body}</div>`;
    return `<a class="tile person" href="${profileHref(person)}">${body}</a>`;
  };

  const people = (el) => {
    const groups = (LAB.peopleGroups || [])
      .map((group) => ({ group, members: (LAB.people || []).filter((person) => person.group === group.id) }))
      .filter(({ members }) => members.length);
    el.innerHTML = groups.length
      ? groups
          .map(
            ({ group, members }) => `
      <section class="group" aria-labelledby="group-${esc(group.id)}">
        <h2 class="group__title" id="group-${esc(group.id)}">${esc(group.title)}</h2>
        <div class="tiles tiles--3">${members.map(personCard).join("")}</div>
      </section>`
          )
          .join("")
      : status("The roster will be added here.");
  };

  const profile = (el) => {
    const person = findPerson(new URLSearchParams(window.location.search).get("p"));
    if (!person || person.placeholder) {
      el.innerHTML = `${status("We could not find that profile.")}<p class="more"><a class="link-arrow" href="people.html">All people</a></p>`;
      return;
    }

    setMeta(person.name, `${person.name}, ${person.role}, ${site.name}.`);
    bind("title", person.name);
    bind("crumb", person.name);
    bind("lead", person.role);

    const block = (title, html) => (html ? `<section><h2>${title}</h2>${html}</section>` : "");
    const hasDetails = ["bio", "interests", "education", "links"].some((field) => list(person[field]).length);
    const lines = [];
    if (person.email) lines.push(`<p><a href="mailto:${esc(person.email)}">${esc(person.email)}</a></p>`);
    if (person.phone) lines.push(`<p><a href="tel:${esc(person.phoneHref || person.phone)}">${esc(person.phone)}</a></p>`);
    const photo = person.photo
      ? `<img class="profile__photo" src="${esc(person.photo)}" alt="Portrait of ${esc(person.name)}" width="384" height="480">`
      : avatar(person, true);

    el.innerHTML = `
      <div class="profile">
        <aside class="profile__aside">
          ${photo}
          <div class="contact-lines">${lines.join("")}</div>
        </aside>
        <div class="profile__main">
          ${hasDetails ? "" : status("More details will be added to this profile soon.")}
          ${block("About", list(person.bio).length ? `<div class="prose">${paragraphs(person.bio)}</div>` : "")}
          ${block("Research interests", list(person.interests).length ? chips(person.interests) : "")}
          ${block("Education", list(person.education).length ? `<ul class="ticks">${list(person.education).map((item) => `<li>${esc(item)}</li>`).join("")}</ul>` : "")}
          ${block(
            "Links",
            list(person.links).length
              ? `<div class="links-inline">${list(person.links).map((link) => `<a class="link-arrow" href="${esc(link.href)}">${esc(link.label)}</a>`).join("")}</div>`
              : ""
          )}
          <a class="link-arrow" href="people.html">All people</a>
        </div>
      </div>`;
  };

  // Research ----------------------------------------------------------------

  const researchPanels = (el) => {
    const level = el.dataset.heading || "3";
    const areas = LAB.research || [];
    let picks = areas.map((area, index) => ({ area, index }));
    // data-after="slug" lists the areas that follow that one, wrapping around; data-limit caps the row.
    if (el.dataset.after) {
      const start = areas.findIndex((area) => area.slug === el.dataset.after);
      picks = picks.map((_, i) => picks[(start + 1 + i) % picks.length]).filter(({ index }) => index !== start);
    }
    if (el.dataset.limit) picks = picks.slice(0, Number(el.dataset.limit));
    el.innerHTML = picks
      .map(
        ({ area, index }) => `
      <a class="panel" href="${esc(areaPage(area))}">
        <span class="panel__art" aria-hidden="true">
          <span class="panel__img" style="background-image:url('assets/img/motif-${esc(area.motif || "lattice")}.svg')"></span>
          <span class="panel__index">${pad2(index + 1)}</span>
        </span>
        <div class="panel__body">
          <h${level} class="panel__title">${esc(area.name)}</h${level}>
          <p class="panel__text">${esc(area.summary)}</p>
          <span class="panel__cta">View projects</span>
        </div>
      </a>`
      )
      .join("");
  };

  const areaTabs = (el) => {
    const tabs = [{ key: "all", label: "All research", href: "research.html" }].concat(
      (LAB.research || []).map((area) => ({ key: area.slug, label: area.short || area.name, href: areaPage(area) }))
    );
    el.innerHTML = `<ul>${tabs
      .map((tab) => `<li><a href="${esc(tab.href)}"${tab.key === el.dataset.current ? ' aria-current="page"' : ""}>${esc(tab.label)}</a></li>`)
      .join("")}</ul>`;
  };

  const projectHtml = (project) => {
    const figure = project.figure
      ? `<figure class="project__figure"><img src="${esc(project.figure.src)}" alt="${esc(project.figure.alt || project.title)}" loading="lazy">${
          project.figure.caption ? `<figcaption>${esc(project.figure.caption)}</figcaption>` : ""
        }</figure>`
      : "";
    const members = list(project.people).map(findPerson).filter(Boolean);
    const researchers = members.length
      ? `<p class="project__people">Researchers: ${members.map((person) => `<a href="${profileHref(person)}">${esc(person.name)}</a>`).join(", ")}</p>`
      : "";
    return `
      <section class="project" id="${esc(slugify(project.title))}">
        <h3 class="project__title">${esc(project.title)}</h3>
        <div>
          <div class="project__body${figure ? " has-figure" : ""}">
            <div class="prose">${paragraphs(project.body)}</div>
            ${figure}
          </div>
          ${researchers}
        </div>
      </section>`;
  };

  const area = (el) => {
    const data = findArea(el.dataset.area);
    if (!data) {
      el.innerHTML = `<section class="section"><div class="wrap">${status("That research area was not found.")}</div></section>`;
      return;
    }

    setMeta(data.name, data.summary);
    bind("title", data.name);
    bind("crumb", data.name);
    bind("lead", data.summary);

    const projects = list(data.projects).map(projectHtml).join("");
    el.innerHTML = `
      <section class="section">
        <div class="wrap split">
          <h2>Overview</h2>
          <div class="prose prose--lg">${paragraphs(data.overview)}</div>
        </div>
      </section>
      ${
        projects
          ? `<section class="section section--layer">
        <div class="wrap">
          <div class="section__head"><h2>Projects</h2></div>
          <div class="projects">${projects}</div>
        </div>
      </section>`
          : ""
      }`;
  };

  // Publications, highlights, partners --------------------------------------

  const publicationHtml = (item) => {
    const href = item.url || (item.doi ? `https://doi.org/${item.doi}` : "");
    return `
      <li class="entry">
        <p class="entry__meta">${esc(item.venue)}</p>
        <div>
          <h3 class="entry__title">${href ? `<a href="${esc(href)}">${esc(item.title)}</a>` : esc(item.title)}</h3>
          ${item.authors ? `<p class="entry__text">${esc(item.authors)}</p>` : ""}
          ${item.doi ? `<p class="entry__links"><a class="link-arrow" href="https://doi.org/${esc(item.doi)}">DOI ${esc(item.doi)}</a></p>` : ""}
        </div>
      </li>`;
  };

  const publications = (el) => {
    const items = [...(LAB.publications || [])].sort((a, b) => b.year - a.year || String(a.title).localeCompare(String(b.title)));
    if (!items.length) {
      el.innerHTML = status("Publications will be listed here.");
      return;
    }
    const more = site.profileUrl ? `<p class="more"><a class="link-arrow" href="${esc(site.profileUrl)}">More via UIC profile</a></p>` : "";
    el.innerHTML =
      [...new Set(items.map((item) => item.year))]
        .map(
          (year) => `
      <h2 class="year-title">${esc(year)}</h2>
      <ol class="entries">${items.filter((item) => item.year === year).map(publicationHtml).join("")}</ol>`
        )
        .join("") + more;
  };

  const highlights = (el) => {
    el.innerHTML = `<ol class="entries">${(LAB.highlights || [])
      .map(
        (item) => `
      <li class="entry">
        <p class="entry__date"><time datetime="${esc(item.date)}">${esc(item.date)}</time></p>
        <div>
          <h3 class="entry__title">${item.href ? `<a href="${esc(item.href)}">${esc(item.title)}</a>` : esc(item.title)}</h3>
          <p class="entry__text">${esc(item.text)}</p>
        </div>
      </li>`
      )
      .join("")}</ol>`;
  };

  const partners = (el) => {
    el.innerHTML = (LAB.partners || [])
      .map((item) => {
        const body = `<h3 class="tile__title">${esc(item.name)}</h3><p class="tile__text">${esc(item.text)}</p>`;
        return item.href ? `<a class="tile" href="${esc(item.href)}">${body}</a>` : `<div class="tile tile--static">${body}</div>`;
      })
      .join("");
  };

  const funding = (el) => {
    el.innerHTML = (LAB.funding || [])
      .map(
        (item) => `
      <div class="funding__item">
        <p class="funding__label">Funding</p>
        <h3 class="funding__name">${esc(item.name)}</h3>
        <p class="funding__text">${esc(item.text)}</p>
      </div>`
      )
      .join("");
  };

  // Contact -----------------------------------------------------------------

  const contactCard = (entry, defaults) => {
    if (entry.placeholder) {
      return `
        <article class="contact-card">
          <h2>${esc(entry.title)}</h2>
          <div class="contact-card__person">
            <span class="avatar avatar--muted" aria-hidden="true">?</span>
            <p class="contact-lines">Details to be added.</p>
          </div>
        </article>`;
    }
    const person = findPerson(entry.person) || {};
    const email = entry.email || (entry.main ? defaults.email : person.email);
    const phone = entry.phone || (entry.main ? defaults.phone : "");
    const phoneHref = entry.phoneHref || (entry.main ? defaults.phoneHref : phone);
    return `
      <article class="contact-card">
        <h2>${esc(entry.title)}</h2>
        <div class="contact-card__person">
          ${avatar(person)}
          <div class="contact-lines">
            ${person.slug ? `<p><a href="${profileHref(person)}">${esc(person.name)}</a></p>` : ""}
            ${email ? `<p>Email: <a href="mailto:${esc(email)}">${esc(email)}</a></p>` : ""}
            ${phone ? `<p>Phone: <a href="tel:${esc(phoneHref)}">${esc(phone)}</a></p>` : ""}
          </div>
        </div>
      </article>`;
  };

  const contact = (el) => {
    const data = LAB.contact || {};
    const cards = list(data.contacts).map((entry) => contactCard(entry, data));
    if (data.visit) {
      cards.push(`
        <article class="contact-card">
          <h2>${esc(data.visit.title)}</h2>
          <address>${list(data.visit.address).map(esc).join("<br>")}</address>
          ${data.visit.mapUrl ? `<a class="link-arrow" href="${esc(data.visit.mapUrl)}">Open in maps</a>` : ""}
        </article>`);
    }
    if (data.mail) {
      cards.push(`
        <article class="contact-card">
          <h2>${esc(data.mail.title)}</h2>
          ${data.mail.address ? `<address>${list(data.mail.address).map(esc).join("<br>")}</address>` : ""}
          ${data.mail.note ? `<p>${esc(data.mail.note)}</p>` : ""}
        </article>`);
    }
    el.innerHTML = cards.join("");
  };

  const footerContact = (el) => {
    const data = LAB.contact || {};
    el.innerHTML = [
      data.email && `<li><a href="mailto:${esc(data.email)}">${esc(data.email)}</a></li>`,
      data.phone && `<li><a href="tel:${esc(data.phoneHref || data.phone)}">${esc(data.phone)}</a></li>`,
    ]
      .filter(Boolean)
      .join("");
  };

  const views = {
    area,
    "area-tabs": areaTabs,
    contact,
    "footer-contact": footerContact,
    funding,
    highlights,
    partners,
    people,
    profile,
    publications,
    "research-panels": researchPanels,
  };

  document.querySelectorAll("[data-render]").forEach((el) => {
    const view = views[el.dataset.render];
    if (view) view(el);
  });
})();
