/* Runtime beat sheet for ICT Ch3. Mirrors the approved TTS beats.json.
   Global name stays CH4_BEATS so player.js can run unchanged. */
var CH4_BEATS = [
  {
    "id": "B01",
    "title": "開場｜第3章數據表示",
    "headline": [
      "第3章",
      "數據表示"
    ],
    "duration_s": 12.1,
    "visual": "Title card fades in:「第3章 數據表示 Data Representation」. Three icons slide in (base-n digits / signed integer bar / character glyphs A你😀), then a binary rain of 0/1 settles behind them.",
    "keyword": "數據表示 Data Representation",
    "cards": [
      "進制",
      "整數",
      "字符"
    ],
    "stamp": "第3章",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 開場",
    "script_refs": {
      "yue": "B01",
      "cmn": "B01",
      "en": "B01"
    },
    "notes": "Intro only; no quiz tease. Crossfade into B02. English/Latin pad cue on Data Representation.; VO wait/gap=0.35s (full-track); retime from TTS max=11.66s +0.4"
  },
  {
    "id": "B02",
    "title": "核心概念總覽",
    "headline": [
      "進制 · 整數 · 字符",
      "核心概念總覽"
    ],
    "duration_s": 14.2,
    "visual": "Three pillar cards pop in sequence: ① 進制轉換, ② 整數表示, ③ 字符編碼. A glowing binary strip (0101…) runs under all three. Cards pulse once then settle.",
    "keyword": "進制 · 整數 · 字符",
    "cards": [
      "進制轉換",
      "整數表示",
      "字符編碼"
    ],
    "stamp": "零同壹",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 核心概念總覽",
    "script_refs": {
      "yue": "B02",
      "cmn": "B02",
      "en": "B02"
    },
    "notes": "Map the three Notion sections before detailing each.; VO wait/gap=0.35s (full-track); retime from TTS max=13.75s +0.4"
  },
  {
    "id": "B03",
    "title": "位值 Place value",
    "headline": [
      "位值 Place value",
      "位值 Place value"
    ],
    "duration_s": 22.9,
    "visual": "Binary digits 1 0 1 appear. Face-value labels (面值) flash on each glyph, then place-value towers rise under each digit: ×2⁰, ×2¹, ×2² with 所代表的數值 summing to 5₁₀. A red X stamps「勿混淆 面值≠位值」.",
    "keyword": "位值 Place value",
    "cards": [
      "面值",
      "位值",
      "×2²",
      "×2¹",
      "×2⁰",
      "5₁₀"
    ],
    "stamp": "勿混淆 面值≠位值",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 位值 Place value",
    "script_refs": {
      "yue": "B03",
      "cmn": "B03",
      "en": "B03"
    },
    "notes": "ACTION: face value vs place value contrast. Use 位值／所代表的數值 — NEVER 權重. Use 混淆. English pad on Place value.; VO wait/gap=0.35s (full-track); retime from TTS max=22.46s +0.4"
  },
  {
    "id": "B04",
    "title": "二進制轉十六進制",
    "headline": [
      "每4位一組",
      "二進制轉十六進制"
    ],
    "duration_s": 22.6,
    "visual": "Long binary string slides right→left; every 4 bits bracket into a group from the right; left pad zeros animate into incomplete groups; each nibble morphs into one hex digit 0–9/A–F via a lookup table flash.",
    "keyword": "每4位一組",
    "cards": [
      "由右每 4 位",
      "左方補零",
      "0–9／A–F"
    ],
    "stamp": "每 4 位一組",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 二進制轉十六進制",
    "script_refs": {
      "yue": "B04",
      "cmn": "B04",
      "en": "B04"
    },
    "notes": "Golden rule from Notion: group of 4 from radix point/right; pad left; map to hex.; VO wait/gap=0.35s (full-track); retime from TTS max=22.25s +0.4"
  },
  {
    "id": "B05",
    "title": "儲存單位進率",
    "headline": [
      "1024 · 2ⁿ",
      "儲存單位進率"
    ],
    "duration_s": 48.5,
    "visual": "Unit ladder builds upward: bit → Byte (×8) → KB → MB → GB → TB. Each step stamps ×1024 and 2¹⁰ / 2²⁰ / 2³⁰ / 2⁴⁰. Bars scale exponentially as labels light.",
    "keyword": "1024 · 2ⁿ",
    "cards": [
      "bit",
      "Byte ×8",
      "KB · 2¹⁰",
      "MB · 2²⁰",
      "GB · 2³⁰",
      "TB · 2⁴⁰"
    ],
    "stamp": "1024",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 儲存單位進率",
    "script_refs": {
      "yue": "B05",
      "cmn": "B05",
      "en": "B05"
    },
    "notes": "TTS: 1024→一千零二十四; spell K B / M B / G B / T B with letter pauses. Speak 2^n as 二嘅/的 n 次方.; VO wait/gap=0.35s (full-track); retime from TTS max=48.14s +0.4"
  },
  {
    "id": "B06",
    "title": "整數表示三法總覽",
    "headline": [
      "三法總覽",
      "整數表示三法總覽"
    ],
    "duration_s": 22.4,
    "visual": "Three-column table header draws in: 無符號 | 符號及值 | 二進制補碼（two's complement）. Columns for MSB / 零問題 / 8-bit範圍 appear empty then await fill. M S B badge pulses.",
    "keyword": "三法總覽",
    "cards": [
      "無符號",
      "符號及值",
      "二進制補碼"
    ],
    "stamp": "MSB · 零 · 範圍",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 整數表示三法總覽",
    "script_refs": {
      "yue": "B06",
      "cmn": "B06",
      "en": "B06"
    },
    "notes": "Setup contrast frame. Exact term 二進制補碼（two's complement）. Spell M S B.; VO wait/gap=0.35s (full-track); retime from TTS max=22.03s +0.4"
  },
  {
    "id": "B07",
    "title": "無符號整數",
    "headline": [
      "無符號 Unsigned",
      "無符號整數"
    ],
    "duration_s": 17.1,
    "visual": "Unsigned column fills: all 8 bits glow as magnitude. Range bar expands 0→255. Formula chip lights: 0 … 2ⁿ−1. No sign bit icon — crossed out.",
    "keyword": "無符號 Unsigned",
    "cards": [
      "全部位元表示數值",
      "0 … 255",
      "0 … 2ⁿ−1"
    ],
    "stamp": "無符號",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 無符號整數",
    "script_refs": {
      "yue": "B07",
      "cmn": "B07",
      "en": "B07"
    },
    "notes": "ACTION: bits→magnitude only; range fill. English pad on Unsigned.; VO wait/gap=0.35s (full-track); retime from TTS max=16.66s +0.4"
  },
  {
    "id": "B08",
    "title": "符號及值 Sign-and-Magnitude",
    "headline": [
      "雙重零 Dual zero",
      "符號及值 Sign-and-Magnitude"
    ],
    "duration_s": 19.1,
    "visual": "MSB flips 0(+) / 1(−) while lower bits show magnitude. Two zero patterns (+0 / −0) appear side by side with warning badge「雙重零」. Range bar: −127…+127. Stamp:「勿與二進制補碼混淆」.",
    "keyword": "雙重零 Dual zero",
    "cards": [
      "MSB 0 正／1 負",
      "+0 與 −0",
      "−127 … +127"
    ],
    "stamp": "勿與二進制補碼混淆",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 符號及值 Sign-and-Magnitude",
    "script_refs": {
      "yue": "B08",
      "cmn": "B08",
      "en": "B08"
    },
    "notes": "Contrast setup for B09. Use 混淆. Exact later term two's complement. English pad on Sign-and-Magnitude.; VO wait/gap=0.35s (full-track); retime from TTS max=18.70s +0.4"
  },
  {
    "id": "B09",
    "title": "二進制補碼對比",
    "headline": [
      "二進制補碼 two's complement",
      "二進制補碼對比"
    ],
    "duration_s": 19.4,
    "visual": "Side-by-side compare: Sign-and-Magnitude dual-zero fades; two's complement shows single 00000000=0. Range bar extends left to −128 (extra tick vs −127). Labels: 唯一零 · −128…+127 · −2ⁿ⁻¹ … +(2ⁿ⁻¹−1).",
    "keyword": "二進制補碼 two's complement",
    "cards": [
      "唯一零",
      "−128 … +127",
      "−2ⁿ⁻¹ … +(2ⁿ⁻¹−1)"
    ],
    "stamp": "二進制補碼",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 二進制補碼對比",
    "script_refs": {
      "yue": "B09",
      "cmn": "B09",
      "en": "B09"
    },
    "notes": "EXACT term 二進制補碼（two's complement）— NEVER 二補碼 / 二的補數. Visual ACTION: dual→unique zero; range extends to −128.; VO wait/gap=0.35s (full-track); retime from TTS max=19.01s +0.4"
  },
  {
    "id": "B10",
    "title": "二進制補碼三步曲",
    "headline": [
      "三步曲 −29",
      "二進制補碼三步曲"
    ],
    "duration_s": 24.8,
    "visual": "Worked example −29 / 8-bit: (1) 29→0001 1101 writes in; (2) bits flip to ones' complement 1110 0010; (3) +1 animates carry → 1110 0011. Three step badges light in order.",
    "keyword": "三步曲 −29",
    "cards": [
      "29 → 00011101",
      "取反 11100010",
      "+1 → 11100011"
    ],
    "stamp": "−29",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 二進制補碼三步曲",
    "script_refs": {
      "yue": "B10",
      "cmn": "B10",
      "en": "B10"
    },
    "notes": "Match Notion worked example. ones' complement named only as intermediate step. Dense; may need >8s after TTS retime.; VO wait/gap=0.35s (full-track); retime from TTS max=24.38s +0.4"
  },
  {
    "id": "B11",
    "title": "溢出誤差判斷",
    "headline": [
      "溢出 Overflow",
      "溢出誤差判斷"
    ],
    "duration_s": 21.3,
    "visual": "Two same-sign adders: (+)(+)=(-) flashes red OVERFLOW; (-)(-)=(+) flashes red OVERFLOW. Mixed-sign adder shows green「絕不會溢出」. Banner:「同號相加得反號 → 溢出誤差 Overflow Error」.",
    "keyword": "溢出 Overflow",
    "cards": [
      "正＋正＝負",
      "負＋負＝正",
      "正＋負不會溢出"
    ],
    "stamp": "溢出誤差",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 溢出誤差判斷",
    "script_refs": {
      "yue": "B11",
      "cmn": "B11",
      "en": "B11"
    },
    "notes": "ACTION: same-sign→opposite = overflow; mixed never. English pad on Overflow Error.; VO wait/gap=0.35s (full-track); retime from TTS max=20.88s +0.4"
  },
  {
    "id": "B12",
    "title": "字符編碼｜A S C I I",
    "headline": [
      "字符編碼",
      "A S C I I"
    ],
    "duration_s": 18.0,
    "visual": "7-bit pattern expands into 1-byte with leading 0 pad. Grid of 128 slots fills (letters/digits/punct/controls). Caption:「西方編碼基礎」.",
    "keyword": "A S C I I",
    "cards": [
      "7 位元",
      "128 字符",
      "補 0 成 1 字節"
    ],
    "stamp": "ASCII",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 字符編碼",
    "script_refs": {
      "yue": "B12",
      "cmn": "B12",
      "en": "B12"
    },
    "notes": "Spell A S C I I with letter pauses for TTS. 1 byte / 7-bit practical / 128 chars.; VO wait/gap=0.35s (full-track); retime from TTS max=17.57s +0.4"
  },
  {
    "id": "B13",
    "title": "大五碼與國標碼",
    "headline": [
      "Big5 · G B",
      "大五碼與國標碼"
    ],
    "duration_s": 46.0,
    "visual": "Two regional cards: Big5 (繁) vs GB (簡). Big5 shows 1–2 bytes + mojibake warning across border. GB card splits into GB2312 / GBK / GB18030 expansion. Stamp:「勿籠統斷言 GB 皆無繁體；繁體常用仍為 Big5」.",
    "keyword": "Big5 · G B",
    "cards": [
      "Big5 繁",
      "GB2312",
      "GBK",
      "GB18030"
    ],
    "stamp": "繁體常用仍為 Big5",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 大五碼與國標碼",
    "script_refs": {
      "yue": "B13",
      "cmn": "B13",
      "en": "B13"
    },
    "notes": "Per Notion nuance on GB variants. Spell G B / Big 五. Avoid overclaim.; VO wait/gap=0.35s (full-track); retime from TTS max=45.65s +0.4"
  },
  {
    "id": "B14",
    "title": "統一碼 Unicode／U T F 八",
    "headline": [
      "Unicode · U T F 八",
      "統一碼 Unicode／U T F 八"
    ],
    "duration_s": 30.4,
    "visual": "UTF-8 variable-length bars: ASCII=1 byte, Chinese≈3 bytes, emoji up to 4. Globe of scripts lights up. Compatibility arrow: ASCII ⊂ UTF-8. HTML5 badge glows.",
    "keyword": "Unicode · U T F 八",
    "cards": [
      "ASCII 1 字節",
      "中文約 3 字節",
      "表情最多 4 字節"
    ],
    "stamp": "UTF-8",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 統一碼 Unicode／U T F 八",
    "script_refs": {
      "yue": "B14",
      "cmn": "B14",
      "en": "B14"
    },
    "notes": "Spell U T F 八 / H T M L 五. Backward compatible with ASCII per Notion.; VO wait/gap=0.35s (full-track); retime from TTS max=29.98s +0.4"
  },
  {
    "id": "B15",
    "title": "短重溫 Recap",
    "headline": [
      "重溫 Recap",
      "短重溫 Recap"
    ],
    "duration_s": 27.2,
    "visual": "Four recap panels fly in: (1) 面值≠位值; (2) 符號及值雙重零 vs 二進制補碼唯一零/−128; (3) 同號→反號=溢出; (4) ASCII／Big5／GB／Unicode. Final stamp:「純複習 · 第3章」. Fade out.",
    "keyword": "重溫 Recap",
    "cards": [
      "面值 ≠ 位值",
      "雙重零 vs 唯一零",
      "同號得反號＝溢出",
      "ASCII／Big5／GB／Unicode"
    ],
    "stamp": "純複習",
    "eyebrow": "YLCSS · S4 ICT · 第3章 · 短重溫 Recap",
    "script_refs": {
      "yue": "B15",
      "cmn": "B15",
      "en": "B15"
    },
    "notes": "No quiz / no 互動自測. End of pure playback.; VO wait/gap=0.35s (full-track); retime from TTS max=26.76s +0.4"
  }
];
