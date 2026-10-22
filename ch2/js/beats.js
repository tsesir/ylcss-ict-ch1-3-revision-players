/* Runtime beat sheet for ICT Ch2. Mirrors the approved TTS beats.json.
   Global name stays CH4_BEATS so player.js can run unchanged. */
var CH4_BEATS = [
  {
    "id": "B01",
    "title": "開場｜第2章數據組織及數據控制",
    "headline": [
      "第2章",
      "數據組織及數據控制"
    ],
    "duration_s": 10.2,
    "visual": "Title card fades in:「第2章 數據組織及數據控制」. Two icon clusters slide in: shield+form (data control / error prevention) and stacked layers (data organisation). Subtitle badges: GIGO · Validation/Verification · Hierarchy & Access.",
    "keyword": "數據控制 Data Control",
    "cards": [
      "數據控制",
      "數據組織",
      "GIGO",
      "檢驗／驗證",
      "分級與存取"
    ],
    "stamp": "第2章",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 開場",
    "script_refs": {
      "yue": "B01",
      "cmn": "B01",
      "en": "B01"
    },
    "notes": "Intro only; no quiz tease. Crossfade into B02.; VO wait/gap=0.35s (full-track); retime from TTS max=9.79s +0.4"
  },
  {
    "id": "B02",
    "title": "核心概念總覽",
    "headline": [
      "核心概念 Key ideas",
      "核心概念總覽"
    ],
    "duration_s": 13.8,
    "visual": "Four numbered rails pop in sequence: ① G I G O 防錯, ② 有效性檢驗 vs 驗證, ③ 常見有效性檢驗, ④ 數據分級與存取. Each rail pulses once then settles into a roadmap strip.",
    "keyword": "核心概念 Key ideas",
    "cards": [
      "GIGO 防錯",
      "有效性檢驗 vs 驗證",
      "常見有效性檢驗",
      "數據分級與存取"
    ],
    "stamp": "四條線",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 核心概念總覽",
    "script_refs": {
      "yue": "B02",
      "cmn": "B02",
      "en": "B02"
    },
    "notes": "Set four-thread structure before detailing each. Spell G I G O with TTS pause later.; VO wait/gap=0.35s (full-track); retime from TTS max=13.44s +0.4"
  },
  {
    "id": "B03",
    "title": "GIGO｜無用輸入無用輸出",
    "headline": [
      "GIGO",
      "無用輸入無用輸出"
    ],
    "duration_s": 13.8,
    "visual": "Warning banner:「杜絕 G I G O」. Left chute labelled Garbage-In dumps messy tokens into a processor box; right chute spits Garbage-Out. Equation stamp: 無用輸入 → 無用輸出.",
    "keyword": "G I G O",
    "cards": [
      "Garbage-In",
      "處理器",
      "Garbage-Out"
    ],
    "stamp": "無用輸入 → 無用輸出",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · GIGO",
    "script_refs": {
      "yue": "B03",
      "cmn": "B03",
      "en": "B03"
    },
    "notes": "Exam warning beat. Acronym letter-spaced in yue/cmn VO.; VO wait/gap=0.35s (full-track); retime from TTS max=13.42s +0.4"
  },
  {
    "id": "B04",
    "title": "三種人為失誤",
    "headline": [
      "轉錄 · 調換",
      "三種人為失誤"
    ],
    "duration_s": 24.5,
    "visual": "Three error cards flip in: (1) 數據來源錯誤 — form with wrong phone circled; (2) 轉錄錯誤 —『1』morphs to『l』,『0』to『O』; (3) 位置調換錯誤 —『16』digits swap to『61』. Each card stamps its English label briefly.",
    "keyword": "轉錄 · 調換",
    "cards": [
      "數據來源錯誤",
      "轉錄錯誤",
      "位置調換錯誤"
    ],
    "stamp": "人為失誤",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 三種人為失誤",
    "script_refs": {
      "yue": "B04",
      "cmn": "B04",
      "en": "B04"
    },
    "notes": "Source / Transcription / Transposition. Action per card: wrong fill → mistype morph → digit swap.; VO wait/gap=0.35s (full-track); retime from TTS max=24.07s +0.4"
  },
  {
    "id": "B05",
    "title": "有效性檢驗 vs 驗證｜對比",
    "headline": [
      "有效性檢驗 vs 驗證",
      "對比"
    ],
    "duration_s": 18.0,
    "visual": "Split stage. Left panel Validation lights『輸入前／合理』; right panel Verification lights『輸入後／與原文一致』. Center warning chip:「不要混淆」. Twin arrows both point to 防錯 but stay on separate timelines.",
    "keyword": "Validation · Verification",
    "cards": [
      "輸入前 · 合理",
      "輸入後 · 與原文一致"
    ],
    "stamp": "不要混淆",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 有效性檢驗 vs 驗證",
    "script_refs": {
      "yue": "B05",
      "cmn": "B05",
      "en": "B05"
    },
    "notes": "Hard rule: always 混淆. Contrast timing + purpose only.; VO wait/gap=0.35s (full-track); retime from TTS max=17.59s +0.4"
  },
  {
    "id": "B06",
    "title": "有效性檢驗 Validation",
    "headline": [
      "合理 Reasonable",
      "有效性檢驗 Validation"
    ],
    "duration_s": 17.1,
    "visual": "Form field receives input; gate labelled Validation checks rules before a『系統接收』door opens. Green tick for reasonable data. Then a fake-but-legal phone number passes — red callout:「合法虛假仍可通過」.",
    "keyword": "合理 Reasonable",
    "cards": [
      "接收前把關",
      "合理 · 合規則",
      "合法虛假仍可通過"
    ],
    "stamp": "Validation",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 有效性檢驗 Validation",
    "script_refs": {
      "yue": "B06",
      "cmn": "B06",
      "en": "B06"
    },
    "notes": "Timing before accept/process; purpose = reasonable/rules; limit = false-but-legal still passes.; VO wait/gap=0.35s (full-track); retime from TTS max=16.68s +0.4"
  },
  {
    "id": "B07",
    "title": "驗證 Verification",
    "headline": [
      "雙重輸入 Double entry",
      "驗證 Verification"
    ],
    "duration_s": 20.7,
    "visual": "After entry, two verification methods animate: (1) password field typed twice → compare match; (2) two operator desks key same form → computer diff highlights mismatches. Banner:『與原始來源文件完全一致』.",
    "keyword": "雙重輸入 Double entry",
    "cards": [
      "密碼輸入兩次",
      "兩名操作員",
      "與原文完全一致"
    ],
    "stamp": "Verification",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 驗證 Verification",
    "script_refs": {
      "yue": "B07",
      "cmn": "B07",
      "en": "B07"
    },
    "notes": "Input twice + double data entry. Action: dual type / dual operators → compare.; VO wait/gap=0.35s (full-track); retime from TTS max=20.26s +0.4"
  },
  {
    "id": "B08",
    "title": "常見有效性檢驗｜總覽",
    "headline": [
      "常見有效性檢驗",
      "總覽"
    ],
    "duration_s": 13.0,
    "visual": "Checklist header『有效性檢驗例子』. Seven empty slots wait. Parity chip flies in then gets stamped『不是有效性檢驗』and『不是檢驗數位』and slides to a side bin labelled 傳輸／儲存錯誤偵測.",
    "keyword": "奇偶 ≠ Validation",
    "cards": [
      "完整性",
      "長度",
      "範圍",
      "固定值",
      "格式",
      "類型",
      "檢驗數位"
    ],
    "stamp": "奇偶 ≠ 有效性檢驗",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 常見有效性檢驗",
    "script_refs": {
      "yue": "B08",
      "cmn": "B08",
      "en": "B08"
    },
    "notes": "QC/EDB: Parity checking is NOT validation and NOT check digit. Clear reject animation.; VO wait/gap=0.35s (full-track); retime from TTS max=12.60s +0.4"
  },
  {
    "id": "B09",
    "title": "完整性 · 長度 · 範圍",
    "headline": [
      "Presence · Length · Range",
      "完整性 · 長度 · 範圍"
    ],
    "duration_s": 17.4,
    "visual": "Three check demos in a row: Presence — empty required field flashes red until filled; Field Length — HK phone counter locks at 8 digits; Range — score slider snaps inside 0–100, month spinner 1–12. Labels light as each demo runs.",
    "keyword": "Presence · Length · Range",
    "cards": [
      "必填不可留空",
      "電話剛好 8 位",
      "分數 0–100"
    ],
    "stamp": "Presence · Length · Range",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 完整性 · 長度 · 範圍",
    "script_refs": {
      "yue": "B09",
      "cmn": "B09",
      "en": "B09"
    },
    "notes": "Three validation checks with concrete exam-style examples from Notion.; VO wait/gap=0.35s (full-track); retime from TTS max=16.97s +0.4"
  },
  {
    "id": "B10",
    "title": "固定值 · 格式 · 類型",
    "headline": [
      "Fixed · Format · Type",
      "固定值 · 格式 · 類型"
    ],
    "duration_s": 17.9,
    "visual": "Three more demos: Fixed Value — gender dropdown only 男/女; Format — email gains『@』with chars both sides, date mask YYYY-MM-DD; Type — age rejects letters, accepts integer. Reject flashes on bad input; accept on good.",
    "keyword": "Fixed · Format · Type",
    "cards": [
      "性別只限男／女",
      "電郵要有 @",
      "年齡只收整數"
    ],
    "stamp": "Fixed · Format · Type",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 固定值 · 格式 · 類型",
    "script_refs": {
      "yue": "B10",
      "cmn": "B10",
      "en": "B10"
    },
    "notes": "Continue validation-check set. Speak『at』for @ in VO (already in scripts).; VO wait/gap=0.35s (full-track); retime from TTS max=17.54s +0.4"
  },
  {
    "id": "B11",
    "title": "檢驗數位 Check Digit",
    "headline": [
      "檢驗數位 · 權重",
      "檢驗數位 Check Digit"
    ],
    "duration_s": 17.2,
    "visual": "ID / ISBN / barcode strip: digits enter a weight×digit multiply-sum machine labelled 權重 Weight; check character appends at the end and glows. Side stamp:『不含奇偶檢驗位』. Parity bit icon stays greyed out.",
    "keyword": "檢驗數位 · 權重",
    "cards": [
      "身份證",
      "ISBN",
      "條碼"
    ],
    "stamp": "不含奇偶檢驗位",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 檢驗數位 Check Digit",
    "script_refs": {
      "yue": "B11",
      "cmn": "B11",
      "en": "B11"
    },
    "notes": "權重 only here (check-digit context per Notion). I S B N letter-spaced.; VO wait/gap=0.35s (full-track); retime from TTS max=16.85s +0.4"
  },
  {
    "id": "B12",
    "title": "數據分級 Hierarchy",
    "headline": [
      "數據分級 Hierarchy",
      "數據分級 Hierarchy"
    ],
    "duration_s": 24.2,
    "visual": "Pyramid builds bottom→top matching Notion mermaid: 數據 (bits/bytes) → 欄 Field → 記錄 Record → 檔案／數據表 File/Table → 數據庫 Database. Each layer expands with one-line definition. EDB chip lists terms: 數據、欄、記錄、檔案、數據庫.",
    "keyword": "數據分級 Hierarchy",
    "cards": [
      "數據",
      "欄",
      "記錄",
      "檔案／數據表",
      "數據庫"
    ],
    "stamp": "EDB 五層",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 數據分級 Hierarchy",
    "script_refs": {
      "yue": "B12",
      "cmn": "B12",
      "en": "B12"
    },
    "notes": "EDB terms as in Notion; DBMS 檔案≈表. Visual nesting follows mermaid (not the flat list order alone).; VO wait/gap=0.35s (full-track); retime from TTS max=23.83s +0.4"
  },
  {
    "id": "B13",
    "title": "順序存取 Sequential Access",
    "headline": [
      "順序存取 Sequential",
      "順序存取 Sequential Access"
    ],
    "duration_s": 17.7,
    "visual": "Magnetic-tape reel spins; read head must travel start→end to reach a mid record (long unpredictable seek bar). Use badges: 批次處理 · 離線備份. Label: 順序存取 Sequential Access.",
    "keyword": "順序存取 Sequential",
    "cards": [
      "磁帶",
      "由頭至尾",
      "批次處理",
      "離線備份"
    ],
    "stamp": "順序存取",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 順序存取 Sequential Access",
    "script_refs": {
      "yue": "B13",
      "cmn": "B13",
      "en": "B13"
    },
    "notes": "EDB file access #1. Tape; slow seek; batch/backup.; VO wait/gap=0.35s (full-track); retime from TTS max=17.30s +0.4"
  },
  {
    "id": "B14",
    "title": "直接存取 Direct Access",
    "headline": [
      "直接存取 Direct",
      "直接存取 Direct Access"
    ],
    "duration_s": 24.1,
    "visual": "HDD/SSD/optical icons; address/key arrow jumps straight to a record (short predictable seek). Badge: 即時查詢. Side note chip:『隨機存取→課程層面仍歸直接存取』; device-level random/sequential icons dim with caption『勿混淆』.",
    "keyword": "直接存取 Direct",
    "cards": [
      "硬碟／光碟／固態碟",
      "位址直達",
      "即時查詢",
      "隨機存取歸入直接存取"
    ],
    "stamp": "勿混淆",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 直接存取 Direct Access",
    "script_refs": {
      "yue": "B14",
      "cmn": "B14",
      "en": "B14"
    },
    "notes": "EDB file access #2 only. Do not confuse with device random/sequential traits.; VO wait/gap=0.35s (full-track); retime from TTS max=23.74s +0.4"
  },
  {
    "id": "B15",
    "title": "短重溫 Recap",
    "headline": [
      "重溫 Recap",
      "短重溫 Recap"
    ],
    "duration_s": 22.4,
    "visual": "Four recap panels fly in: (1) G I G O + 3 error types; (2) Validation≠Verification stamp『不要混淆』; (3) 7 checks + parity rejected; (4) 5-level hierarchy + Sequential/Direct. Final stamp:「純複習 · 無互動自測」. Fade out.",
    "keyword": "重溫 Recap",
    "cards": [
      "GIGO 與三種失誤",
      "檢驗 ≠ 驗證",
      "七項檢驗 · 奇偶除外",
      "五層分級 · 兩種存取"
    ],
    "stamp": "純複習",
    "eyebrow": "YLCSS · S4 ICT · 第2章 · 短重溫 Recap",
    "script_refs": {
      "yue": "B15",
      "cmn": "B15",
      "en": "B15"
    },
    "notes": "No quiz / no 互動自測. End of pure playback.; VO wait/gap=0.35s (full-track); retime from TTS max=22.01s +0.4"
  }
];
