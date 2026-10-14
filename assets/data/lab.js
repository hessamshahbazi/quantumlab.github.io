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

// Shown on the home page, newest first.
LAB.highlights = [
  {
    date: "2026",
    title: "Quantum Club visit to Fermilab's Quantum Garage",
    text: "Prof. Chase led UIC students on a visit to one of the country's major quantum research facilities.",
    href: "https://ece.uic.edu/news-stories/quantum-club-visits-fermilabs-quantum-garage/",
  },
  {
    date: "2025",
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

// Active funding, shown above the partners on the home page.
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
