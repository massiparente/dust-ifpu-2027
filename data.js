/*
 * ------------------------------------------------------------------
 *  Site content that changes often lives here.
 *  Edit this file to update organizers, abstracts and the schedule.
 *  Empty strings / empty lists show up on the site as
 *  "to be announced" placeholders.
 * ------------------------------------------------------------------
 */
window.SITE = {
  // Contact address shown in the footer and in the Logistics section.
  contactEmail: "",

  // Scientific organizers (each affiliation on its own line)
  organizers: [
    { name: "Max Parente",     affiliation: ["University of Florida"] },
    { name: "Roberta Tripodi", affiliation: ["INAF – Osservatorio Astronomico di Roma"] },
    { name: "Darko Donevski",  affiliation: ["National Centre for Nuclear Research, Warsaw", "SISSA, Trieste"] }
  ],

  localOrganizers: [
    { name: "Chiara Feruglio", affiliation: ["INAF – Osservatorio Astronomico di Trieste"] }
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
      { time: "",          title: "Intro seminar: multi-wavelength perspective on dust evolution (theme 1)", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A, observationally oriented", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Long interactive discussion session", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Tuesday", date: "2 March", sessions: [
      { time: "Morning",   title: "Intro seminar: the dust–AGN connection (theme 2)", type: "talk" },
      { time: "",          title: "Coffee break", type: "break" },
      { time: "",          title: "Talks + Q&A, AGN oriented", type: "talk" },
      { time: "",          title: "Lunch", type: "break" },
      { time: "Afternoon", title: "Brainstorming: future proposal planning", type: "discussion" },
      { time: "",          title: "Coffee & wrap-up", type: "break" }
    ]},
    { day: "Wednesday", date: "3 March", sessions: [
      { time: "Morning",   title: "Intro seminar: dust models and simulations (theme 3)", type: "talk" },
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
