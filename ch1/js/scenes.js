/* Per-beat stages for ICT Ch1 資訊處理概論. One builder and one tween set per beat.
   Chrome (player.js / ui.js) is unchanged. */
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

function must(root, sel) {
  var node = root.querySelector(sel);
  if (!node) throw new Error("Missing " + sel + " in " + (root.id || "scene"));
  return node;
}

function all(root, sel) {
  var list = root.querySelectorAll(sel);
  if (!list.length) throw new Error("Missing " + sel + " in " + (root.id || "scene"));
  return list;
}

function need(beat, count) {
  if (!beat.cards || beat.cards.length < count) {
    throw new Error(beat.id + " needs " + count + " cards");
  }
}

function enter(tl, target, at, fromVars, toVars) {
  tl.fromTo(
    target,
    Object.assign({ autoAlpha: 0, immediateRender: true }, fromVars || {}),
    Object.assign({ autoAlpha: 1, duration: 0.38, ease: "back.out(1.6)" }, toVars || {}),
    at
  );
}

function pulse(tl, el, at) {
  tl.to(el, {
    scale: 1.06,
    duration: 0.22,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    transformOrigin: "center center"
  }, at);
}

function lightTerms(tl, nodes, at, step) {
  tl.to(nodes, {
    backgroundColor: "#D6FF3F",
    duration: 0.22,
    stagger: step || 0.28,
    ease: "power2.out"
  }, at);
}

function drawPath(tl, path, at, dur) {
  if (!path.getTotalLength) return 0;
  var len = path.getTotalLength();
  if (!len) return 0;
  path.style.strokeDasharray = String(len);
  path.style.strokeDashoffset = String(len);
  tl.to(path, { strokeDashoffset: 0, duration: dur, ease: "power2.inOut" }, at);
  return len;
}

function caption(text) {
  return '<p class="caption anchor">' + esc(text) + "</p>";
}

function stampOf(beat) {
  return '<div class="stamp-wrap"><div class="stamp">' + esc(beat.stamp) + "</div></div>";
}

function tile(label, cls) {
  return '<div class="tile' + (cls ? " " + cls : "") + '">' + esc(label) + "</div>";
}

function tileGrid(labels, cols, cls) {
  return '<div class="tile-grid cols-' + cols + '">' + labels.map(function (label) {
    return tile(label, cls);
  }).join("") + "</div>";
}

function iconRow(labels) {
  return '<div class="icon-row">' + labels.map(function (label) {
    return '<div class="icon-card sticker">' + esc(label) + "</div>";
  }).join("") + "</div>";
}

function pentagon(labels, hubText) {
  var cx = 430;
  var cy = 128;
  var r = 92;
  var pts = [];
  var i;
  for (i = 0; i < labels.length; i++) {
    var ang = -Math.PI / 2 + (i * Math.PI * 2) / labels.length;
    pts.push({ x: cx + Math.cos(ang) * r, y: cy + Math.sin(ang) * r, ang: ang });
  }
  var links = pts.map(function (p, idx) {
    var q = pts[(idx + 1) % pts.length];
    return '<path class="link" d="M' + p.x.toFixed(1) + " " + p.y.toFixed(1) + " L" + q.x.toFixed(1) + " " + q.y.toFixed(1) + '" fill="none" stroke="#141414" stroke-width="3"/>';
  }).join("");
  var spokes = pts.map(function (p) {
    return '<path class="spoke" d="M' + cx + " " + cy + " L" + p.x.toFixed(1) + " " + p.y.toFixed(1) + '" fill="none" stroke="#141414" stroke-width="2"/>';
  }).join("");
  var dots = pts.map(function (p) {
    return '<circle class="node" cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="8" fill="#D6FF3F" stroke="#141414" stroke-width="3"/>';
  }).join("");
  var texts = pts.map(function (p, idx) {
    var lx = cx + Math.cos(p.ang) * (r + 46);
    var ly = cy + Math.sin(p.ang) * (r + 34) + 6;
    return '<text class="node-label" x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" text-anchor="middle" font-size="18" font-weight="800" fill="#141414">' + esc(labels[idx]) + "</text>";
  }).join("");
  return '<svg class="diagram" viewBox="0 0 860 270" aria-hidden="true">' + spokes + links + dots +
    '<circle class="hub" cx="' + cx + '" cy="' + cy + '" r="26" fill="#D6FF3F" stroke="#141414" stroke-width="3"/>' +
    '<text class="hub-label" x="' + cx + '" y="' + (cy + 6) + '" text-anchor="middle" font-size="16" font-weight="900">' + esc(hubText) + "</text>" +
    texts + "</svg>";
}

