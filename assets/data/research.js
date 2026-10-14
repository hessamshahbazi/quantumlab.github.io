// Research areas and the projects inside each one.
// Each area gets its own page (research-<slug>.html) and a panel on the Research page.
// `short` is the tab label; `motif` picks the banner art in assets/img/motif-<name>.svg.
// A project can also carry `figure: { src, alt, caption }` and `people: ["slug", ...]`.
// The area and project text below is placeholder copy; replace it with the lab's own descriptions.
window.LAB = window.LAB || {};

LAB.research = [
  {
    slug: "chemistry",
    short: "Chemistry",
    name: "Quantum Chemistry",
    motif: "molecule",
    summary:
      "Quantum computing and computational methods for modeling molecules and chemical reactions, supported by active funding from IBM.",
    overview: [
      "We apply quantum computing and computational methods to quantum chemistry, including the electronic structure of molecules and the energetics of chemical reactions.",
      "Our quantum chemistry project is supported by active funding from IBM.",
    ],
    projects: [
      {
        title: "IBM-funded quantum chemistry project",
        body: ["Our quantum chemistry project is supported by active funding from IBM."],
      },
      {
        title: "Electronic structure on quantum computers",
        body: ["Algorithms and workflows that estimate molecular energies and properties on quantum hardware and simulators."],
      },
      {
        title: "Reaction pathways and catalysis",
        body: ["Modeling how bonds form and break to understand reactivity and to guide the design of better catalysts."],
      },
      {
        title: "Hybrid quantum-classical methods",
        body: ["Combining quantum processors with classical computing so that chemistry calculations become practical on near-term devices."],
      },
    ],
  },
  {
    slug: "computing",
    short: "Computing",
    name: "Quantum Computing",
    motif: "circuit",
    summary:
      "Quantum computing platforms and software workflows, with careful validation of results on quantum hardware and simulators.",
    overview: [
      "We study how quantum processors and simulators can be used to solve scientific problems, and how to verify that their results can be trusted.",
      "This work supports our research on quantum chemistry, algorithms, energy, and AI.",
    ],
    projects: [
      {
        title: "Quantum software and workflows",
        body: ["Tools that take a scientific problem from a model to a circuit that runs on quantum hardware or a simulator."],
      },
      {
        title: "Hardware platforms and benchmarking",
        body: ["Comparing how different quantum platforms perform on realistic workloads."],
      },
      {
        title: "Validation of quantum results",
        body: ["Checks against classical methods and experiments that confirm a quantum calculation is correct."],
      },
    ],
  },
  {
    slug: "algorithms",
    short: "Algorithms",
    name: "Quantum Algorithms",
    motif: "histogram",
    summary: "Designing and analyzing quantum algorithms for chemistry, energy, and AI applications.",
    overview: [
      "We design quantum algorithms and study how well they perform, with a focus on problems in chemistry and energy.",
      "Algorithm research feeds directly into our work on quantum chemistry, quantum for energy, and quantum and AI.",
    ],
    projects: [
      {
        title: "Algorithms for chemistry and materials",
        body: ["Algorithms that estimate the energies and dynamics of molecules and materials."],
      },
      {
        title: "Resource estimation",
        body: ["Estimating the qubits, gates, and run time an algorithm needs, to judge when it will become practical."],
      },
      {
        title: "Algorithm demonstrations",
        body: ["Small-scale experiments that test algorithm ideas, such as the Deutsch-Jozsa algorithm, on physical systems."],
      },
    ],
  },
  {
    slug: "ai",
    short: "AI",
    name: "Quantum and AI",
    motif: "network",
    summary:
      "Combining machine learning with quantum science, from learning about quantum systems to quantum-enhanced learning.",
    overview: [
      "We explore how artificial intelligence and quantum science can strengthen each other.",
      "Machine learning can help design materials, interpret experiments, and calibrate devices, while quantum computing may offer new ways to learn from data.",
    ],
    projects: [
      {
        title: "Machine learning for quantum systems",
        body: ["Learning models that predict, control, or characterize quantum devices and materials."],
      },
      {
        title: "AI-assisted discovery",
        body: ["Using machine learning to screen molecules and materials before costly simulation or experiment."],
      },
      {
        title: "Quantum machine learning",
        body: ["Studying where quantum computers could offer an advantage for learning tasks."],
      },
    ],
  },
  {
    slug: "energy",
    short: "Energy",
    name: "Quantum for Energy",
    motif: "orbits",
    summary:
      "Quantum methods to understand and improve the materials and chemical processes behind energy technologies.",
    overview: [
      "Energy technologies depend on how electrons and light behave inside molecules and materials.",
      "We study these processes with quantum methods to guide better energy materials and chemical processes.",
    ],
    projects: [
      {
        title: "Catalysis and chemical conversion",
        body: ["Understanding how catalysts speed up the reactions that store or release energy."],
      },
      {
        title: "Energy storage materials",
        body: ["Modeling materials for batteries and other storage technologies at the level of electrons."],
      },
      {
        title: "Light harvesting and energy transfer",
        body: ["How absorbed light is turned into usable energy in molecules and materials."],
      },
    ],
  },
  {
    slug: "materials",
    short: "Materials",
    name: "1D and 2D Quantum Materials",
    motif: "lattice",
    summary:
      "Carbon nanotubes, topological insulators, and atomically thin platforms with optical and electronic properties suited for quantum applications.",
    overview: [
      "We develop and characterize carbon nanotubes, topological insulators, and atomically thin platforms with optical and electronic properties suited for quantum applications.",
      "Confining a material to one or two dimensions changes how light and charge carriers behave. We study those changes to find platforms that can host, shape, and control quantum states of light.",
    ],
    projects: [
      {
        title: "Carbon nanotubes",
        body: [
          "One-dimensional carbon structures whose optical and electronic response depends strongly on their geometry. We study how that response can be engineered for quantum photonic functionality.",
        ],
      },
      {
        title: "Topological insulators",
        body: [
          "Materials with protected surface states and strong light-matter interaction, explored as platforms for robust quantum photonic components.",
        ],
      },
      {
        title: "2D metamaterials",
        body: [
          "Engineered atomically thin and planar structures that shape how light is emitted, confined, and transmitted at the nanoscale.",
        ],
      },
      {
        title: "Computational design and validation",
        body: [
          "Simulation and modeling used to screen materials and guide device concepts, validated through spectroscopy and photonics measurements.",
        ],
      },
    ],
  },
  {
    slug: "photonics",
    short: "Photonics",
    name: "Quantum Photonics and Devices",
    motif: "waves",
    summary:
      "Single-photon emitters, entangled photon sources, resonant nanophotonic structures, and light-matter coupling in compact materials systems.",
    overview: [
      "We design device concepts for single-photon emitters, entangled photon sources, resonant nanophotonic structures, and light-matter coupling in compact materials systems.",
      "Compact, reliable photon sources and resonant structures are the building blocks of quantum communication, sensing, and information processing.",
    ],
    projects: [
      {
        title: "Single-photon emitters",
        body: ["Sources that release one photon at a time, a basic requirement for secure quantum communication."],
      },
      {
        title: "Entangled photon sources",
        body: ["Devices that generate pairs of photons whose properties remain linked, used to distribute entanglement."],
      },
      {
        title: "Resonant nanophotonic structures",
        body: ["Nanoscale structures that trap and enhance light at selected wavelengths to strengthen weak quantum effects."],
      },
      {
        title: "Light-matter coupling",
        body: ["Ways to make photons and materials interact strongly inside compact device geometries."],
      },
    ],
  },
  {
    slug: "transduction",
    short: "Transduction",
    name: "Quantum Transduction and Networks",
    motif: "interference",
    summary:
      "Converting quantum information between microwave, optical, and mechanical carriers, and building the components that link quantum systems into networks.",
    overview: [
      "Quantum transduction converts quantum information from one physical form to another, for example from microwave signals in superconducting circuits to optical photons that travel through fiber.",
      "We also translate materials and photonic structures toward components that support advanced quantum communication, networked quantum systems, and scalable quantum hardware.",
    ],
    projects: [
      {
        title: "Quantum transduction",
        body: ["Devices that convert quantum signals between microwave, optical, and mechanical carriers."],
      },
      {
        title: "Quantum communication components",
        body: ["Photonic building blocks that carry and manipulate quantum information between nodes."],
      },
      {
        title: "Networked quantum systems",
        body: ["Linking separate quantum devices so that they can share states and work together."],
      },
      {
        title: "Scalable quantum hardware",
        body: ["Material and device choices that make it practical to build many identical quantum components."],
      },
    ],
  },
];
