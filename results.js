/* Race results data. One entry per race, newest last.
   status: "pending" before the race, "provisional" while files are still arriving, "final" once closed.
   Each result carries a name, sex (M or F), age on race day, and times as h:mm:ss or mm:ss.
   A finisher who sent no watch file is entered with name, sex, age if given, total, and source: "reported".
   Only times belong here. Heart rate, cadence and power are never written to this file. */
window.RACES = [
  {
    "id": "race-1",
    "name": {
      "en": "Race 1",
      "ar": "السباق الأول"
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
      }
    ]
  }
];
