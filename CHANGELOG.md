# Changelog

## 0.1.0 — 2026-10-22

- 新增 `ch1/`、`ch2/`、`ch3/` 三個自包含純播放器，外殼對齊 Ch4 正式根目錄：收合頂欄、全螢幕 contain（`min(slotW/1280, slotH/720)` 同 `.is-fs-fallback`）、0.5x–2.0x、旁白停頓、粵／普／英、字幕小／中／大、舞台中央播放與重播。
- 每章 9–12 節占位卡片／印章（Ch1 十節、Ch2 九節、Ch3 十二節）。不是第四章多媒體內容。
- `audio/{yue,cmn,en}/` 留空，`audio/manifest.json` 為 `[]`。沒有 mp3 時靜音播放。
- `localStorage` 用 `ch1-player-sub-size`、`ch1-ui-collapse-dock`，以及 Ch2、Ch3 對應鍵。不會寫入 Ch4 或物理科的鍵。
- 每章自帶 `vendor/gsap.min.js`。根目錄同每章都有 `_headers`（`frame-ancestors *`）。
- 正式分鏡同 TTS 聲軌仍待動畫設計Bot Approve。
