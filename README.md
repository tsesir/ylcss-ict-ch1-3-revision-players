# YLCSS S4 ICT · Ch1–Ch3 純播放溫習動畫

三個自包含靜態播放器。外殼對齊 [Ch4 正式根目錄播放器](https://github.com/tsesir/ylcss-ch4-revision-player) 的播放合約。資料夾分法對齊 [物理科 monorepo](https://github.com/tsesir/ylcss-phys-revision-players)：每一章自己一套 HTML、CSS、JS、GSAP，以及 `audio/{yue,cmn,en}/`。

**TTS 已接上。** 每章 15 節。粵語、普通話、English 都有逐節 mp3 與字幕。粵語／普通話音軌裡，每個英文片段的前後已加停頓（EN pad），燒錄在 mp3 內。Ch1、Ch2 是 **0.1 秒**；Ch3 已改為 **0.05 秒**。Ch3 粵語理科「正」以 zing3 合成，字幕仍寫「正」。

| 章 | 介面標題 | 路徑 | 節數 | `beats.js` 總長 |
|----|----------|------|------|-----------------|
| Ch1 | 第1章 資訊處理概論 | [`ch1/`](ch1/) | 15 | 205.9 秒 |
| Ch2 | 第2章 數據組織及數據控制 | [`ch2/`](ch2/) | 15 | 272.0 秒 |
| Ch3 | 第3章 數據表示 | [`ch3/`](ch3/) | 15 | 363.1 秒 |

總長是各節 `duration_s` 相加，未計播放器的旁白停頓（預設 0.5 秒）。

## Pages

```
https://tsesir.github.io/ylcss-ict-ch1-3-revision-players/
https://tsesir.github.io/ylcss-ict-ch1-3-revision-players/ch1/
https://tsesir.github.io/ylcss-ict-ch1-3-revision-players/ch2/
https://tsesir.github.io/ylcss-ict-ch1-3-revision-players/ch3/
```

Notion 用 `/embed` 貼章節網址。根目錄同每章都有 `_headers`（`frame-ancestors *`）同 `.htaccess`。GitHub Pages 本身不會套用 `_headers`；預設已允許嵌入。

## 播放合約（對齊 Ch4 正式根目錄）

- 純播放，沒有測驗。
- 聲線：粵語 `yue`、普通話 `cmn`、English `en`。三條聲線的 `B01.mp3`–`B15.mp3` 都在。缺 mp3 時仍會靜音播放。
- 速度 0.5x–2.0x，旁白停頓 0–3 秒（預設 0.5 秒）。
- 字幕開／關，以及小／中／大。預設大。字幕由各節 `.vtt` 生成，寫入 `js/cues.js`。
- 控制列預設收合，由頂欄向下展開，收合時向上縮回。
- 全螢幕優先用 Fullscreen API。失敗時加 `.is-fs-fallback` 填滿視窗。舞台以 `min(slotW/1280, slotH/720)` 包含縮放，可以大於 1。
- 未播放時，第一幀中央有「播放」。最後一節完結、暫停在結尾時，中央有「重播」。
- 舞台 1280×720。`vendor/gsap.min.js` 放喺每章入面，不必靠 CDN。

`js/player.js` 仍讀全域 `CH4_BEATS`／`CH4_CUES`。呢個名只係程式介面，內容不是第四章。每節有自己的舞台（`js/scenes.js`），跟該節的畫面說明、關鍵詞同卡片。

## localStorage（每章分開，不會寫入 Ch4 或物理科的鍵）

| 章 | 字幕大小 | 控制列 |
|----|----------|--------|
| Ch1 | `ch1-player-sub-size` | `ch1-ui-collapse-dock` |
| Ch2 | `ch2-player-sub-size` | `ch2-ui-collapse-dock` |
| Ch3 | `ch3-player-sub-size` | `ch3-ui-collapse-dock` |

值：字幕 `s`／`m`／`l`；控制列 `open` 或 `collapsed`。第一次沒有紀錄，控制列係收合。

## 聲軌

- `audio/{yue,cmn,en}/B01.mp3` … `B15.mp3`，同名 `.vtt` 與 `.srt`
- `audio/manifest.json` 列出 `lang`、`beat`、`duration_s`
- 粵語／普通話：Ch1、Ch2 的英文片段前後 EN pad **0.1 秒**；Ch3 為 **0.05 秒**。Ch3 粵語理科「正」以 zing3 合成，字幕仍寫「正」。

聲軌與分鏡提交：[`c773315`](https://github.com/tsesir/ylcss-ict-ch1-3-revision-players/commit/c773315018df37a8d0781360f4b52a8af8da1a84)。Ch3 其後以 0.05 秒 EN pad 重接，15 節合計 363.1 秒。

## 本機預覽

```bash
cd ch1 && python3 -m http.server 8765
# http://127.0.0.1:8765/
```

`ch2/`、`ch3/` 同樣。
