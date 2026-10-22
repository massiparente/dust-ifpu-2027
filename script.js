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
  function mail(addr) {
    var a = el("a", null, addr);
    a.href = "mailto:" + addr;
    return a;
  }

  // Organizers (name, affiliation lines, optional email)
  function personList(id, people) {
    var ul = document.getElementById(id);
    if (!ul) return;
    if (!people || !people.length) {
      var li = el("li"); li.appendChild(tbd()); ul.appendChild(li); return;
    }
    people.forEach(function (p) {
      var li = el("li");
      li.appendChild(el("span", "name", p.name));
      var affs = [].concat(p.affiliation || []).filter(Boolean);
      if (!affs.length) li.appendChild(el("span", "aff tbd", "[affiliation]"));
      affs.forEach(function (a) { li.appendChild(el("span", "aff", a)); });
      if (p.email) { var m = el("span", "mail"); m.appendChild(mail(p.email)); li.appendChild(m); }
      ul.appendChild(li);
    });
  }
  personList("organizers", S.organizers);
  personList("local-organizers", S.localOrganizers);

  // Participants (names only)
  var pl = document.getElementById("participants");
  if (pl) {
    if (!S.participants || !S.participants.length) {
      var li = el("li"); li.appendChild(tbd("The list of participants will be published soon.")); pl.appendChild(li);
    } else {
      S.participants.forEach(function (n) { pl.appendChild(el("li", null, n)); });
    }
  }

  var fo = document.getElementById("facts-organizers");
  (S.organizers || []).forEach(function (p) { fo.appendChild(el("li", null, p.name)); });

  // Footer contacts
  var fc = document.getElementById("footer-contacts");
  (S.organizers || []).forEach(function (p) {
    if (!p.email) return;
    var li = el("li"); li.appendChild(mail(p.email)); fc.appendChild(li);
  });

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
