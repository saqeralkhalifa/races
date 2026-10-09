/* Race results data. One entry per race, newest last.
   status: "pending" before the race, "provisional" while files are still arriving, "final" once closed.
   Each result carries a name, sex (M or F), age on race day, and times as h:mm:ss or mm:ss.
   A finisher who sent no watch file is entered with name, sex, age if given, total, and source: "reported".
   Only times belong here. Heart rate, cadence and power are never written to this file. */
window.RACES = [
  {
    "id": "race-1",
    "name": {
      "en": "BTA Pre-Season Sprint Triathlon",
      "ar": "سباق الترايثلون التمهيدي للموسم"
    },
    "date": {
      "en": "Friday, October 9, 2026",
      "ar": "الجمعة ٩ أكتوبر ٢٠٢٦"
    },
    "status": "provisional",
    "updated": {
      "en": "October 9, 2026",
      "ar": "٩ أكتوبر ٢٠٢٦"
    },
    "results": [
      {
        "name": {
          "en": "Saqer AlKhalifa",
          "ar": "صقر آل خليفة"
        },
        "sex": "M",
        "age": 46,
        "swim": 932.558,
        "t1": 145.764,
        "bike": 2384.537,
        "t2": 51.944,
        "run": 1770.083,
        "total": 5284.887,
        "source": "fit"
      },
      {
        "name": {
          "en": "May Alhaji",
          "ar": "مي الحاجي"
        },
        "sex": "F",
        "age": 46,
        "total": "1:18:30",
        "source": "reported"
      },
      {
        "name": {
          "en": "Glenn Wesley Dulay",
          "ar": "غلين ويسلي دولاي"
        },
        "sex": "M",
        "ag": "45-49",
        "total": "1:19:16",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Ebrahim Saleh",
          "ar": "إبراهيم صالح"
        },
        "sex": "M",
        "swim": "19:06",
        "t1": "3:58",
        "bike": "39:48",
        "t2": "1:51",
        "run": "37:14",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Fahad Ali",
          "ar": "فهد علي"
        },
        "sex": "M",
        "total": "1:15:32",
        "source": "reported"
      },
      {
        "name": {
          "en": "Abdulla Alsaad",
          "ar": "عبدالله السعد"
        },
        "sex": "M",
        "swim": "19:53",
        "t1": "3:45",
        "bike": "43:16",
        "t2": "1:46",
        "run": "26:26",
        "total": "1:35:05",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Majid Khalid Hussain",
          "ar": "ماجد خالد حسين"
        },
        "sex": "M",
        "swim": "20:17",
        "t1": "3:24",
        "bike": "46:36",
        "t2": "1:50",
        "run": "27:57",
        "total": "1:40:04",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Mohamed Sabt",
          "ar": "محمد سبت"
        },
        "sex": "M",
        "swim": "18:00",
        "t1": "3:50",
        "bike": "41:49",
        "t2": "1:41",
        "run": "29:44",
        "total": "1:35:05",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Bader Omran",
          "ar": "بدر عمران"
        },
        "sex": "M",
        "swim": 1050,
        "t1": 196.5,
        "bike": 2334,
        "t2": 110.8,
        "run": 1453,
        "total": "1:25:45",
        "source": "screenshot",
        "age": 23
      },
      {
        "name": {
          "en": "Noof Abdulaziz",
          "ar": "نوف عبدالعزيز"
        },
        "sex": "F",
        "swim": "20:12",
        "t1": "4:46",
        "bike": "49:19",
        "t2": "4:57",
        "run": "40:52",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Olga Gorvat",
          "ar": "أولغا غورفات"
        },
        "sex": "F",
        "total": "1:16:09",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Khalid Zaman",
          "ar": "خالد زمان"
        },
        "sex": "M",
        "total": "1:34:36",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Ahmed S AlKhalifa",
          "ar": "أحمد آل خليفة"
        },
        "sex": "M",
        "swim": "23:15",
        "t1": "5:28",
        "bike": "56:24",
        "t2": "2:45",
        "run": "38:52",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Mohamed Alharban",
          "ar": "محمد الحربان"
        },
        "sex": "M",
        "age": 43,
        "swim": "16:57",
        "t1": "2:59",
        "bike": "39:28",
        "t2": "2:49",
        "run": "32:30",
        "total": "1:34:43",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Richard Alhajal",
          "ar": "ريتشارد الحجل"
        },
        "sex": "M",
        "ag": "35-39",
        "swim": "16:54",
        "t1": "3:07",
        "bike": "36:17",
        "t2": "2:15",
        "run": "22:07",
        "total": "1:20:40",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Mohamed Almahroos",
          "ar": "محمد المحروس"
        },
        "sex": "M",
        "total": "1:39:13",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Salem Abdulla",
          "ar": "سالم عبدالله"
        },
        "sex": "M",
        "swim": "15:00",
        "bike": "36:52",
        "run": "29:02",
        "source": "screenshot",
        "age": 38
      },
      {
        "name": {
          "en": "Abdulla Almutawa",
          "ar": "عبدالله المطوع"
        },
        "sex": "M",
        "swim": "18:29",
        "bike": "48:20",
        "run": "25:11",
        "source": "reported",
        "total": "1:31:59"
      },
      {
        "name": {
          "en": "Alberto Team (relay)",
          "ar": "فريق ألبرتو (تتابع)"
        },
        "sex": "team",
        "swim": "15:34",
        "bike": "40:15",
        "run": "39:03",
        "total": "1:34:52",
        "source": "team"
      },
      {
        "name": {
          "en": "Samer Mahmandar",
          "ar": "سامر محمندار"
        },
        "sex": "M",
        "swim": "17:08",
        "t1": "5:50",
        "bike": "45:04",
        "t2": "2:02",
        "run": "32:54",
        "total": "1:42:58",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Khalid AlMehaiza",
          "ar": "خالد المهيزع"
        },
        "sex": "M",
        "swim": "14:35",
        "t1": "3:19",
        "bike": "36:53",
        "t2": "1:21",
        "run": "26:49",
        "total": "1:23:00",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Abdulrahman Althawadi",
          "ar": "عبدالرحمن الذوادي"
        },
        "sex": "M",
        "swim": "21:00",
        "t1": "3:32",
        "bike": "1:00:10",
        "t2": "1:44",
        "run": "34:32",
        "total": "2:00:58",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Samra Al Rashdi",
          "ar": "سمرة الراشدي"
        },
        "sex": "F",
        "swim": "21:31",
        "t1": "0:39",
        "bike": "45:34",
        "t2": "1:41",
        "run": "28:16",
        "total": "1:37:40",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Xylph Bryan Heruela",
          "ar": "زيلف براين هيرويلا"
        },
        "sex": "M",
        "swim": "18:00",
        "t1": "2:49",
        "bike": "38:20",
        "t2": "1:03",
        "run": "27:03",
        "total": "1:27:14",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Rashid Fikri",
          "ar": "راشد فكري"
        },
        "sex": "M",
        "age": 45,
        "status": "DNF",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Naser Mohamed Althawadi",
          "ar": "ناصر محمد الذوادي"
        },
        "sex": "M",
        "swim": "15:53",
        "bike": "48:06",
        "run": "27:08",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Gareth Richards",
          "ar": "غاريث ريتشاردز"
        },
        "sex": "M",
        "age": 47,
        "swim": "14:35",
        "bike": "35:34",
        "run": "23:33",
        "total": "1:17:00",
        "source": "reported"
      },
      {
        "name": {
          "en": "Abdulla Fahad Almahroos",
          "ar": "عبدالله فهد المحروس"
        },
        "sex": "M",
        "age": 37,
        "swim": "18:20",
        "t1": "3:38",
        "bike": "38:18",
        "t2": "2:17",
        "run": "41:01",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Faisal Al-Eisa",
          "ar": "فيصل العيسى"
        },
        "sex": "M",
        "swim": "18:56",
        "bike": "1:09:10",
        "run": "41:02",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Nayef Aljawan",
          "ar": "نايف الجوان"
        },
        "sex": "M",
        "swim": "22:08",
        "t1": "9:00",
        "bike": "45:57",
        "t2": "4:30",
        "run": "32:57",
        "total": "1:54:33",
        "source": "screenshot",
        "age": 37
      },
      {
        "name": {
          "en": "Ahmed Janahi",
          "ar": "أحمد جناحي"
        },
        "sex": "M",
        "swim": "19:08",
        "t1": "3:36",
        "bike": "48:41",
        "t2": "3:16",
        "run": "37:03",
        "total": "1:51:44",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Saleh Al Qamar",
          "ar": "صالح القمر"
        },
        "sex": "M",
        "total": "1:47:39",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Jassim Alwardi",
          "ar": "جاسم الوردي"
        },
        "sex": "M",
        "age": 35,
        "total": "1:28:35",
        "source": "reported"
      },
      {
        "name": {
          "en": "Hasan Kadhem",
          "ar": "حسن كاظم"
        },
        "sex": "M",
        "swim": "18:57",
        "t1": "4:21.8",
        "bike": "38:55",
        "t2": "2:01.8",
        "run": "26:44",
        "total": "1:31:00",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Christopher Thomas",
          "ar": "كريستوفر توماس"
        },
        "sex": "M",
        "age": 35,
        "swim": "19:00",
        "t1": "4:00",
        "bike": "1:05:00",
        "t2": "2:00",
        "run": "41:00",
        "total": "2:11:00",
        "source": "reported"
      },
      {
        "name": {
          "en": "Ebrahim Abdulla Touq",
          "ar": "إبراهيم عبدالله طوق"
        },
        "sex": "M",
        "total": "1:37:39",
        "source": "screenshot",
        "swim": "17:43",
        "t1": "4:29",
        "bike": "41:36",
        "t2": "2:32",
        "run": "31:19"
      },
      {
        "name": {
          "en": "Ali Asad",
          "ar": "علي أسد"
        },
        "sex": "M",
        "swim": "19:46",
        "t1": "2:45",
        "bike": "44:53",
        "t2": "3:35",
        "run": "34:47",
        "source": "reported"
      },
      {
        "name": {
          "en": "Abdulrahman Adwan",
          "ar": "عبدالرحمن عدوان"
        },
        "sex": "M",
        "swim": "21:26",
        "t1": "7:38",
        "bike": "45:11",
        "t2": "3:19",
        "run": "31:47",
        "total": "1:49:21",
        "source": "screenshot"
      },
      {
        "name": {
          "en": "Jamie Gracie",
          "ar": "جيمي غريسي"
        },
        "age": 37,
        "swim": 1037.522,
        "t1": 202.541,
        "bike": 2080.449,
        "t2": 92.471,
        "run": 1634.144,
        "total": 5047.127,
        "source": "fit"
      }
    ]
  }
];
