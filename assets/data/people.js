// People. Add a person by copying an entry and changing `slug` (used in the profile URL).
// Groups are listed in the order of LAB.peopleGroups; empty groups are hidden.
// Optional fields: photo ("assets/img/people/name.jpg"), interests, bio, education, email, links.
window.LAB = window.LAB || {};

LAB.peopleGroups = [
  { id: "faculty", title: "Faculty" },
  { id: "researchers", title: "Postdocs and Researchers" },
  { id: "students", title: "Students" },
  { id: "collaborators", title: "Advisory and Collaborators" },
  { id: "alumni", title: "Alumni" },
];

LAB.people = [
  {
    slug: "zizwe-chase",
    name: "Prof. Zizwe A. Chase",
    group: "faculty",
    role: "Assistant Professor, Electrical and Computer Engineering",
    interests: ["Quantum chemistry", "Quantum computing", "Quantum materials", "Quantum photonics"],
    bio: [
      "Assistant Professor in the Department of Electrical and Computer Engineering at the University of Illinois Chicago.",
    ],
    education: [
      "Ph.D., Chemical Engineering, Washington State University",
      "B.S., Chemical Engineering, Georgia Institute of Technology",
      "B.S., Chemistry, Morehouse College",
    ],
    email: "chase8@uic.edu",
    links: [{ label: "UIC profile", href: "https://ece.uic.edu/profiles/chase-zizwe/" }],
  },

  // No photos yet: people without a `photo` show their initials.
  { slug: "hessam-shahbazi", name: "Hessam Shahbazi", group: "students", role: "PhD candidate" },
  { slug: "mohsen-bagheri-tabar", name: "Mohsen Bagheri Tabar", group: "students", role: "PhD student" },
  { slug: "sara-metwalli", name: "Sara Metwalli", group: "alumni", role: "Group alum" },

  // To add someone, copy a line and change slug, name, group and role. Groups: faculty,
  // researchers, students, collaborators, alumni. Empty groups are hidden on the People page.
  // { slug: "firstname-lastname", name: "Firstname Lastname", group: "researchers", role: "Postdoctoral researcher" },
  // Add `placeholder: true` to show a dashed "to be added" card with no profile page.
];
