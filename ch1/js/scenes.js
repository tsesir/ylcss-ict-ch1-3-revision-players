/* Placeholder card and stamp scenes. Not Chapter 4 multimedia artwork.
   Reads CH4_BEATS so the copied player pack can mount every beat. */
function dom(html) {
  var tpl = document.createElement("template");
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildScene(beat) {
  var lines = beat.headline && beat.headline.length ? beat.headline : [beat.title];
  var cards = beat.cards && beat.cards.length ? beat.cards : ["甲", "乙", "丙"];
  var node = dom(
    "<div>" +
      '<div class="hero sticker">' +
        '<div><p class="eyebrow">' + esc(beat.eyebrow || "YLCSS · S4 ICT · scaffold") + "</p>" +
        "<h2>" + lines.map(esc).join("<br>") + "</h2></div>" +
        '<div class="eyebrow">占位畫面</div>' +
      "</div>" +
      '<div class="icon-row">' +
        cards.map(function (label) {
          return '<div class="icon-card sticker">' + esc(label) + "</div>";
        }).join("") +
      "</div>" +
      '<div class="stamp-wrap"><div class="stamp">' + esc(beat.stamp || "占位") + "</div></div>" +
    "</div>"
  );
  node.classList.add("scene");
  node.id = "scene-" + beat.id;
  node.dataset.beat = beat.id;
  return node;
}

function addSceneTweens(tl, beat, root, start) {
  var cards = root.querySelectorAll(".icon-card");
  var stamp = root.querySelector(".stamp");
  if (cards.length) {
    tl.fromTo(
      cards,
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.12, ease: "power2.out" },
      start + 0.2
    );
  }
  if (stamp) {
    tl.fromTo(
      stamp,
      { autoAlpha: 0, scale: 0.82, rotation: -8 },
      { autoAlpha: 1, scale: 1, rotation: -6, duration: 0.35, ease: "back.out(1.6)" },
      start + 0.75
    );
  }
}

function mountScenes(stack) {
  stack.innerHTML = "";
  CH4_BEATS.forEach(function (beat) {
    stack.appendChild(buildScene(beat));
  });
}
