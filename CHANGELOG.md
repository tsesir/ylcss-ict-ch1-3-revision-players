# Changelog

## 0.3.0 — 2026-10-22

- 只重接第3章 TTS。15 節，`ch3/js/beats.js` 的 `duration_s` 合計 **363.1 秒**（先前 366.0 秒）。
- 粵語／普通話英文片段前後 EN pad 改為 **0.05 秒**（先前 0.1 秒）。English 聲線沒有 EN pad。
- 粵語理科「正」以 zing3 合成；字幕（VTT／SRT）仍寫「正」。
- 以新 pack 的 `B01.mp3`–`B15.mp3` 及同名 `.vtt`／`.srt` 取代 `ch3/audio/{yue,cmn,en}/`，並依各節 VTT 重寫 `ch3/js/cues.js`（含 `CH4_AUDIO_DURATIONS`）。
- 去掉過期的整軌 `ch3/audio/{yue,cmn,en}.vtt`／`.srt`。播放器讀的是逐節字幕。
- `CH4_BEATS`／`CH4_CUES`／`CH4_AUDIO_DURATIONS`、`scenes.js`、播放器外殼，以及 `ch3-player-sub-size`／`ch3-ui-collapse-dock` 維持不變。Ch1、Ch2 未改。

## 0.2.0 — 2026-10-22

- 接上已核准的 Ch1–Ch3 TTS。每章 15 節：Ch1 205.9 秒、Ch2 272.0 秒、Ch3 366.0 秒（`js/beats.js` 的 `duration_s` 合計）。
- 以 pack 的 `audio/` 取代占位資料夾。粵語、普通話、English 各有 `B01.mp3`–`B15.mp3`。
- 由 `beats.json` 重寫 `js/beats.js`。全域名稱仍是 `CH4_BEATS`，`player.js` 不用改。
- 由各節 `.vtt` 重寫 `js/cues.js`（粵／普／英），並寫入 `CH4_AUDIO_DURATIONS`。
- `js/scenes.js` 改為逐節獨立舞台，清走 scaffold 占位卡。
- 章名改為第1章 資訊處理概論、第2章 數據組織及數據控制、第3章 數據表示。
- 粵語／普通話 mp3 已包含英文片段前後各 0.1 秒的 EN pad，沒有再轉碼。
- 聲軌與分鏡提交：`c773315018df37a8d0781360f4b52a8af8da1a84`。
- 播放／重播、控制列、全螢幕包含、速度、旁白停頓、字幕大小，以及 `ch1-`／`ch2-`／`ch3-` localStorage 鍵維持不變。

## 0.1.0 — 2026-10-22

- 新增 `ch1/`、`ch2/`、`ch3/` 三個自包含純播放器，外殼對齊 Ch4 正式根目錄：收合頂欄、全螢幕 contain（`min(slotW/1280, slotH/720)` 同 `.is-fs-fallback`）、0.5x–2.0x、旁白停頓、粵／普／英、字幕小／中／大、舞台中央播放與重播。
- 每章 9–12 節占位卡片／印章（Ch1 十節、Ch2 九節、Ch3 十二節）。不是第四章多媒體內容。
- `audio/{yue,cmn,en}/` 留空，`audio/manifest.json` 為 `[]`。沒有 mp3 時靜音播放。
- `localStorage` 用 `ch1-player-sub-size`、`ch1-ui-collapse-dock`，以及 Ch2、Ch3 對應鍵。不會寫入 Ch4 或物理科的鍵。
- 每章自帶 `vendor/gsap.min.js`。根目錄同每章都有 `_headers`（`frame-ancestors *`）。
- 正式分鏡同 TTS 聲軌仍待動畫設計Bot Approve。
