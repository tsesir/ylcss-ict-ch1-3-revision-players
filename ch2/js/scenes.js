/* Per-beat stages for ICT Ch2 數據組織及數據控制. One builder and one tween set per beat.
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
  need(beat, 5);
  return dom(
    '<div data-layout="ch2-title" class="board">' +
      '<div class="hero sticker anchor">' +
        '<div><p class="eyebrow">' + esc(beat.eyebrow) + "</p><h2>" +
          esc(beat.headline[0]) + "<br>" + esc(beat.headline[1]) +
        "</h2></div>" +
        '<div class="chapter-badge inkbox">' + esc(beat.stamp) + "</div>" +
      "</div>" +
      '<div class="tile-grid cols-2">' +
        tile(beat.cards[0], "cluster-a") +
        tile(beat.cards[1], "cluster-b") +
      "</div>" +
      tileGrid(beat.cards.slice(2), 3, "badge-chip") +
    "</div>"
  );
}
function tweensB01(tl, root, start) {
  enter(tl, all(root, ".cluster-a, .cluster-b"), start + 0.3, { x: -50 }, { x: 0, stagger: 0.15, duration: 0.4 });
  enter(tl, all(root, ".badge-chip"), start + 0.9, { y: 16 }, { y: 0, stagger: 0.1, duration: 0.35 });
  pulse(tl, must(root, ".chapter-badge"), start + 1.8);
}

function buildB02(beat) {
  need(beat, 4);
  var rails = beat.cards.map(function (label, i) {
    return '<div class="step sticker rail"><span>' + (i + 1) + "</span><div><b>" + esc(label) + "</b></div></div>";
  }).join("");
  return dom(
    '<div data-layout="four-rails" class="board">' +
      caption(beat.keyword) +
      rails +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB02(tl, root, start) {
  enter(tl, all(root, ".rail"), start + 0.2, { x: -36 }, { x: 0, stagger: 0.18, duration: 0.4 });
  all(root, ".rail").forEach(function (el, i) {
    pulse(tl, el, start + 1.4 + i * 0.22);
  });
}

function buildB03(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="gigo" class="board">' +
      '<div class="warn banner">杜絕 G I G O</div>' +
      '<div class="pipe">' +
        '<div class="tile bad chute-in">' + esc(beat.cards[0]) + "</div>" +
        '<span class="arrow">→</span>' +
        '<div class="inkbox proc">' + esc(beat.cards[1]) + "</div>" +
        '<span class="arrow">→</span>' +
        '<div class="tile bad chute-out">' + esc(beat.cards[2]) + "</div>" +
      "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB03(tl, root, start) {
  enter(tl, must(root, ".banner"), start + 0.15, { y: -16 }, { y: 0, duration: 0.3 });
  enter(tl, must(root, ".chute-in"), start + 0.45, { x: -40 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".proc"), start + 0.9, { scale: 0.7 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".chute-out"), start + 1.3, { x: 40 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".stamp"), start + 1.9, { scale: 1.25, rotation: -6 }, { scale: 1, rotation: -3, duration: 0.35 });
}

function buildB04(beat) {
  need(beat, 3);
  var extras = ["來源填寫不實", "1 → l · 0 → O", "16 → 61"];
  var cards = beat.cards.map(function (label, i) {
    return '<div class="tile err"><b>' + esc(label) + "</b><small>" + esc(extras[i]) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="three-errors" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-3">' + cards + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB04(tl, root, start) {
  enter(tl, all(root, ".err"), start + 0.2, { rotationY: 80 }, { rotationY: 0, stagger: 0.22, duration: 0.45 });
  enter(tl, must(root, ".stamp"), start + 1.6, { scale: 0.8 }, { scale: 1, duration: 0.3 });
}

function buildB05(beat) {
  need(beat, 2);
  return dom(
    '<div data-layout="valid-vs-verify" class="board">' +
      caption(beat.keyword) +
      '<div class="hw">' +
        '<div class="hw-card sticker side-l"><h3>有效性檢驗</h3>' + tile(beat.cards[0], "good") + "</div>" +
        '<div class="hw-card sticker side-r"><h3>驗證</h3>' + tile(beat.cards[1], "good") + "</div>" +
      "</div>" +
      '<div class="warn mix">' + esc(beat.stamp) + "</div>" +
    "</div>"
  );
}
function tweensB05(tl, root, start) {
  enter(tl, must(root, ".side-l"), start + 0.2, { x: -30 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".side-r"), start + 0.45, { x: 30 }, { x: 0, duration: 0.4 });
  enter(tl, must(root, ".mix"), start + 1.2, { scale: 1.2 }, { scale: 1, duration: 0.35 });
  pulse(tl, must(root, ".mix"), start + 2);
}

function buildB06(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="validation-gate" class="board">' +
      caption(beat.keyword) +
      '<div class="pipe">' +
        '<div class="tile field">91234567</div>' +
        '<span class="arrow">→</span>' +
        '<div class="inkbox gate">' + esc(beat.cards[0]) + "</div>" +
        '<span class="arrow">→</span>' +
        '<div class="tile good door">' + esc(beat.cards[1]) + "</div>" +
      "</div>" +
      '<div class="warn fake">' + esc(beat.cards[2]) + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB06(tl, root, start) {
  enter(tl, must(root, ".field"), start + 0.15, { y: 12 }, { y: 0, duration: 0.3 });
  enter(tl, must(root, ".gate"), start + 0.6, { scale: 0.8 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".door"), start + 1.05, { x: 16 }, { x: 0, duration: 0.3 });
  enter(tl, must(root, ".fake"), start + 1.7, { scale: 0.9 }, { scale: 1, duration: 0.35 });
  pulse(tl, must(root, ".fake"), start + 2.3);
}

function buildB07(beat) {
  need(beat, 3);
  return dom(
    '<div data-layout="verify-dual" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-2">' +
        '<div class="tile dual-a"><b>' + esc(beat.cards[0]) + '</b><small>●●●●　●●●●</small></div>' +
        '<div class="tile dual-b"><b>' + esc(beat.cards[1]) + "</b><small>甲　乙　比對</small></div>" +
      "</div>" +
      '<div class="inkbox match">' + esc(beat.cards[2]) + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB07(tl, root, start) {
  enter(tl, must(root, ".dual-a"), start + 0.2, { y: 16 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".dual-b"), start + 0.7, { y: 16 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".match"), start + 1.3, { scale: 0.85 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 1.8, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB08(beat) {
  need(beat, 7);
  var slots = beat.cards.map(function (_, i) {
    return '<div class="slot wait"><b>' + (i + 1) + "</b></div>";
  }).join("");
  return dom(
    '<div data-layout="check-menu" class="board">' +
      caption(beat.keyword) +
      '<div class="slot-rail">' + slots + "</div>" +
      '<div class="pipe">' +
        '<div class="tile bad parity">奇偶檢測</div>' +
        '<span class="arrow">→</span>' +
        '<div class="tile dim bin">傳輸／儲存錯誤偵測</div>' +
      "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB08(tl, root, start) {
  enter(tl, all(root, ".wait"), start + 0.15, { y: 10 }, { y: 0, stagger: 0.05, duration: 0.25 });
  enter(tl, must(root, ".parity"), start + 0.8, { y: -20 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".stamp"), start + 1.3, { scale: 1.2, rotation: -8 }, { scale: 1, rotation: -4, duration: 0.35 });
  tl.to(must(root, ".parity"), { x: 80, autoAlpha: 0.4, duration: 0.55, ease: "power2.in" }, start + 2);
  enter(tl, must(root, ".bin"), start + 2.2, { scale: 0.8 }, { scale: 1, duration: 0.3 });
}

function buildB09(beat) {
  need(beat, 3);
  var hints = ["空欄閃紅，填上才過", "8 位鎖定", "0–100 · 月份 1–12"];
  var tiles = beat.cards.map(function (label, i) {
    return '<div class="tile demo d' + i + '"><b>' + esc(label) + "</b><small>" + esc(hints[i]) + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="presence-length-range" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-3">' + tiles + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB09(tl, root, start) {
  enter(tl, must(root, ".d0"), start + 0.2, { y: 16 }, { y: 0, duration: 0.35 });
  tl.to(must(root, ".d0"), { borderColor: "#E23B3B", duration: 0.2, yoyo: true, repeat: 1 }, start + 0.7);
  enter(tl, must(root, ".d1"), start + 1.1, { y: 16 }, { y: 0, duration: 0.35 });
  enter(tl, must(root, ".d2"), start + 1.7, { y: 16 }, { y: 0, duration: 0.35 });
  lightTerms(tl, all(root, ".demo"), start + 2.3, 0.12);
}

function buildB10(beat) {
  need(beat, 3);
  var hints = ["清單之外會被拒", "name＠school.edu", "字母被拒 · 整數通過"];
  var tiles = beat.cards.map(function (label, i) {
    return '<div class="tile demo e' + i + '"><b>' + esc(label) + "</b><small>" + hints[i] + "</small></div>";
  }).join("");
  return dom(
    '<div data-layout="fixed-format-type" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-3">' + tiles + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB10(tl, root, start) {
  enter(tl, must(root, ".e0"), start + 0.2, { scale: 0.85 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".e1"), start + 0.8, { scale: 0.85 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".e2"), start + 1.4, { scale: 0.85 }, { scale: 1, duration: 0.3 });
  tl.to(must(root, ".e2"), { backgroundColor: "#B8F2D0", duration: 0.3 }, start + 2);
}

function buildB11(beat) {
  need(beat, 3);
  var bits = "4829173".split("").map(function (d) { return "<b>" + d + "</b>"; }).join("");
  return dom(
    '<div data-layout="check-digit" class="board">' +
      caption(beat.keyword) +
      '<div class="pipe">' +
        '<div class="bits">' + bits + "</div>" +
        '<span class="arrow">×</span>' +
        '<div class="inkbox weight">權重</div>' +
        '<span class="arrow">→</span>' +
        '<div class="tile good check">核對字元</div>' +
      "</div>" +
      tileGrid(beat.cards, 3, "sample") +
      '<p class="caption aside">不含奇偶檢驗位</p>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB11(tl, root, start) {
  enter(tl, all(root, ".bits b"), start + 0.15, { y: -12 }, { y: 0, stagger: 0.05, duration: 0.25 });
  enter(tl, must(root, ".weight"), start + 0.8, { scale: 0.7 }, { scale: 1, duration: 0.3 });
  enter(tl, must(root, ".check"), start + 1.3, { scale: 0.6 }, { scale: 1, duration: 0.35 });
  pulse(tl, must(root, ".check"), start + 1.8);
  enter(tl, all(root, ".sample"), start + 2.1, { y: 12 }, { y: 0, stagger: 0.1, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.6, { scale: 1.1 }, { scale: 1, duration: 0.3 });
}

function buildB12(beat) {
  need(beat, 5);
  var widths = [92, 78, 64, 50, 38];
  var layers = beat.cards.map(function (label, i) {
    return '<div class="layer" style="width:' + widths[i] + '%">' + esc(label) + "</div>";
  }).join("");
  return dom(
    '<div data-layout="hierarchy" class="board">' +
      caption(beat.keyword) +
      '<div class="pyramid">' + layers + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB12(tl, root, start) {
  enter(tl, all(root, ".layer"), start + 0.2, { scaleX: 0.2 }, { scaleX: 1, stagger: 0.16, duration: 0.4, ease: "power2.out" });
  enter(tl, must(root, ".stamp"), start + 1.6, { y: 8 }, { y: 0, duration: 0.3 });
}

function buildB13(beat) {
  need(beat, 4);
  return dom(
    '<div data-layout="sequential" class="board">' +
      caption(beat.keyword) +
      '<svg class="diagram tape" viewBox="0 0 860 120" aria-hidden="true">' +
        '<circle class="reel" cx="90" cy="60" r="36" fill="#FFD0E8" stroke="#141414" stroke-width="3"/>' +
        '<circle class="reel" cx="770" cy="60" r="36" fill="#FFD0E8" stroke="#141414" stroke-width="3"/>' +
        '<path class="tape-path" d="M126 60 H734" fill="none" stroke="#141414" stroke-width="8"/>' +
        '<rect class="head" x="400" y="40" width="28" height="40" rx="4" fill="#D6FF3F" stroke="#141414" stroke-width="3"/>' +
      "</svg>" +
      '<div class="seek long"><i></i></div>' +
      tileGrid(beat.cards, 4, "use") +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB13(tl, root, start) {
  tl.to(all(root, ".reel"), { rotation: 220, duration: 1.6, ease: "none", transformOrigin: "center center" }, start + 0.2);
  tl.to(must(root, ".head"), { x: 180, duration: 1.4, ease: "power1.inOut" }, start + 0.3);
  tl.to(must(root, ".seek i"), { width: "92%", duration: 1.4, ease: "power1.inOut" }, start + 0.3);
  enter(tl, all(root, ".use"), start + 1.8, { y: 12 }, { y: 0, stagger: 0.08, duration: 0.3 });
  enter(tl, must(root, ".stamp"), start + 2.4, { scale: 1.05 }, { scale: 1, duration: 0.25 });
}

function buildB14(beat) {
  need(beat, 4);
  return dom(
    '<div data-layout="direct-access" class="board">' +
      caption(beat.keyword) +
      tileGrid(beat.cards.slice(0, 1), 1, "media") +
      '<div class="pipe">' +
        '<div class="inkbox key">位址／關鍵碼</div>' +
        '<span class="arrow jump">⟶</span>' +
        '<div class="tile good hit">' + esc(beat.cards[1]) + "</div>" +
      "</div>" +
      '<div class="seek short"><i></i></div>' +
      tileGrid(beat.cards.slice(2), 2, "note") +
      '<div class="warn device">勿混淆裝置層的隨機／順序特性</div>' +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB14(tl, root, start) {
  enter(tl, must(root, ".media"), start + 0.15, { y: 12 }, { y: 0, duration: 0.3 });
  enter(tl, must(root, ".key"), start + 0.5, { x: -20 }, { x: 0, duration: 0.3 });
  enter(tl, must(root, ".jump"), start + 0.9, { scale: 0.6 }, { scale: 1, duration: 0.25 });
  enter(tl, must(root, ".hit"), start + 1.15, { scale: 0.8 }, { scale: 1, duration: 0.3 });
  tl.to(must(root, ".seek.short i"), { width: "30%", duration: 0.45, ease: "power2.out" }, start + 1.2);
  enter(tl, all(root, ".note"), start + 1.7, { y: 10 }, { y: 0, stagger: 0.1, duration: 0.3 });
  enter(tl, must(root, ".device"), start + 2.2, { autoAlpha: 0.35 }, { autoAlpha: 1, duration: 0.3 });
}

function buildB15(beat) {
  need(beat, 4);
  var panels = beat.cards.map(function (label, i) {
    return '<div class="recap-panel sticker"><h3>' + (i + 1) + "</h3><p>" + esc(label) + "</p></div>";
  }).join("");
  return dom(
    '<div data-layout="recap-four" class="board">' +
      caption(beat.keyword) +
      '<div class="tile-grid cols-2">' + panels + "</div>" +
      stampOf(beat) +
    "</div>"
  );
}
function tweensB15(tl, root, start) {
  enter(tl, all(root, ".recap-panel"), start + 0.15, { y: -24 }, { y: 0, stagger: 0.12, duration: 0.4 });
  enter(tl, must(root, ".stamp"), start + 1.2, { scale: 1.2, rotation: -6 }, { scale: 1, rotation: -3, duration: 0.35 });
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
