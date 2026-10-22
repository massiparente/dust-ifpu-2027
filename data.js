/*
 * ------------------------------------------------------------------
 *  Site content that changes often lives here.
 *  Edit this file to update organizers, participants, abstracts and
 *  the schedule. Empty strings / empty lists show up on the site as
 *  "to be announced" placeholders.
 * ------------------------------------------------------------------
 */
window.SITE = {
  // Contact address shown in the footer and in the Logistics section.
  contactEmail: "",

  // Scientific organizers
  organizers: [
    { name: "Max Parente", affiliation: "" },
    { name: "Roberta Tripodi", affiliation: "" },
    { name: "Darko Donevski", affiliation: "" }
  ],

  // Confirmed participants, e.g.
  // { name: "Jane Doe", affiliation: "University of Somewhere" },
  participants: [],

  // Abstract submission
  abstracts: {
    deadline: "",   // e.g. "15 January 2027"
    formUrl: ""     // e.g. a Google Form link
  },

  // Program. Each session: { time, title, speaker, type }
  // type is one of: "talk", "discussion", "brainstorming", "groups", "break", "social"
  schedule: [
    { day: "Monday",    date: "1 March",  sessions: [] },
    { day: "Tuesday",   date: "2 March",  sessions: [] },
    { day: "Wednesday", date: "3 March",  sessions: [] },
    { day: "Thursday",  date: "4 March",  sessions: [] },
    { day: "Friday",    date: "5 March",  sessions: [] }
  ]
};
