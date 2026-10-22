/*
 * ------------------------------------------------------------------
 *  Site content that changes often lives here.
 *  Edit this file to update people, abstracts and the schedule.
 *  Empty strings / empty lists show up on the site as
 *  "to be announced" placeholders.
 * ------------------------------------------------------------------
 */
window.SITE = {
  // Scientific organizers (each affiliation on its own line).
  // Their emails are also used as the contact addresses of the site.
  organizers: [
    { name: "Max Parente",     affiliation: ["University of Florida"],
      email: "parente.m@ufl.edu" },
    { name: "Roberta Tripodi", affiliation: ["INAF – Osservatorio Astronomico di Roma"],
      email: "roberta.tripodi@inaf.it" },
    { name: "Darko Donevski",  affiliation: ["National Centre for Nuclear Research, Warsaw", "SISSA, Trieste"],
      email: "darko.donevski@ncbj.gov.pl" }
  ],

  localOrganizers: [
    { name: "Chiara Feruglio", affiliation: ["INAF – Osservatorio Astronomico di Trieste"] }
  ],

  // Participants (names only), shown in alphabetical order by surname as listed here
  participants: [
    "Hiddo Algera",
    "Caleb Choban",
    "Ilse De Looze",
    "Andreas Faisst",
    "Ismael García-Bernete",
    "Giuliano Lorenzon",
    "Allison Man",
    "Kosei Matsumoto",
    "Jed McKinney",
    "Lorenzo Napolitano",
    "Pablo G. Pérez-González",
    "Curro Rodríguez-Montero",
    "Lucie Rowland",
    "Irene Shivaei",
    "Laura Sommovigo",
    "Aswin Vijayan",
    "Joris Witstok"
  ],

  // Abstract submission
  abstracts: {
    deadline: "",   // e.g. "15 January 2027"
    formUrl: ""     // e.g. a Google Form link
  },

  // Program. Each session: { time, title, speaker, type }
  // type is one of: "talk", "discussion", "break"
  // Tentative outline: times and speakers to be added later.
  schedule: [
    { day: "Monday", date: "1 March", sessions: [
      { time: "Morning",   title: "Welcome", type: "talk" },
      { time: "",          title: "Intro seminar: multi-wavelength perspective on dust evolution", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A, observationally oriented", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Long interactive discussion session", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Tuesday", date: "2 March", sessions: [
      { time: "Morning",   title: "Intro seminar: the dust–AGN connection", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A, AGN oriented", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Brainstorming: future proposal planning", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Wednesday", date: "3 March", sessions: [
      { time: "Morning",   title: "Intro seminar: dust models and simulations", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A, modelling oriented", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Discussion: bridging simulations and observations", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Thursday", date: "4 March", sessions: [
      { time: "Morning",   title: "Future facilities and cutting-edge simulations", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Brainstorming: future proposal planning", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Friday", date: "5 March", sessions: [
      { time: "Morning",   title: "Talks + Q&A", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Summary seminar: how to move forward", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Long interactive discussion session", type: "discussion" },
      { time: "",          title: "Final wrap-up", type: "break" }
    ]}
  ]
};
