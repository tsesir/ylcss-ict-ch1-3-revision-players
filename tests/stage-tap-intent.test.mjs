import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function extractIntent(source, file) {
  const match = source.match(/function stageTapIntent\(input\) \{[\s\S]*?\n\}/);
  assert.ok(match, file + " is missing stageTapIntent");
  return match[0];
}

const sources = ["ch1", "ch2", "ch3"].map(function (chapter) {
  const file = path.join(root, chapter, "js", "player.js");
  return { file: file, source: fs.readFileSync(file, "utf8") };
});

const body = extractIntent(sources[0].source, sources[0].file);
sources.slice(1).forEach(function (entry) {
  assert.equal(extractIntent(entry.source, entry.file), body, entry.file + " drifted");
});

const stageTapIntent = new Function(body + "\nreturn stageTapIntent;")();

const cases = [
  { name: "playing centre tap pauses", input: { playing: true, atStart: false, atEnd: false }, want: "pause" },
  { name: "paused mid tap resumes", input: { playing: false, atStart: false, atEnd: false }, want: "resume" },
  { name: "playing at the opening frames still pauses", input: { playing: true, atStart: true, atEnd: false }, want: "pause" },
  { name: "idle start keeps the play overlay", input: { playing: false, atStart: true, atEnd: false }, want: "ignore" },
  { name: "ended playback keeps the replay overlay", input: { playing: false, atStart: false, atEnd: true }, want: "ignore" },
  { name: "control target is ignored", input: { playing: true, onControl: true }, want: "ignore" },
  { name: "scrubber drag is ignored", input: { playing: true, scrubbing: true }, want: "ignore" },
  { name: "moved pointer is ignored", input: { playing: false, atStart: false, atEnd: false, moved: true }, want: "ignore" },
  { name: "missing input is ignored", input: null, want: "ignore" }
];

cases.forEach(function (item) {
  assert.equal(stageTapIntent(item.input), item.want, item.name);
});

["ch1", "ch2", "ch3"].forEach(function (chapter) {
  const html = fs.readFileSync(path.join(root, chapter, "index.html"), "utf8");
  const css = fs.readFileSync(path.join(root, chapter, "css", "player.css"), "utf8");
  assert.match(html, /id="stagePauseHint"/, chapter + " hint");
  assert.match(html, /id="stagePlay"/, chapter + " play overlay");
  assert.match(html, /id="stageReplay"/, chapter + " replay overlay");
  assert.match(css, /\.stage-pause-hint\[hidden\]/, chapter + " hint css");
  assert.match(css, /\.stage-pause-hint\s*\{[^}]*pointer-events:\s*none/, chapter + " hint does not steal taps");
  assert.match(css, /\.stage\s*\{[^}]*touch-action:\s*manipulation/, chapter + " touch-action");
  assert.doesNotMatch(
    fs.readFileSync(path.join(root, chapter, "js", "ui.js"), "utf8"),
    /stagePauseHint|bindStageTap/,
    chapter + " dock/fullscreen shell stays put"
  );
});

console.log("stage-tap-intent: " + cases.length + " cases ok");
