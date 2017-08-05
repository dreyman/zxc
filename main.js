'use strict';
(function() {

  setProgress();

  function getInfo() {
    let date = new Date();
    let year = date.getFullYear();
    let isLeap = year % 400 == 0 || year % 4 == 0 && year % 100 != 0;
    let mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap) mdays[1] = 29;
    let nDays = date.getDate();
    for (let i = 0; i < date.getMonth(); nDays += mdays[i++]);
    return {
      year: year,
      day: nDays,
      daysInYear: isLeap ? 366 : 365
    }
  }

  function setProgress() {
    let info = getInfo();
    document.getElementById('i').style.width = info.day / info.daysInYear * 100 + '%';
    document.getElementById('day').innerHTML = /* info.year + '.' + */ info.day;
  }

})();
