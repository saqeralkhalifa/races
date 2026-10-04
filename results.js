/* Race results data. One entry per race, newest last.
   status: "pending" before the race, "provisional" while files are still arriving, "final" once closed.
   Each result carries a name, sex (M or F), age on race day, and times as h:mm:ss or mm:ss.
   Only times belong here. Heart rate, cadence and power are never written to this file. */
window.RACES = [
  {
    id: "race-1",
    name: { en: "Race 1", ar: "السباق الأول" },
    date: { en: "Friday, October 9, 2026", ar: "الجمعة ٩ أكتوبر ٢٠٢٦" },
    status: "pending",
    updated: null,
    results: []
  }
];
