# YLCSS S4 ICT · Ch1–Ch3 純播放溫習動畫

三個自包含靜態播放器。外殼抄自 [Ch4 正式根目錄播放器](https://github.com/tsesir/ylcss-ch4-revision-player)（控制列、全螢幕包含、舞台中央播放／重播）。資料夾分法對齊 [物理科 monorepo](https://github.com/tsesir/ylcss-phys-revision-players)：每一章自己一套 HTML、CSS、JS、GSAP 同空的 `audio/`。

**正式分鏡同旁白尚未加入。** 真實場景同 TTS 聲軌要等動畫設計Bot Approve，再出 TTS。而家每章只有約 9–12 節占位卡片／印章，`audio/{yue,cmn,en}/` 係空的。沒有 mp3 時播放器靜音播放，字幕仍跟占位字幕稿，聲線按鈕顯示「無音軌」。

| 章 | 介面標題 | 路徑 | 占位節數 |
|----|----------|------|----------|
| Ch1 | ICT Ch1 溫習動畫（scaffold） | [`ch1/`](ch1/) | 10 |
| Ch2 | ICT Ch2 溫習動畫（scaffold） | [`ch2/`](ch2/) | 9 |
| Ch3 | ICT Ch3 溫習動畫（scaffold） | [`ch3/`](ch3/) | 12 |

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
- 聲線：粵語 `yue`、普通話 `cmn`、English `en`。缺 mp3 就靜音，動畫同字幕繼續。
- 速度 0.5x–2.0x，旁白停頓 0–3 秒（預設 0.5 秒）。
- 字幕開／關，以及小／中／大。預設大。
- 控制列預設收合，由頂欄向下展開，收合時向上縮回。
- 全螢幕優先用 Fullscreen API。失敗時加 `.is-fs-fallback` 填滿視窗。舞台以 `min(slotW/1280, slotH/720)` 包含縮放，可以大於 1。
- 未播放時，第一幀中央有「播放」。最後一節完結、暫停在結尾時，中央有「重播」。
- 舞台 1280×720。`vendor/gsap.min.js` 放喺每章入面，不必靠 CDN。

`js/player.js` 仍讀全域 `CH4_BEATS`／`CH4_CUES`，等之後可以沿用同一套播放程式。呢個名只係程式介面，內容不是第四章。

## localStorage（每章分開，不會寫入 Ch4 或物理科的鍵）

| 章 | 字幕大小 | 控制列 |
|----|----------|--------|
| Ch1 | `ch1-player-sub-size` | `ch1-ui-collapse-dock` |
| Ch2 | `ch2-player-sub-size` | `ch2-ui-collapse-dock` |
| Ch3 | `ch3-player-sub-size` | `ch3-ui-collapse-dock` |

值：字幕 `s`／`m`／`l`；控制列 `open` 或 `collapsed`。第一次沒有紀錄，控制列係收合。

## 本機預覽

```bash
cd ch1 && python3 -m http.server 8765
# http://127.0.0.1:8765/
```

`ch2/`、`ch3/` 同樣。

## 之後點樣換上正式內容

1. 動畫設計Bot Approve 之後，替換該章 `js/beats.js`、`js/scenes.js`、`js/cues.js`。
2. 把 `audio/{yue,cmn,en}/Bxx.mp3`（同可選 `.vtt`）放進該章，並在 `audio/manifest.json` 列出 `lang`、`beat`、`duration_s`。
3. 三條聲線齊全之後，聲線按鈕會由「無音軌」變「已就緒」。