function gearSvg() {
  return '<svg class="gears" viewBox="0 0 48 48" width="40" height="40" aria-hidden="true"><circle cx="24" cy="24" r="9" fill="none" stroke="#141414" stroke-width="4"/><path d="M24 3 V12 M24 36 V45 M3 24 H12 M36 24 H45 M9 9 L16 16 M32 32 L39 39 M39 9 L32 16 M16 32 L9 39" fill="none" stroke="#141414" stroke-width="3" stroke-linecap="round"/></svg>';
}

function buildB01(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="title-chips">' +
      '<div class="hero sticker anchor">' +
        '<div><p class="eyebrow">' + esc(beat.eyebrow) + "</p><h2>" +
          esc(beat.headline[0]) + "<br>" + esc(beat.headline[1]) +
        "</h2></div>" +
        '<div class="chapter-badge inkbox">' + esc(beat.stamp) + "</div>" +
      "</div>" +
      iconRow(beat.cards) +
    "</div>"
  );
}
function tweensB01(tl, root, start) {
  enter(tl, all(root, ".icon-card"), start + 0.35, { x: -70 }, { x: 0, stagger: 0.12, duration: 0.45, ease: "power3.out" });
  pulse(tl, must(root, ".chapter-badge"), start + 1.5);
  pulse(tl, must(root, ".chapter-badge"), start + 3.2);
}

function buildB02(beat) {
  need(beat, 4);
  return dom(
    '<div data-layout="is-pipeline" class="board">' +
      caption(beat.keyword) +
      '<div class="pipe">' +
        tile(beat.cards[0], "pipe-in") +
        '<span class="arrow">→</span>' +
        '<div class="tile pipe-flow">' + gearSvg() + esc(beat.cards[1]) + "</div>" +
        '<span class="arrow">→</span>' +
        tile(beat.cards[2], "pipe-out") +
        '<span class="arrow">→</span>' +
        tile(beat.cards[3], "pipe-go") +
      "</div>" +
      '<div class="stamp-wrap"><div class="stamp is-badge">' + esc(beat.stamp) + "</div></div>" +
    "</div>"
  );
}
function tweensB02(tl, root, start) {
  enter(tl, all(root, ".pipe .tile"), start + 0.25, { x: -40 }, { x: 0, stagger: 0.2, duration: 0.4, ease: "power2.out" });
  tl.to(must(root, ".gears"), { rotation: 360, duration: 1.4, ease: "none", transformOrigin: "center center" }, start + 1.1);
  enter(tl, must(root, ".is-badge"), start + 2.2, { scale: 1.4 }, { scale: 1, duration: 0.4 });
}

