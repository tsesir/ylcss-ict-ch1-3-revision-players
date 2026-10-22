/* Generated from audio/{yue,cmn,en}/Bxx.vtt (srt fallback) and audio/manifest.json.
   Yue/cmn mp3 already include a 0.05s pad before and after each English span.
   Yue science/math 正 is spoken zing3; cue text still shows 正. */
var CH4_CUES = {
  "yue": {
    "B01": [
      {
        "start": 0.0,
        "end": 1.624,
        "text": "今日複習第三章。"
      },
      {
        "start": 1.624,
        "end": 6.697,
        "text": "數據表示，Data Representation。"
      },
      {
        "start": 6.697,
        "end": 11.568,
        "text": "數字、整數、字符，喺電腦裏面點樣用二進制嚟表示。"
      }
    ],
    "B02": [
      {
        "start": 0.0,
        "end": 2.0,
        "text": "本章三條主線。"
      },
      {
        "start": 2.0,
        "end": 3.999,
        "text": "一，進制轉換。"
      },
      {
        "start": 3.999,
        "end": 5.999,
        "text": "二，整數表示。"
      },
      {
        "start": 5.999,
        "end": 7.998,
        "text": "三，字符編碼。"
      },
      {
        "start": 7.998,
        "end": 11.712,
        "text": "記住：全部最終都係零同壹。"
      }
    ],
    "B03": [
      {
        "start": 0.0,
        "end": 3.085,
        "text": "每一位數字，有兩樣嘢要分開睇。"
      },
      {
        "start": 3.085,
        "end": 5.348,
        "text": "面值，係嗰個字符本身。"
      },
      {
        "start": 5.348,
        "end": 11.313,
        "text": "位值，Place value，係佢喺呢個位置所代表嘅數值。"
      },
      {
        "start": 11.313,
        "end": 13.575,
        "text": "唔好將面值同位值混淆。"
      },
      {
        "start": 13.575,
        "end": 22.008,
        "text": "例如二進制嘅一零一，最右係一乘二嘅零次方；中間零乘二嘅一次方；最左一乘二嘅二次方。"
      }
    ],
    "B04": [
      {
        "start": 0.0,
        "end": 4.084,
        "text": "二進制轉十六進制，跟黃金法則。"
      },
      {
        "start": 4.084,
        "end": 10.62,
        "text": "由小數點，或者最右側起，每四個二進制位元為一組。"
      },
      {
        "start": 10.62,
        "end": 13.615,
        "text": "不足四位，喺左方補零。"
      },
      {
        "start": 13.615,
        "end": 22.056,
        "text": "每組對照表格，變成一位十六進制字符，零到九，或者 A 到 F。"
      }
    ],
    "B05": [
      {
        "start": 0.0,
        "end": 3.201,
        "text": "記住儲存單位進率。"
      },
      {
        "start": 3.201,
        "end": 8.893,
        "text": "一 Byte，等於八 bits。"
      },
      {
        "start": 8.893,
        "end": 18.852,
        "text": "一 K B，等於一千零二十四 Bytes，即二嘅十次方。"
      },
      {
        "start": 18.852,
        "end": 28.456,
        "text": "一 M B，等於一千零二十四 K B，即二嘅二十次方。"
      },
      {
        "start": 28.456,
        "end": 38.06,
        "text": "一 G B，等於一千零二十四 M B，即二嘅三十次方。"
      },
      {
        "start": 38.06,
        "end": 47.664,
        "text": "一 T B，等於一千零二十四 G B，即二嘅四十次方。"
      }
    ],
    "B06": [
      {
        "start": 0.0,
        "end": 2.427,
        "text": "整數有三種常見表示法。"
      },
      {
        "start": 2.427,
        "end": 5.737,
        "text": "無符號整數，Unsigned。"
      },
      {
        "start": 5.737,
        "end": 11.033,
        "text": "符號及值，Sign-and-Magnitude。"
      },
      {
        "start": 11.033,
        "end": 16.108,
        "text": "二進制補碼，two's complement。"
      },
      {
        "start": 16.108,
        "end": 21.624,
        "text": "重點睇：最高有效位 M S B，零問題，同埋範圍。"
      }
    ],
    "B07": [
      {
        "start": 0.0,
        "end": 5.165,
        "text": "無符號整數，全部位元都表示數值。"
      },
      {
        "start": 5.165,
        "end": 6.456,
        "text": "冇負數。"
      },
      {
        "start": 6.456,
        "end": 10.976,
        "text": "八位元範圍：零至二百五十五。"
      },
      {
        "start": 10.976,
        "end": 16.464,
        "text": "n 位元：零至二嘅 n 次方減一。"
      }
    ],
    "B08": [
      {
        "start": 0.0,
        "end": 6.541,
        "text": "符號及值：最高有效位，零代表正，一代表負；其餘位表示數值大小。"
      },
      {
        "start": 6.541,
        "end": 9.707,
        "text": "問題係存在雙重零：正零同負零。"
      },
      {
        "start": 9.707,
        "end": 13.927,
        "text": "八位元範圍：負一百二十七至正一百二十七。"
      },
      {
        "start": 13.927,
        "end": 16.248,
        "text": "唔好同二進制補碼混淆。"
      }
    ],
    "B09": [
      {
        "start": 0.0,
        "end": 4.621,
        "text": "二進制補碼，two's complement。"
      },
      {
        "start": 4.621,
        "end": 7.434,
        "text": "最高有效位同樣：零正，一負。"
      },
      {
        "start": 7.434,
        "end": 10.448,
        "text": "但係只有唯一零，全部零就係零。"
      },
      {
        "start": 10.448,
        "end": 14.467,
        "text": "八位元範圍：負一百二十八至正一百二十七。"
      },
      {
        "start": 14.467,
        "end": 17.28,
        "text": "比符號及值，負數端多一個值。"
      }
    ],
    "B10": [
      {
        "start": 0.0,
        "end": 3.333,
        "text": "求負整數嘅八位元二進制補碼，三步。"
      },
      {
        "start": 3.333,
        "end": 6.077,
        "text": "一，寫出對應正整數之二進制。"
      },
      {
        "start": 6.077,
        "end": 12.154,
        "text": "二，全部取反，得到一的補數，ones' complement。"
      },
      {
        "start": 12.154,
        "end": 15.095,
        "text": "三，再加一，就得到二進制補碼。"
      },
      {
        "start": 15.095,
        "end": 22.152,
        "text": "例如負二十九：二十九係零零零一一一零一；取反再加一，得一一一零零零一一。"
      }
    ],
    "B11": [
      {
        "start": 0.0,
        "end": 7.327,
        "text": "溢出誤差，Overflow Error：結果超出該位元數可以容納嘅範圍。"
      },
      {
        "start": 7.327,
        "end": 13.636,
        "text": "二進制補碼加法判斷：兩個同號數相加，若得出相反符號，必定溢出。"
      },
      {
        "start": 13.636,
        "end": 17.707,
        "text": "正加正得出負，溢出；負加負得出正，溢出。"
      },
      {
        "start": 17.707,
        "end": 20.76,
        "text": "一正一負相加，絕不會產生溢出。"
      }
    ],
    "B12": [
      {
        "start": 0.0,
        "end": 3.771,
        "text": "字符編碼先睇 A S C I I。"
      },
      {
        "start": 3.771,
        "end": 8.208,
        "text": "一字節，實用七位元，共一百二十八個字符。"
      },
      {
        "start": 8.208,
        "end": 11.757,
        "text": "英文字母、數字、標點同控制字符。"
      },
      {
        "start": 11.757,
        "end": 16.416,
        "text": "最左位元補零，存入一字節；係西方編碼基礎。"
      }
    ],
    "B13": [
      {
        "start": 0.0,
        "end": 11.755,
        "text": "大五碼，Big 五：一至二字節；繁體中文常用字，兼相容 A S C I I。"
      },
      {
        "start": 11.755,
        "end": 18.252,
        "text": "區域性繁體編碼；唔支援簡體；跨區易出亂碼。"
      },
      {
        "start": 18.252,
        "end": 22.583,
        "text": "國標碼，G B：以簡體為主。"
      },
      {
        "start": 22.583,
        "end": 34.647,
        "text": "G B 二三一二主要簡體；G B K 同 G B 一八零三零係擴充，收字更多。"
      },
      {
        "start": 34.647,
        "end": 44.856,
        "text": "唔好籠統講所有 G B 都唔支援繁體；繁體常用仍然係 Big 五。"
      }
    ],
    "B14": [
      {
        "start": 0.0,
        "end": 7.161,
        "text": "統一碼，Unicode，常見儲存係 U T F 八。"
      },
      {
        "start": 7.161,
        "end": 12.946,
        "text": "一至四字節變長；涵蓋全球文字、符號同表情。"
      },
      {
        "start": 12.946,
        "end": 24.79,
        "text": "同 A S C I I 反向兼容：A S C I I 字符只佔一字節；中文多佔三字節。"
      },
      {
        "start": 24.79,
        "end": 29.472,
        "text": "亦係 H T M L 五常用標準。"
      }
    ],
    "B15": [
      {
        "start": 0.0,
        "end": 1.267,
        "text": "記住四點。"
      },
      {
        "start": 1.267,
        "end": 7.348,
        "text": "位值唔好同面值混淆；進制轉換跟位值同每四位一組。"
      },
      {
        "start": 7.348,
        "end": 15.203,
        "text": "符號及值有雙重零；二進制補碼有唯一零，八位元去到負一百二十八。"
      },
      {
        "start": 15.203,
        "end": 18.497,
        "text": "同號相加得反號，就係溢出。"
      },
      {
        "start": 18.497,
        "end": 26.352,
        "text": "編碼：A S C I I、Big 五、G B、Unicode。"
      }
    ]
  },
  "cmn": {
    "B01": [
      {
        "start": 0.0,
        "end": 1.512,
        "text": "今天複習第三章。"
      },
      {
        "start": 1.512,
        "end": 6.237,
        "text": "數據表示，Data Representation。"
      },
      {
        "start": 6.237,
        "end": 10.584,
        "text": "數字、整數、字符，在電腦裏怎樣用二進制來表示。"
      }
    ],
    "B02": [
      {
        "start": 0.0,
        "end": 1.717,
        "text": "本章三條主線。"
      },
      {
        "start": 1.717,
        "end": 3.434,
        "text": "一，進制轉換。"
      },
      {
        "start": 3.434,
        "end": 5.151,
        "text": "二，整數表示。"
      },
      {
        "start": 5.151,
        "end": 6.868,
        "text": "三，字符編碼。"
      },
      {
        "start": 6.868,
        "end": 10.056,
        "text": "記住：全部最終都是零和一。"
      }
    ],
    "B03": [
      {
        "start": 0.0,
        "end": 3.132,
        "text": "每一位數字，有兩樣東西要分開看。"
      },
      {
        "start": 3.132,
        "end": 5.286,
        "text": "面值，是那個字符本身。"
      },
      {
        "start": 5.286,
        "end": 10.964,
        "text": "位值，Place value，是它在這個位置所代表的數值。"
      },
      {
        "start": 10.964,
        "end": 13.117,
        "text": "不要把面值和位值混淆。"
      },
      {
        "start": 13.117,
        "end": 21.144,
        "text": "例如二進制的一零一：最右是一乘二的零次方；中間零乘二的一次方；最左一乘二的二次方。"
      }
    ],
    "B04": [
      {
        "start": 0.0,
        "end": 4.022,
        "text": "二進制轉十六進制，跟黃金法則。"
      },
      {
        "start": 4.022,
        "end": 10.458,
        "text": "從小數點，或者最右側起，每四個二進制位元為一組。"
      },
      {
        "start": 10.458,
        "end": 13.407,
        "text": "不足四位，在左方補零。"
      },
      {
        "start": 13.407,
        "end": 21.72,
        "text": "每組對照表格，變成一位十六進制字符，零到九，或者 A 到 F。"
      }
    ],
    "B05": [
      {
        "start": 0.0,
        "end": 3.048,
        "text": "記住儲存單位進率。"
      },
      {
        "start": 3.048,
        "end": 8.467,
        "text": "一 Byte，等於八 bits。"
      },
      {
        "start": 8.467,
        "end": 17.95,
        "text": "一 K B，等於一千零二十四 Bytes，即二的十次方。"
      },
      {
        "start": 17.95,
        "end": 27.095,
        "text": "一 M B，等於一千零二十四 K B，即二的二十次方。"
      },
      {
        "start": 27.095,
        "end": 36.239,
        "text": "一 G B，等於一千零二十四 M B，即二的三十次方。"
      },
      {
        "start": 36.239,
        "end": 45.384,
        "text": "一 T B，等於一千零二十四 G B，即二的四十次方。"
      }
    ],
    "B06": [
      {
        "start": 0.0,
        "end": 2.328,
        "text": "整數有三種常見表示法。"
      },
      {
        "start": 2.328,
        "end": 5.501,
        "text": "無符號整數，Unsigned。"
      },
      {
        "start": 5.501,
        "end": 10.58,
        "text": "符號及值，Sign-and-Magnitude。"
      },
      {
        "start": 10.58,
        "end": 15.446,
        "text": "二進制補碼，two's complement。"
      },
      {
        "start": 15.446,
        "end": 20.736,
        "text": "重點看：最高有效位 M S B，零問題，以及範圍。"
      }
    ],
    "B07": [
      {
        "start": 0.0,
        "end": 4.778,
        "text": "無符號整數，全部位元都表示數值。"
      },
      {
        "start": 4.778,
        "end": 6.271,
        "text": "沒有負數。"
      },
      {
        "start": 6.271,
        "end": 10.452,
        "text": "八位元範圍：零至二百五十五。"
      },
      {
        "start": 10.452,
        "end": 15.528,
        "text": "n 位元：零至二的 n 次方減一。"
      }
    ],
    "B08": [
      {
        "start": 0.0,
        "end": 6.338,
        "text": "符號及值：最高有效位，零代表正，一代表負；其餘位表示數值大小。"
      },
      {
        "start": 6.338,
        "end": 9.406,
        "text": "問題是存在雙重零：正零和負零。"
      },
      {
        "start": 9.406,
        "end": 13.495,
        "text": "八位元範圍：負一百二十七至正一百二十七。"
      },
      {
        "start": 13.495,
        "end": 15.744,
        "text": "不要和二進制補碼混淆。"
      }
    ],
    "B09": [
      {
        "start": 0.0,
        "end": 4.448,
        "text": "二進制補碼，two's complement。"
      },
      {
        "start": 4.448,
        "end": 7.156,
        "text": "最高有效位同樣：零正，一負。"
      },
      {
        "start": 7.156,
        "end": 10.057,
        "text": "但是只有唯一零，全部零就是零。"
      },
      {
        "start": 10.057,
        "end": 13.924,
        "text": "八位元範圍：負一百二十八至正一百二十七。"
      },
      {
        "start": 13.924,
        "end": 16.632,
        "text": "比符號及值，負數端多一個值。"
      }
    ],
    "B10": [
      {
        "start": 0.0,
        "end": 3.192,
        "text": "求負整數的八位元二進制補碼，三步。"
      },
      {
        "start": 3.192,
        "end": 5.82,
        "text": "一，寫出對應正整數的二進制。"
      },
      {
        "start": 5.82,
        "end": 11.641,
        "text": "二，全部取反，得到一的補數，ones' complement。"
      },
      {
        "start": 11.641,
        "end": 14.457,
        "text": "三，再加一，就得到二進制補碼。"
      },
      {
        "start": 14.457,
        "end": 21.216,
        "text": "例如負二十九：二十九是零零零一一一零一；取反再加一，得一一一零零零一一。"
      }
    ],
    "B11": [
      {
        "start": 0.0,
        "end": 7.081,
        "text": "溢出誤差，Overflow Error：結果超出該位元數所能容納的範圍。"
      },
      {
        "start": 7.081,
        "end": 13.179,
        "text": "二進制補碼加法判斷：兩個同號數相加，若得出相反符號，必定溢出。"
      },
      {
        "start": 13.179,
        "end": 17.113,
        "text": "正加正得出負，溢出；負加負得出正，溢出。"
      },
      {
        "start": 17.113,
        "end": 20.064,
        "text": "一正一負相加，絕不會產生溢出。"
      }
    ],
    "B12": [
      {
        "start": 0.0,
        "end": 3.672,
        "text": "字符編碼先看 A S C I I。"
      },
      {
        "start": 3.672,
        "end": 7.992,
        "text": "一字節，實用七位元，共一百二十八個字符。"
      },
      {
        "start": 7.992,
        "end": 11.448,
        "text": "英文字母、數字、標點和控制字符。"
      },
      {
        "start": 11.448,
        "end": 15.984,
        "text": "最左位元補零，存入一字節；是西方編碼基礎。"
      }
    ],
    "B13": [
      {
        "start": 0.0,
        "end": 11.535,
        "text": "大五碼，Big 五：一至二字節；繁體中文常用字，並相容 A S C I I。"
      },
      {
        "start": 11.535,
        "end": 17.91,
        "text": "區域性繁體編碼；不支援簡體；跨區易出亂碼。"
      },
      {
        "start": 17.91,
        "end": 22.16,
        "text": "國標碼，G B：以簡體為主。"
      },
      {
        "start": 22.16,
        "end": 33.999,
        "text": "G B 二三一二主要簡體；G B K 和 G B 一八零三零是擴充，收字更多。"
      },
      {
        "start": 33.999,
        "end": 44.016,
        "text": "不要籠統說所有 G B 都不支援繁體；繁體常用仍然是 Big 五。"
      }
    ],
    "B14": [
      {
        "start": 0.0,
        "end": 6.847,
        "text": "統一碼，Unicode，常見儲存是 U T F 八。"
      },
      {
        "start": 6.847,
        "end": 12.376,
        "text": "一至四字節變長；涵蓋全球文字、符號和表情。"
      },
      {
        "start": 12.376,
        "end": 23.699,
        "text": "與 A S C I I 反向兼容：A S C I I 字符只佔一字節；中文多佔三字節。"
      },
      {
        "start": 23.699,
        "end": 28.176,
        "text": "也是 H T M L 五常用標準。"
      }
    ],
    "B15": [
      {
        "start": 0.0,
        "end": 1.203,
        "text": "記住四點。"
      },
      {
        "start": 1.203,
        "end": 7.221,
        "text": "位值不要和面值混淆；進制轉換跟位值以及每四位一組。"
      },
      {
        "start": 7.221,
        "end": 14.442,
        "text": "符號及值有雙重零；二進制補碼有唯一零，八位元到負一百二十八。"
      },
      {
        "start": 14.442,
        "end": 17.571,
        "text": "同號相加得反號，就是溢出。"
      },
      {
        "start": 17.571,
        "end": 25.032,
        "text": "編碼：A S C I I、Big 五、G B、Unicode。"
      }
    ]
  },
  "en": {
    "B01": [
      {
        "start": 0.0,
        "end": 2.24,
        "text": "Today we revise Chapter Three."
      },
      {
        "start": 2.24,
        "end": 3.733,
        "text": "Data representation."
      },
      {
        "start": 3.733,
        "end": 9.408,
        "text": "How numbers, integers, and characters are shown in binary inside a computer."
      }
    ],
    "B02": [
      {
        "start": 0.0,
        "end": 2.784,
        "text": "Three main lines in this chapter."
      },
      {
        "start": 2.784,
        "end": 5.146,
        "text": "One: number-base conversion."
      },
      {
        "start": 5.146,
        "end": 7.593,
        "text": "Two: integer representations."
      },
      {
        "start": 7.593,
        "end": 9.787,
        "text": "Three: character encoding."
      },
      {
        "start": 9.787,
        "end": 13.752,
        "text": "Remember: everything ends up as zeros and ones."
      }
    ],
    "B03": [
      {
        "start": 0.0,
        "end": 2.474,
        "text": "For each digit, keep two ideas apart."
      },
      {
        "start": 2.474,
        "end": 4.613,
        "text": "Face value is the symbol itself."
      },
      {
        "start": 4.613,
        "end": 9.494,
        "text": "Place value is the numerical value that digit represents in its position."
      },
      {
        "start": 9.494,
        "end": 12.369,
        "text": "Do not confuse face value with place value."
      },
      {
        "start": 12.369,
        "end": 22.464,
        "text": "For example, binary one zero one: the rightmost one times two to the zero; the middle zero times two to the one; the leftmost one times two to the two."
      }
    ],
    "B04": [
      {
        "start": 0.0,
        "end": 3.177,
        "text": "Binary to hexadecimal follows the golden rule."
      },
      {
        "start": 3.177,
        "end": 8.563,
        "text": "From the radix point, or from the rightmost end, group every four binary bits."
      },
      {
        "start": 8.563,
        "end": 12.638,
        "text": "If a group has fewer than four bits, pad zeros on the left."
      },
      {
        "start": 12.638,
        "end": 17.472,
        "text": "Map each group to one hexadecimal digit: zero to nine, or A through F."
      }
    ],
    "B05": [
      {
        "start": 0.0,
        "end": 2.318,
        "text": "Remember the storage unit scale."
      },
      {
        "start": 2.318,
        "end": 4.274,
        "text": "One byte equals eight bits."
      },
      {
        "start": 4.274,
        "end": 9.127,
        "text": "One K B equals one thousand and twenty-four bytes — two to the ten."
      },
      {
        "start": 9.127,
        "end": 14.053,
        "text": "One M B equals one thousand and twenty-four K B — two to the twenty."
      },
      {
        "start": 14.053,
        "end": 18.979,
        "text": "One G B equals one thousand and twenty-four M B — two to the thirty."
      },
      {
        "start": 18.979,
        "end": 23.832,
        "text": "One T B equals one thousand and twenty-four G B — two to the forty."
      }
    ],
    "B06": [
      {
        "start": 0.0,
        "end": 3.438,
        "text": "Integers have three common representations."
      },
      {
        "start": 3.438,
        "end": 4.877,
        "text": "Unsigned integers."
      },
      {
        "start": 4.877,
        "end": 6.396,
        "text": "Sign-and-magnitude."
      },
      {
        "start": 6.396,
        "end": 7.756,
        "text": "Two's complement."
      },
      {
        "start": 7.756,
        "end": 13.992,
        "text": "Focus on the most significant bit, the M S B, the zero problem, and the range."
      }
    ],
    "B07": [
      {
        "start": 0.0,
        "end": 4.023,
        "text": "In unsigned integers, every bit represents magnitude."
      },
      {
        "start": 4.023,
        "end": 5.769,
        "text": "There are no negatives."
      },
      {
        "start": 5.769,
        "end": 9.716,
        "text": "Eight-bit range: zero to two hundred and fifty-five."
      },
      {
        "start": 9.716,
        "end": 13.056,
        "text": "For n bits: zero to two to the n, minus one."
      }
    ],
    "B08": [
      {
        "start": 0.0,
        "end": 7.239,
        "text": "Sign-and-magnitude: the most significant bit is zero for positive, one for negative; the other bits hold magnitude."
      },
      {
        "start": 7.239,
        "end": 10.45,
        "text": "The problem is dual zero: plus zero and minus zero."
      },
      {
        "start": 10.45,
        "end": 16.052,
        "text": "Eight-bit range: minus one hundred and twenty-seven to plus one hundred and twenty-seven."
      },
      {
        "start": 16.052,
        "end": 18.696,
        "text": "Do not confuse this with two's complement."
      }
    ],
    "B09": [
      {
        "start": 0.0,
        "end": 1.077,
        "text": "Two's complement."
      },
      {
        "start": 1.077,
        "end": 5.702,
        "text": "The most significant bit is likewise zero for positive, one for negative."
      },
      {
        "start": 5.702,
        "end": 8.87,
        "text": "But there is a unique zero — all zeros means zero."
      },
      {
        "start": 8.87,
        "end": 14.509,
        "text": "Eight-bit range: minus one hundred and twenty-eight to plus one hundred and twenty-seven."
      },
      {
        "start": 14.509,
        "end": 19.008,
        "text": "Compared with sign-and-magnitude, the negative end has one extra value."
      }
    ],
    "B10": [
      {
        "start": 0.0,
        "end": 4.837,
        "text": "To get the eight-bit two's complement of a negative integer, three steps."
      },
      {
        "start": 4.837,
        "end": 8.481,
        "text": "One: write the binary of the matching positive integer."
      },
      {
        "start": 8.481,
        "end": 11.993,
        "text": "Two: invert every bit — that is the ones' complement."
      },
      {
        "start": 11.993,
        "end": 15.041,
        "text": "Three: add one — that yields two's complement."
      },
      {
        "start": 15.041,
        "end": 24.384,
        "text": "Example, minus twenty-nine: twenty-nine is zero zero zero one one one zero one; invert and add one to get one one one zero zero zero one one."
      }
    ],
    "B11": [
      {
        "start": 0.0,
        "end": 4.344,
        "text": "Overflow error: the result falls outside the range that bit width can hold."
      },
      {
        "start": 4.344,
        "end": 10.772,
        "text": "Two's complement addition rule: if two same-sign numbers add to the opposite sign, overflow must have occurred."
      },
      {
        "start": 10.772,
        "end": 16.853,
        "text": "Positive plus positive yielding negative — overflow; negative plus negative yielding positive — overflow."
      },
      {
        "start": 16.853,
        "end": 20.328,
        "text": "One positive and one negative added together never overflow."
      }
    ],
    "B12": [
      {
        "start": 0.0,
        "end": 2.745,
        "text": "Start character encoding with A S C I I."
      },
      {
        "start": 2.745,
        "end": 7.892,
        "text": "One byte, practically seven bits — one hundred and twenty-eight characters."
      },
      {
        "start": 7.892,
        "end": 11.529,
        "text": "Letters, digits, punctuation, and control characters."
      },
      {
        "start": 11.529,
        "end": 17.568,
        "text": "The leftmost bit is padded with zero into one byte; it is the base of Western encodings."
      }
    ],
    "B13": [
      {
        "start": 0.0,
        "end": 6.438,
        "text": "Big Five: one to two bytes; traditional Chinese common characters, and it includes A S C I I."
      },
      {
        "start": 6.438,
        "end": 12.531,
        "text": "A regional traditional encoding; no simplified Chinese; cross-region mojibake is common."
      },
      {
        "start": 12.531,
        "end": 15.231,
        "text": "G B code centres on simplified Chinese."
      },
      {
        "start": 15.231,
        "end": 23.538,
        "text": "G B two three one two is mainly simplified; G B K and G B one eight zero three zero are extensions with more characters."
      },
      {
        "start": 23.538,
        "end": 30.6,
        "text": "Do not claim every G B variant excludes traditional; traditional Chinese still commonly uses Big Five."
      }
    ],
    "B14": [
      {
        "start": 0.0,
        "end": 3.105,
        "text": "Unicode — commonly stored as U T F eight."
      },
      {
        "start": 3.105,
        "end": 9.39,
        "text": "Variable length, one to four bytes; covers the world’s scripts, symbols, and emoji."
      },
      {
        "start": 9.39,
        "end": 16.811,
        "text": "Backward compatible with A S C I I: A S C I I characters take one byte; Chinese often takes three."
      },
      {
        "start": 16.811,
        "end": 19.992,
        "text": "It is also a common H T M L five standard."
      }
    ],
    "B15": [
      {
        "start": 0.0,
        "end": 1.479,
        "text": "Remember four points."
      },
      {
        "start": 1.479,
        "end": 8.454,
        "text": "Do not confuse place value with face value; convert bases with place value and groups of four bits."
      },
      {
        "start": 8.454,
        "end": 17.331,
        "text": "Sign-and-magnitude has dual zero; two's complement has a unique zero, and eight bits reach minus one hundred and twenty-eight."
      },
      {
        "start": 17.331,
        "end": 20.572,
        "text": "Same-sign add to opposite sign means overflow."
      },
      {
        "start": 20.572,
        "end": 24.024,
        "text": "Encodings: A S C I I, Big Five, G B, and Unicode."
      }
    ]
  }
};
var CH4_AUDIO_DURATIONS = {
  "yue": {
    "B01": 11.568,
    "B02": 11.712,
    "B03": 22.008,
    "B04": 22.056,
    "B05": 47.664,
    "B06": 21.624,
    "B07": 16.464,
    "B08": 16.248,
    "B09": 17.28,
    "B10": 22.152,
    "B11": 20.76,
    "B12": 16.416,
    "B13": 44.856,
    "B14": 29.472,
    "B15": 26.352
  },
  "cmn": {
    "B01": 10.584,
    "B02": 10.056,
    "B03": 21.144,
    "B04": 21.72,
    "B05": 45.384,
    "B06": 20.736,
    "B07": 15.528,
    "B08": 15.744,
    "B09": 16.632,
    "B10": 21.216,
    "B11": 20.064,
    "B12": 15.984,
    "B13": 44.016,
    "B14": 28.176,
    "B15": 25.032
  },
  "en": {
    "B01": 9.408,
    "B02": 13.752,
    "B03": 22.464,
    "B04": 17.472,
    "B05": 23.832,
    "B06": 13.992,
    "B07": 13.056,
    "B08": 18.696,
    "B09": 19.008,
    "B10": 24.384,
    "B11": 20.328,
    "B12": 17.568,
    "B13": 30.6,
    "B14": 19.992,
    "B15": 24.024
  }
};
