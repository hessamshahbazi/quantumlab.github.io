// Site-wide details. Edit this file to change contact info, highlights and partners.
// Pages read it through assets/js/render.js, so nothing here needs HTML changes.
window.LAB = window.LAB || {};

LAB.site = {
  name: "Chase Quantum Lab",
  org: "University of Illinois Chicago",
  department: "Department of Electrical and Computer Engineering",
  profileUrl: "https://ece.uic.edu/profiles/chase-zizwe/",
};

LAB.contact = {
  email: "chase8@uic.edu",
  phone: "312.413.1052",
  phoneHref: "+13124131052",
  // Cards on the Contact Us page. `person` is a slug from people.js.
  contacts: [
    { title: "Principal Investigator", person: "zizwe-chase", main: true }, // main: use the email and phone above
    // { title: "Group Administrator", person: "<slug from people.js>", email: "...", phone: "...", phoneHref: "+1..." },
  ],
  visit: {
    title: "Visit us",
    address: [
      "Department of Electrical and Computer Engineering",
      "University of Illinois Chicago",
      "851 S. Morgan St.",
      "Chicago, IL 60607",
    ],
    mapUrl: "https://www.openstreetmap.org/search?query=851%20S%20Morgan%20St%20Chicago%20IL%2060607",
  },
  // mail: { title: "Packages and mail", address: ["Line 1", "Line 2"] },
};

// Recent news on the home page, newest first.
// Fields: date (a year, or a word such as "Recent"), detail (e.g. "October 8"), iso (YYYY-MM-DD, optional),
// tag (small label), title, text, href (optional link).
LAB.news = [
  {
    date: "2026",
    detail: "October 8",
    iso: "2026-10-08",
    tag: "Invited talk",
    title: "Hessam Shahbazi presents at the UIC Physics Condensed Matter Seminar",
    text: "An invited talk on interactions in two-dimensional quantum materials, from energy transport to nonlinear optical properties, covering how electrons, phonons, and excitons shape both.",
    href: "https://phys.uic.edu/events/condensed-matter-seminar-interactions-in-two-dimensional-quantum-materials-from-energy-transport-to-nonlinear-optical-properties-with-dr-hessam-shahbazi-uic-and-northwestern/",
  },
  {
    date: "Recent",
    tag: "Resources",
    title: "IBM quantum computer access for quantum chemistry",
    text: "The lab received $26,000 worth of access to IBM quantum processors (QPUs) to explore sample-based quantum diagonalization (SQD), a hybrid quantum-classical method for estimating molecular energies, on quantum chemistry problems.",
  },
  {
    date: "2026",
    detail: "May 19",
    iso: "2026-05-19",
    tag: "In the news",
    title: "UIC Stories: Building Future Industries",
    text: "A UIC Stories feature on how the university prepares students for fast-growing fields includes our quantum work, with Prof. Chase and lab members Hessam Shahbazi and Mohsen Bagheri Tabar.",
    href: "https://stories.uic.edu/all-stories/building-future-industries",
  },
  {
    date: "Recent",
    tag: "Visit",
    title: "Photos from our recent visits",
    text: "A photo post from the group's recent visits.",
    href: "https://www.instagram.com/p/DXrNegRlbZO/",
  },
  {
    date: "2026",
    tag: "Visit",
    title: "Quantum Club visit to Fermilab's Quantum Garage",
    text: "Prof. Chase led UIC students on a visit to one of the country's major quantum research facilities.",
    href: "https://ece.uic.edu/news-stories/quantum-club-visits-fermilabs-quantum-garage/",
  },
  {
    date: "2025",
    tag: "Teaching",
    title: "Quantum materials and devices course",
    text: "UIC's QISE course offerings include ECE 491: Introduction to Quantum Materials and Devices, taught by Prof. Chase.",
    href: "https://ece.uic.edu/undergraduate/quantum-courses/",
  },
  {
    date: "2023",
    title: "Assistant Professor, UIC Electrical and Computer Engineering",
    text: "Prof. Chase joined the UIC ECE faculty after serving as a Bridge-to-Faculty scholar in the department.",
  },
  {
    date: "2023",
    title: "DOE ReACT-QISE education initiative",
    text: "The UIC-led consortium builds pathways for students entering quantum information science and engineering.",
    href: "https://engineering.uic.edu/news-stories/uic-leads-national-consortium-educating-next-generation-of-quantum-engineers/",
  },
];

// Photos of visits and events. Put image files in assets/img/visits/ and list them here;
// the "Visits" section on the home page stays hidden until this list has entries.
// Example: { src: "assets/img/visits/fermilab-1.jpg", alt: "Students at Fermilab", caption: "Fermilab Quantum Garage" }
LAB.photos = [];

// Active funding. Not shown on any page right now: add data-render="funding" to an element to show it.
LAB.funding = [{ name: "IBM", text: "Active funding for our quantum chemistry project." }];

// Collaborating organizations. An entry without `href` shows as a plain (non-link) tile.
LAB.partners = [
  {
    name: "UIC Electrical and Computer Engineering",
    text: "Our home department.",
    href: "https://ece.uic.edu/",
  },
  {
    name: "ReACT-QISE Consortium",
    text: "A UIC-led national consortium educating the next generation of quantum engineers.",
    href: "https://engineering.uic.edu/news-stories/uic-leads-national-consortium-educating-next-generation-of-quantum-engineers/",
  },
  {
    name: "UIC College of Engineering",
    text: "The college that hosts our department.",
    href: "https://engineering.uic.edu/",
  },
  {
    name: "UIC QISE Courses",
    text: "Quantum information science and engineering courses at UIC.",
    href: "https://ece.uic.edu/undergraduate/quantum-courses/",
  },
];