function buildB03(beat) {
  need(beat, 6);
  return dom(
    '<div data-layout="six-functions" class="board">' +
      caption(beat.keyword) +
      tileGrid(beat.cards, 3, "fn") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB03(tl, root, start) {
  enter(tl, all(root, ".fn"), start + 0.2, { rotationX: -70, transformOrigin: "center top" }, { rotationX: 0, stagger: 0.12, duration: 0.42 });
  lightTerms(tl, all(root, ".fn"), start + 1.6, 0.18);
}

function buildB04(beat) {
  need(beat, 4);
  return dom(
    '<div data-layout="raw-tokens" class="board">' +
      caption(beat.keyword) +
      '<div class="token-row">' + beat.cards.map(function (label) {
        return '<div class="token">' + esc(label) + "</div>";
      }).join("") + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB04(tl, root, start) {
  enter(tl, all(root, ".token"), start + 0.2, { y: -90, rotation: -12 }, { y: 0, rotation: 0, stagger: 0.12, duration: 0.5, ease: "bounce.out" });
  enter(tl, must(root, ".stamp"), start + 1.5, { scale: 1.3, rotation: -8 }, { scale: 1, rotation: -4, duration: 0.4 });
}

function buildB05(beat) {
  need(beat, 5);
  var svgs = [
    '<svg viewBox="0 0 86 72" aria-hidden="true"><text x="12" y="48" font-size="32" font-weight="900" fill="#141414">Aa</text></svg>',
    '<svg viewBox="0 0 86 72" aria-hidden="true"><text x="8" y="48" font-size="28" font-weight="900" fill="#141414">123</text></svg>',
    '<svg viewBox="0 0 86 72" aria-hidden="true"><rect x="8" y="14" width="70" height="44" rx="6" fill="#B9D6FF" stroke="#141414" stroke-width="3"/><circle cx="28" cy="30" r="6" fill="#D6FF3F" stroke="#141414" stroke-width="3"/></svg>',
    '<svg viewBox="0 0 86 72" aria-hidden="true"><path d="M6 36 H16 L24 16 L34 56 L44 22 L54 48 L64 36 H80" fill="none" stroke="#141414" stroke-width="4"/></svg>',
    '<svg viewBox="0 0 86 72" aria-hidden="true"><rect x="10" y="16" width="66" height="40" rx="4" fill="#FFD0E8" stroke="#141414" stroke-width="3"/><path d="M10 28 H76 M26 16 V56 M46 16 V56" stroke="#141414" stroke-width="3"/></svg>'
  ];
  return dom(
    '<div data-layout="five-types" class="board">' +
      caption(beat.keyword) +
      '<div class="icon-row">' + beat.cards.map(function (label, i) {
        return '<div class="icon-card sticker type-ico">' + svgs[i] + esc(label) + "</div>";
      }).join("") + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB05(tl, root, start) {
  enter(tl, all(root, ".type-ico"), start + 0.2, { scale: 0.4 }, { scale: 1, stagger: 0.12, duration: 0.4 });
  all(root, ".type-ico").forEach(function (el, i) {
    pulse(tl, el, start + 1.3 + i * 0.28);
  });
}

function buildB06(beat) {
  need(beat, 3);
  var raw = ["82", "65", "40", "條碼"];
  return dom(
    '<div data-layout="info-funnel" class="board">' +
      caption(beat.keyword) +
      '<div class="token-row">' + raw.map(function (label) {
        return '<div class="token raw">' + esc(label) + "</div>";
      }).join("") + "</div>" +
      '<div class="inkbox processor">處理 · 結構化</div>' +
      tileGrid(beat.cards, 3, "info-card") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB06(tl, root, start) {
  enter(tl, all(root, ".raw"), start + 0.15, { y: -30 }, { y: 0, stagger: 0.08, duration: 0.3 });
  tl.to(all(root, ".raw"), { y: 18, autoAlpha: 0.35, duration: 0.45, stagger: 0.05 }, start + 1.1);
  enter(tl, must(root, ".processor"), start + 1.3, { scale: 0.8 }, { scale: 1, duration: 0.35 });
  enter(tl, all(root, ".info-card"), start + 1.9, { y: 24 }, { y: 0, stagger: 0.12, duration: 0.4 });
  enter(tl, must(root, ".stamp"), start + 2.8, { scale: 1.2, rotation: -6 }, { scale: 1, rotation: -3, duration: 0.35 });
}

function buildB07(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="formula" class="board">' +
      caption(beat.keyword) +
      '<div class="eq-hero">' +
        '<span class="term term-a">' + esc(beat.cards[0]) + "</span>" +
        ' <span class="eq-mark">＝</span> ' +
        '<span class="term term-b">' + esc(beat.cards[1]) + "</span>" +
        ' <span class="eq-mark plus">＋</span> ' +
        '<span class="term term-c">' + esc(beat.cards[2]) + "</span>" +
      "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB07(tl, root, start) {
  enter(tl, must(root, ".term-b"), start + 0.25, { y: 16 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".plus"), start + 0.7, { scale: 0.4 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".term-c"), start + 1.05, { y: 16 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".eq-mark"), start + 1.5, { scale: 0.6 }, { scale: 1, duration: 0.25 });
  enter(tl, must(root, ".term-a"), start + 1.8, { scale: 0.7 }, { scale: 1, duration: 0.35 });
  tl.to(must(root, ".eq-hero"), { backgroundColor: "#D6FF3F", duration: 0.25, yoyo: true, repeat: 1 }, start + 2.5);
  enter(tl, must(root, ".stamp"), start + 3.1, { scale: 1.2 }, { scale: 1, duration: 0.3 });
}

function buildB08(beat) {
  need(beat, 5);
  return dom(
    '<div data-layout="pentagon" class="board">' +
      caption(beat.keyword) +
      pentagon(beat.cards, "I S") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB08(tl, root, start) {
  enter(tl, all(root, ".node"), start + 0.2, { scale: 0 }, { scale: 1, stagger: 0.08, duration: 0.3 });
  all(root, ".spoke").forEach(function (path, i) {
    drawPath(tl, path, start + 0.55 + i * 0.08, 0.35);
  });
  all(root, ".link").forEach(function (path, i) {
    drawPath(tl, path, start + 1.3 + i * 0.08, 0.3);
  });
  enter(tl, must(root, ".hub"), start + 2.1, { scale: 0.4 }, { scale: 1, duration: 0.35 });
  enter(tl, must(root, ".stamp"), start + 2.6, { scale: 0.8 }, { scale: 1, duration: 0.3 });
}

function buildB09(beat) {
  need(beat, 5);
  return dom(
    '<div data-layout="purpose-data" class="hw">' +
      '<div class="hw-card sticker">' +
        "<h3>系統功能</h3>" +
        tile(beat.cards[0], "morph") +
      "</div>" +
      '<div class="hw-card sticker">' +
        "<h3>數據</h3>" +
        tileGrid(beat.cards.slice(1), 2, "record") +
      "</div>" +
    "</div>"
  );
}
function tweensB09(tl, root, start) {
  enter(tl, all(root, ".hw-card"), start + 0.15, { y: 24 }, { y: 0, stagger: 0.12, duration: 0.4 });
  enter(tl, must(root, ".morph"), start + 0.7, { x: -20 }, { x: 0, duration: 0.4 });
  pulse(tl, must(root, ".morph"), start + 1.4);
  enter(tl, all(root, ".record"), start + 1.5, { y: 16 }, { y: 0, stagger: 0.1, duration: 0.35 });
}

function buildB10(beat) {
  need(beat, 6);
  var steps = beat.cards.slice(0, 3).map(function (label, i) {
    return '<div class="step sticker flow-step"><span>' + (i + 1) + "</span><div><b>" + esc(label) + "</b></div></div>";
  }).join("");
  return dom(
    '<div data-layout="flow-tech" class="hw">' +
      '<div class="hw-card sticker"><h3>流程</h3><div class="board">' + steps + "</div></div>" +
      '<div class="hw-card sticker"><h3>科技</h3>' + tileGrid(beat.cards.slice(3), 1, "tech") + "</div>" +
    "</div>"
  );
}
function tweensB10(tl, root, start) {
  enter(tl, all(root, ".flow-step"), start + 0.2, { x: -24 }, { x: 0, stagger: 0.16, duration: 0.35 });
  enter(tl, all(root, ".tech"), start + 1.1, { scale: 0.7 }, { scale: 1, stagger: 0.12, duration: 0.35 });
}

function buildB11(beat) {
  need(beat, 7);
  return dom(
    '<div data-layout="personnel" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-2">' + beat.cards.slice(0, 2).map(function (label) {
        return tile(label, "user");
      }).join("") + "</div>" +
      tileGrid(beat.cards.slice(2), 5, "role") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB11(tl, root, start) {
  enter(tl, all(root, ".user"), start + 0.2, { y: 20 }, { y: 0, stagger: 0.1, duration: 0.35 });
  enter(tl, all(root, ".role"), start + 0.8, { rotationY: -80 }, { rotationY: 0, stagger: 0.1, duration: 0.4 });
  enter(tl, must(root, ".stamp"), start + 2.2, { scale: 1.15 }, { scale: 1, duration: 0.3 });
}

function buildB12(beat) {
  need(beat, 7);
  var slots = beat.cards.map(function (label, i) {
    return '<div class="slot ready"><b>' + (i + 1) + "</b><small>" + esc(label) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="rail-ready" class="board">' +
      caption(beat.keyword) +
      '<div class="slot-rail">' + slots + "</div>" +
      '<p class="caption edb">重點辨識各過程 · 非死背單一順序</p>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB12(tl, root, start) {
  enter(tl, all(root, ".ready"), start + 0.2, { y: 16 }, { y: 0, stagger: 0.06, duration: 0.3 });
  tl.call(function () {
    all(root, ".ready").forEach(function (el) { el.style.borderStyle = "solid"; });
  }, null, start + 1.2);
  enter(tl, must(root, ".edb"), start + 1.8, { y: 10 }, { y: 0, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.3, { scale: 0.8 }, { scale: 1, duration: 0.3 });
}

function buildB13(beat) {
  need(beat, 4);
  var slots = beat.cards.map(function (label, i) {
    return '<div class="slot on filled"><b>' + (i + 1) + "</b><small>" + esc(label) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="rail-four" class="board">' +
      caption(beat.keyword) +
      '<div class="slot-rail">' + slots + "</div>" +
      '<div class="bar-track"><div class="bar"></div><span class="bar-val">' + esc(beat.stamp) + "</span></div>" +
    "</div>"
  );
}
function tweensB13(tl, root, start) {
  enter(tl, all(root, ".filled"), start + 0.2, { scale: 0.8 }, { scale: 1, stagger: 0.14, duration: 0.35 });
  tl.to(must(root, ".bar"), { width: "57%", duration: 0.8, ease: "power2.out" }, start + 0.9);
}

function buildB14(beat) {
  need(beat, 3);
  var prior = ["收集", "組織", "分析", "儲存"];
  var mini = prior.map(function (label) {
    return "<span>" + esc(label) + "</span>";
  }).join("") + beat.cards.map(function (label) {
    return '<span class="on late">' + esc(label) + "</span>";
  }).join("");
  var big = beat.cards.map(function (label, i) {
    return '<div class="slot on late-big"><b>' + (i + 5) + "</b><small>" + esc(label) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="rail-done" class="board">' +
      caption(beat.keyword) +
      '<div class="slot-rail">' + big + "</div>" +
      '<div class="mini-rail">' + mini + "</div>" +
      '<svg class="diagram chain-svg" viewBox="0 0 800 36" aria-hidden="true"><path class="chain" d="M12 18 H788" fill="none" stroke="#141414" stroke-width="4"/></svg>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB14(tl, root, start) {
  enter(tl, all(root, ".late-big"), start + 0.2, { y: 18 }, { y: 0, stagger: 0.14, duration: 0.35 });
  enter(tl, all(root, ".late"), start + 0.9, { scale: 0.7 }, { scale: 1, stagger: 0.08, duration: 0.25 });
  drawPath(tl, must(root, ".chain"), start + 1.4, 0.7);
  pulse(tl, must(root, ".mini-rail"), start + 2.3);
  enter(tl, must(root, ".stamp"), start + 2.6, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB15(beat) {
  need(beat, 3);
  var panels = beat.cards.map(function (label, i) {
    return '<div class="recap-panel sticker"><h3>' + (i + 1) + "</h3><p>" + esc(label) + "</p></div>";
  }).join("");
  return dom(
    '<div data-layout="recap-three" class="board">' +
      caption(beat.keyword) +
      '<div class="recap-row">' + panels + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB15(tl, root, start) {
  enter(tl, all(root, ".recap-panel"), start + 0.2, { y: -30 }, { y: 0, stagger: 0.16, duration: 0.45, ease: "power3.out" });
  enter(tl, must(root, ".stamp"), start + 1.3, { scale: 1.3, rotation: -8 }, { scale: 1, rotation: -4, duration: 0.4 });
}

var SCENE_BUILDERS = {
  B01: buildB01,
  B02: buildB02,
  B03: buildB03,
  B04: buildB04,
  B05: buildB05,
  B06: buildB06,
  B07: buildB07,
  B08: buildB08,
  B09: buildB09,
  B10: buildB10,
  B11: buildB11,
  B12: buildB12,
  B13: buildB13,
  B14: buildB14,
  B15: buildB15
};

var SCENE_TWEENS = {
  B01: tweensB01,
  B02: tweensB02,
  B03: tweensB03,
  B04: tweensB04,
  B05: tweensB05,
  B06: tweensB06,
  B07: tweensB07,
  B08: tweensB08,
  B09: tweensB09,
  B10: tweensB10,
  B11: tweensB11,
  B12: tweensB12,
  B13: tweensB13,
  B14: tweensB14,
  B15: tweensB15
};

function buildScene(beat) {
  var fn = SCENE_BUILDERS[beat.id];
  if (!fn) throw new Error("No scene builder for " + beat.id);
  var node = fn(beat);
  node.classList.add("scene");
  node.id = "scene-" + beat.id;
  node.dataset.beat = beat.id;
  return node;
}

function addSceneTweens(tl, beat, root, start) {
  var fn = SCENE_TWEENS[beat.id];
  if (!fn) throw new Error("No scene tweens for " + beat.id);
  fn(tl, root, start);
}

function mountScenes(stack) {
  stack.innerHTML = "";
  CH4_BEATS.forEach(function (beat) {
    if (!SCENE_BUILDERS[beat.id] || !SCENE_TWEENS[beat.id]) {
      throw new Error("Missing scene " + beat.id);
    }
    stack.appendChild(buildScene(beat));
  });
}
