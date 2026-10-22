/* Per-beat stages for ICT Ch3 數據表示. One builder and one tween set per beat.
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
  var rain = "010011010110".split("").map(function (b) { return "<b>" + b + "</b>"; }).join("");
  return dom(
    '<div data-layout="ch3-title" class="board">' +
      '<div class="hero sticker anchor">' +
        '<div><p class="eyebrow">' + esc(beat.eyebrow) + "</p><h2>" +
          esc(beat.headline[0]) + "<br>" + esc(beat.headline[1]) +
        "</h2></div>" +
        '<div class="chapter-badge inkbox">' + esc(beat.stamp) + "</div>" +
      "</div>" +
      iconRow(beat.cards) +
      '<div class="bits rain">' + rain + "</div>" +
    "</div>"
  );
}
function tweensB01(tl, root, start) {
  enter(tl, all(root, ".icon-card"), start + 0.3, { y: 24 }, { y: 0, stagger: 0.12, duration: 0.4 });
  enter(tl, all(root, ".rain b"), start + 1, { y: -30 }, { y: 0, stagger: 0.04, duration: 0.35 });
  pulse(tl, must(root, ".chapter-badge"), start + 1.8);
}

function buildB02(beat) {
  need(beat, 3);
  var pillars = beat.cards.map(function (label, i) {
    return '<div class="tile pillar p' + i + '"><b>' + (i + 1) + "</b><small>" + esc(label) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="three-pillars" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-3">' + pillars + "</div>" +
      '<div class="bits strip">010101010101</div>'.replace(/(\d)/g, "<b>$1</b>") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB02(tl, root, start) {
  enter(tl, all(root, ".pillar"), start + 0.2, { y: 30 }, { y: 0, stagger: 0.16, duration: 0.4 });
  enter(tl, all(root, ".strip b"), start + 1.1, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.04, duration: 0.2 });
  pulse(tl, must(root, ".p0"), start + 1.8);
  enter(tl, must(root, ".stamp"), start + 2.2, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB03(beat) {
  need(beat, 6);
  var digits = [
    { d: "1", face: beat.cards[0], place: beat.cards[2] },
    { d: "0", face: beat.cards[0], place: beat.cards[3] },
    { d: "1", face: beat.cards[0], place: beat.cards[4] }
  ];
  var cols = digits.map(function (col) {
    return '<div class="tile place-col"><b class="glyph">' + col.d + '</b><small class="face">' +
      esc(col.face) + "</small><small class=\"tower\">" + esc(col.place) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="place-value" class="board">' +
      caption(beat.cards[1]) +
      '<div class="tile-grid cols-3">' + cols + "</div>" +
      '<div class="inkbox sum">所代表的數值　' + esc(beat.cards[5]) + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB03(tl, root, start) {
  enter(tl, all(root, ".glyph"), start + 0.15, { scale: 0.5 }, { scale: 1, stagger: 0.1, duration: 0.3 });
  enter(tl, all(root, ".face"), start + 0.6, { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.1, duration: 0.25 });
  enter(tl, all(root, ".tower"), start + 1.2, { y: 20 }, { y: 0, stagger: 0.12, duration: 0.35 });
  enter(tl, must(root, ".sum"), start + 1.9, { scale: 0.9 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.4, { scale: 1.15, rotation: -6 }, { scale: 1, rotation: -3, duration: 0.35 });
}

function buildB04(beat) {
  need(beat, 3);
  var groups = [
    { bits: "1010", hex: "A" },
    { bits: "1111", hex: "F" }
  ];
  var html = groups.map(function (g) {
    var bits = g.bits.split("").map(function (b) { return "<b>" + b + "</b>"; }).join("");
    return '<div class="tile nibble"><div class="bits">' + bits + '</div><b class="hex">' + g.hex + "</b></div>";
  }).join('<span class="arrow">|</span>');
  return dom(
    '<div data-layout="bin-hex" class="board">' +
      caption(beat.keyword) +
      tileGrid(beat.cards, 3, "rule") +
      '<div class="pipe">' + html + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB04(tl, root, start) {
  enter(tl, all(root, ".rule"), start + 0.15, { y: 12 }, { y: 0, stagger: 0.1, duration: 0.3 });
  enter(tl, all(root, ".nibble"), start + 0.8, { scale: 0.85 }, { scale: 1, stagger: 0.2, duration: 0.35 });
  enter(tl, all(root, ".hex"), start + 1.5, { scale: 0.4 }, { scale: 1, stagger: 0.15, duration: 0.3 });
  lightTerms(tl, all(root, ".hex"), start + 2.1, 0.15);
}

function buildB05(beat) {
  need(beat, 6);
  var widths = [16, 28, 42, 58, 74, 92];
  var rows = beat.cards.map(function (label, i) {
    return '<div class="unit-step"><i class="grow" style="width:' + widths[i] + '%"></i><span>' + esc(label) + "</span></div>";
  }).join("");
  return dom(
    '<div data-layout="unit-ladder" class="board">' +
      caption(beat.keyword) +
      '<div class="ladder-units">' + rows + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB05(tl, root, start) {
  enter(tl, all(root, ".unit-step"), start + 0.15, { x: -16 }, { x: 0, stagger: 0.12, duration: 0.3 });
  tl.fromTo(all(root, ".grow"), { scaleX: 0 }, { scaleX: 1, duration: 0.45, stagger: 0.12, ease: "power2.out" }, start + 0.4);
  enter(tl, must(root, ".stamp"), start + 1.8, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB06(beat) {
  need(beat, 3);
  var cols = beat.cards.map(function (label) {
    return '<div class="tile col"><h3>' + esc(label) + '</h3><p>MSB　—</p><p>零　—</p><p>範圍　—</p></div>';
  }).join("");
  return dom(
    '<div data-layout="three-methods" class="board">' +
      caption(beat.keyword) +
      '<div class="col-table">' + cols + "</div>" +
      '<div class="inkbox msb">M S B</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB06(tl, root, start) {
  enter(tl, all(root, ".col"), start + 0.2, { y: 16 }, { y: 0, stagger: 0.14, duration: 0.4 });
  pulse(tl, must(root, ".msb"), start + 1.2);
  enter(tl, must(root, ".stamp"), start + 1.7, { y: 8 }, { y: 0, duration: 0.3 });
}

function buildB07(beat) {
  need(beat, 3);
  var bits = "11111111".split("").map(function (b) { return "<b>" + b + "</b>"; }).join("");
  return dom(
    '<div data-layout="unsigned" class="board">' +
      caption(beat.keyword) +
      '<div class="bits mag">' + bits + "</div>" +
      tileGrid(beat.cards, 3, "fact") +
      '<div class="bar-track"><div class="bar"></div><span class="bar-val">0 → 255</span></div>' +
      '<div class="tile bad crossed">沒有符號位</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB07(tl, root, start) {
  enter(tl, all(root, ".mag b"), start + 0.1, { autoAlpha: 0.2 }, { autoAlpha: 1, stagger: 0.05, duration: 0.2 });
  lightTerms(tl, all(root, ".mag b"), start + 0.7, 0.04);
  enter(tl, all(root, ".fact"), start + 1.2, { y: 10 }, { y: 0, stagger: 0.1, duration: 0.3 });
  tl.to(must(root, ".bar"), { width: "100%", duration: 0.7, ease: "power2.out" }, start + 1.4);
  enter(tl, must(root, ".crossed"), start + 2.2, { scale: 0.8 }, { scale: 1, duration: 0.3 });
}

function buildB08(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="sign-magnitude" class="board">' +
      caption(beat.keyword) +
      '<div class="pipe">' +
        '<div class="bits"><b class="msb">0</b><b>0</b><b>1</b><b>0</b><b>1</b><b>1</b><b>0</b><b>1</b></div>' +
        '<div class="tile sign-read">正</div>' +
      "</div>" +
      '<div class="tile-grid cols-2">' +
        '<div class="tile zero z0">+0　00000000</div>' +
        '<div class="tile zero bad z1">−0　10000000</div>' +
      "</div>" +
      tileGrid(beat.cards, 3, "fact") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB08(tl, root, start) {
  enter(tl, must(root, ".msb"), start + 0.2, { scale: 0.5 }, { scale: 1, duration: 0.3 });
  tl.call(function () {
    must(root, ".msb").textContent = "1";
    must(root, ".sign-read").textContent = "負";
  }, null, start + 0.9);
  pulse(tl, must(root, ".msb"), start + 1);
  enter(tl, all(root, ".zero"), start + 1.3, { y: 12 }, { y: 0, stagger: 0.12, duration: 0.3 });
  enter(tl, all(root, ".fact"), start + 1.9, { y: 10 }, { y: 0, stagger: 0.08, duration: 0.25 });
  enter(tl, must(root, ".stamp"), start + 2.5, { scale: 1.1, rotation: -5 }, { scale: 1, rotation: -3, duration: 0.3 });
}

function buildB09(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="twos-compare" class="board">' +
      caption(beat.keyword) +
      '<div class="hw">' +
        '<div class="hw-card sticker old"><h3>符號及值</h3><div class="tile dim">雙重零 +0／−0</div><p>−127 … +127</p></div>' +
        '<div class="hw-card sticker neu"><h3>二進制補碼</h3><div class="tile good unique">00000000 ＝ 0</div>' +
          tileGrid(beat.cards, 1, "fact") +
        "</div>" +
      "</div>" +
    "</div>"
  );
}
function tweensB09(tl, root, start) {
  enter(tl, must(root, ".old"), start + 0.15, { autoAlpha: 0.3 }, { autoAlpha: 1, duration: 0.3 });
  tl.to(must(root, ".old"), { autoAlpha: 0.45, duration: 0.4 }, start + 0.8);
  enter(tl, must(root, ".neu"), start + 0.5, { x: 20 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".unique"), start + 1.1, { scale: 0.8 }, { scale: 1, duration: 0.3 });
  enter(tl, all(root, ".fact"), start + 1.5, { y: 10 }, { y: 0, stagger: 0.1, duration: 0.3 });
}

function buildB10(beat) {
  need(beat, 3);
  var steps = beat.cards.map(function (label, i) {
    return '<div class="step sticker step-n"><span>' + (i + 1) + "</span><div><b>" + esc(label) + "</b></div></div>";
  }).join("");
  return dom(
    '<div data-layout="twos-steps" class="board">' +
      caption(beat.keyword) +
      steps +
      '<div class="inkbox example">−29 · 8-bit</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB10(tl, root, start) {
  enter(tl, all(root, ".step-n"), start + 0.15, { x: -20 }, { x: 0, stagger: 0.2, duration: 0.4 });
  lightTerms(tl, all(root, ".step-n"), start + 1.2, 0.2);
  enter(tl, must(root, ".example"), start + 2, { scale: 0.85 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.4, { scale: 1.15 }, { scale: 1, duration: 0.3 });
}

function buildB11(beat) {
  need(beat, 3);
  var cls = ["bad ov", "bad ov", "good ok"];
  var tiles = beat.cards.map(function (label, i) {
    return '<div class="tile ' + cls[i] + '">' + esc(label) + "</div>";
  }).join("");
  return dom(
    '<div data-layout="overflow" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-3">' + tiles + "</div>" +
      '<div class="warn rule">同號相加得反號 → 溢出誤差</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB11(tl, root, start) {
  enter(tl, all(root, ".ov"), start + 0.2, { scale: 0.8 }, { scale: 1, stagger: 0.15, duration: 0.35 });
  tl.to(all(root, ".ov"), { backgroundColor: "#FFD0E8", duration: 0.25, stagger: 0.1 }, start + 0.9);
  enter(tl, must(root, ".ok"), start + 1.4, { scale: 0.8 }, { scale: 1, duration: 0.35 });
  enter(tl, must(root, ".rule"), start + 1.9, { y: 10 }, { y: 0, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.3, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB12(beat) {
  need(beat, 3);
  var cells = "";
  var i;
  for (i = 0; i < 128; i++) cells += "<i></i>";
  return dom(
    '<div data-layout="ascii" class="board">' +
      caption(beat.keyword) +
      '<div class="bits byte"><b>0</b><b>1</b><b>0</b><b>0</b><b>0</b><b>0</b><b>0</b><b>1</b></div>' +
      '<div class="ascii-grid">' + cells + "</div>" +
      tileGrid(beat.cards, 3, "fact") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB12(tl, root, start) {
  enter(tl, all(root, ".byte b"), start + 0.1, { y: -8 }, { y: 0, stagger: 0.04, duration: 0.2 });
  tl.to(must(root, ".byte b"), { backgroundColor: "#D6FF3F", color: "#141414", duration: 0.2 }, start + 0.5);
  tl.to(all(root, ".ascii-grid i"), { backgroundColor: "#D6FF3F", duration: 0.15, stagger: 0.008 }, start + 0.8);
  enter(tl, all(root, ".fact"), start + 2.1, { y: 8 }, { y: 0, stagger: 0.08, duration: 0.25 });
  enter(tl, must(root, ".stamp"), start + 2.6, { scale: 1.05 }, { scale: 1, duration: 0.25 });
}

function buildB13(beat) {
  need(beat, 4);
  return dom(
    '<div data-layout="big5-gb" class="board">' +
      '<div class="hw">' +
        '<div class="hw-card sticker big5"><h3>' + esc(beat.cards[0]) + "</h3><p>1–2 字節 · 繁體常用</p><div class=\"warn moji\">跨區易亂碼</div></div>" +
        '<div class="hw-card sticker gb"><h3>國標碼 GB</h3>' +
          tileGrid(beat.cards.slice(1), 1, "gb-var") +
        "</div>" +
      "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB13(tl, root, start) {
  enter(tl, must(root, ".big5"), start + 0.15, { x: -20 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".moji"), start + 0.7, { scale: 0.9 }, { scale: 1, duration: 0.3 });
  enter(tl, all(root, ".gb-var"), start + 1.1, { x: 16 }, { x: 0, stagger: 0.12, duration: 0.35 });
  enter(tl, must(root, ".stamp"), start + 1.8, { scale: 1.08 }, { scale: 1, duration: 0.3 });
}

function buildB14(beat) {
  need(beat, 3);
  var widths = [25, 70, 100];
  var bars = beat.cards.map(function (label, i) {
    return '<div class="unit-step utf"><i class="grow" style="width:' + widths[i] + '%"></i><span>' + esc(label) + "</span></div>";
  }).join("");
  return dom(
    '<div data-layout="utf8" class="board">' +
      caption(beat.keyword) +
      bars +
      '<div class="inkbox compat">ASCII ⊂ UTF-8 · HTML5</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB14(tl, root, start) {
  enter(tl, all(root, ".utf"), start + 0.15, { x: -12 }, { x: 0, stagger: 0.14, duration: 0.3 });
  tl.fromTo(all(root, ".grow"), { scaleX: 0 }, { scaleX: 1, duration: 0.5, stagger: 0.14, ease: "power2.out" }, start + 0.4);
  enter(tl, must(root, ".compat"), start + 1.5, { scale: 0.9 }, { scale: 1, duration: 0.3 });
  pulse(tl, must(root, ".compat"), start + 2);
  enter(tl, must(root, ".stamp"), start + 2.3, { scale: 1.1 }, { scale: 1, duration: 0.25 });
}

function buildB15(beat) {
  need(beat, 4);
  var panels = beat.cards.map(function (label, i) {
    return '<div class="recap-panel sticker"><h3>' + (i + 1) + "</h3><p>" + esc(label) + "</p></div>";
  }).join("");
  return dom(
    '<div data-layout="recap-ch3" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-2">' + panels + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB15(tl, root, start) {
  enter(tl, all(root, ".recap-panel"), start + 0.15, { y: -22 }, { y: 0, stagger: 0.12, duration: 0.4 });
  enter(tl, must(root, ".stamp"), start + 1.15, { scale: 1.2, rotation: -6 }, { scale: 1, rotation: -3, duration: 0.35 });
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
