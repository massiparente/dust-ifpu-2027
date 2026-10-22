(function () {
  var S = window.SITE || {};

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function tbd(text) { return el("span", "tbd", text || "to be announced"); }
  function fill(id, node) {
    var t = document.getElementById(id);
    if (t) { t.textContent = ""; t.appendChild(node); }
  }

  // Contact email
  function contactNode() {
    if (!S.contactEmail) return tbd("[contact email]");
    var a = el("a", null, S.contactEmail);
    a.href = "mailto:" + S.contactEmail;
    return a;
  }
  fill("contact-logistics", contactNode());
  fill("contact-footer", contactNode());

  // People lists
  function personList(id, people, emptyText) {
    var ul = document.getElementById(id);
    if (!ul) return;
    if (!people || !people.length) {
      var li = el("li"); li.appendChild(tbd(emptyText)); ul.appendChild(li); return;
    }
    people.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("span", "name", p.name));
      li.appendChild(p.affiliation ? el("span", "aff", p.affiliation) : el("span", "aff tbd", "[affiliation]"));
      ul.appendChild(li);
    });
  }
  personList("organizers", S.organizers, "to be announced");
  personList("participants", S.participants, "The list of confirmed participants will be published soon.");

  var fo = document.getElementById("facts-organizers");
  (S.organizers || []).forEach(function (p) { fo.appendChild(el("li", null, p.name)); });

  // Abstracts
  var A = S.abstracts || {};
  fill("abs-deadline", A.deadline ? document.createTextNode(A.deadline) : tbd());
  if (A.formUrl) {
    var a = el("a", null, "Open the submission form ↗");
    a.href = A.formUrl; a.target = "_blank"; a.rel = "noopener";
    fill("abs-form", a);
  } else {
    fill("abs-form", tbd("link will be posted here"));
  }

  // Schedule
  var days = document.getElementById("days");
  (S.schedule || []).forEach(function (d) {
    var box = el("div", "day");
    var head = el("div", "day-head");
    head.appendChild(el("span", "d", d.day));
    head.appendChild(el("span", "dt", d.date + " 2027"));
    box.appendChild(head);
    var body = el("div", "day-body");
    if (!d.sessions || !d.sessions.length) {
      body.appendChild(tbd("Program to be announced"));
    } else {
      d.sessions.forEach(function (s) {
        var row = el("div", "session " + (s.type || ""));
        if (s.time) row.appendChild(el("span", "t", s.time));
        row.appendChild(el("span", "s", s.title || ""));
        if (s.speaker) row.appendChild(el("span", "sp", s.speaker));
        body.appendChild(row);
      });
    }
    box.appendChild(body);
    days.appendChild(box);
  });

  // Mobile menu
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }
})();
