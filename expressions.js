
//
// expressions
//

const expressionsMap = {
  '${today}': () => formatDate(new Date()),

  // days

  '${today-1d}': () => daysFromNow(-1),
  '${today-2d}': () => daysFromNow(-2),
  '${today-3d}': () => daysFromNow(-3),
  '${today-4d}': () => daysFromNow(-4),
  '${today-5d}': () => daysFromNow(-5),
  '${today-6d}': () => daysFromNow(-6),
  '${today-7d}': () => daysFromNow(-7),
  '${today-8d}': () => daysFromNow(-8),
  '${today-9d}': () => daysFromNow(-9),
  '${today-10d}': () => daysFromNow(-10),
  '${today-11d}': () => daysFromNow(-11),
  '${today-12d}': () => daysFromNow(-12),
  '${today-13d}': () => daysFromNow(-13),
  '${today-14d}': () => daysFromNow(-14),
  '${today-15d}': () => daysFromNow(-15),
  '${today-16d}': () => daysFromNow(-16),
  '${today-17d}': () => daysFromNow(-17),
  '${today-18d}': () => daysFromNow(-18),
  '${today-19d}': () => daysFromNow(-19),
  '${today-20d}': () => daysFromNow(-20),
  '${today-21d}': () => daysFromNow(-21),
  '${today-22d}': () => daysFromNow(-22),
  '${today-23d}': () => daysFromNow(-23),
  '${today-24d}': () => daysFromNow(-24),
  '${today-25d}': () => daysFromNow(-25),
  '${today-26d}': () => daysFromNow(-26),
  '${today-27d}': () => daysFromNow(-27),
  '${today-28d}': () => daysFromNow(-28),
  '${today-29d}': () => daysFromNow(-29),
  '${today-30d}': () => daysFromNow(-30),
  '${today-31d}': () => daysFromNow(-31),

  '${today+1d}': () => daysFromNow(+1),
  '${today+2d}': () => daysFromNow(+2),
  '${today+3d}': () => daysFromNow(+3),
  '${today+4d}': () => daysFromNow(+4),
  '${today+5d}': () => daysFromNow(+5),
  '${today+6d}': () => daysFromNow(+6),
  '${today+7d}': () => daysFromNow(+7),
  '${today+8d}': () => daysFromNow(+8),
  '${today+9d}': () => daysFromNow(+9),
  '${today+10d}': () => daysFromNow(+10),
  '${today+11d}': () => daysFromNow(+11),
  '${today+12d}': () => daysFromNow(+12),
  '${today+13d}': () => daysFromNow(+13),
  '${today+14d}': () => daysFromNow(+14),
  '${today+15d}': () => daysFromNow(+15),
  '${today+16d}': () => daysFromNow(+16),
  '${today+17d}': () => daysFromNow(+17),
  '${today+18d}': () => daysFromNow(+18),
  '${today+19d}': () => daysFromNow(+19),
  '${today+20d}': () => daysFromNow(+20),
  '${today+21d}': () => daysFromNow(+21),
  '${today+22d}': () => daysFromNow(+22),
  '${today+23d}': () => daysFromNow(+23),
  '${today+24d}': () => daysFromNow(+24),
  '${today+25d}': () => daysFromNow(+25),
  '${today+26d}': () => daysFromNow(+26),
  '${today+27d}': () => daysFromNow(+27),
  '${today+28d}': () => daysFromNow(+28),
  '${today+29d}': () => daysFromNow(+29),
  '${today+30d}': () => daysFromNow(+30),
  '${today+31d}': () => daysFromNow(+31),

  // months

  '${today-1m}': () => monthsFromNow(-1),
  '${today-2m}': () => monthsFromNow(-2),
  '${today-3m}': () => monthsFromNow(-3),
  '${today-4m}': () => monthsFromNow(-4),
  '${today-5m}': () => monthsFromNow(-5),
  '${today-6m}': () => monthsFromNow(-6),
  '${today-7m}': () => monthsFromNow(-7),
  '${today-8m}': () => monthsFromNow(-8),
  '${today-9m}': () => monthsFromNow(-9),
  '${today-10m}': () => monthsFromNow(-10),
  '${today-11m}': () => monthsFromNow(-11),
  '${today-12m}': () => monthsFromNow(-12),

  '${today+1m}': () => monthsFromNow(+1),
  '${today+2m}': () => monthsFromNow(+2),
  '${today+3m}': () => monthsFromNow(+3),
  '${today+4m}': () => monthsFromNow(+4),
  '${today+5m}': () => monthsFromNow(+5),
  '${today+6m}': () => monthsFromNow(+6),
  '${today+7m}': () => monthsFromNow(+7),
  '${today+8m}': () => monthsFromNow(+8),
  '${today+9m}': () => monthsFromNow(+9),
  '${today+10m}': () => monthsFromNow(+10),
  '${today+11m}': () => monthsFromNow(+11),
  '${today+12m}': () => monthsFromNow(+12),

  // years

  '${today-1y}': () => monthsFromNow(-12),
  '${today-2y}': () => monthsFromNow(-24),

  '${today+1y}': () => monthsFromNow(+12),
  '${today+2y}': () => monthsFromNow(+24),
};

//
// utils
//

function daysFromNow(dayDiff) {
  // console.log('daysFromNow');

  var today = new Date();
  var dateDiff = new Date(today.getFullYear(), today.getMonth(), today.getDate() + dayDiff);
  dateDiffStr = formatDate(dateDiff);

  return dateDiffStr;
}


function monthsFromNow(monthDiff) {
  // console.log('monthsFromNow');

  var today = new Date();
  var dateDiff = new Date(today.getFullYear(), today.getMonth() + monthDiff, today.getDate());
  dateDiffStr = formatDate(dateDiff);

  return dateDiffStr;
}


function formatDate(date) {
  var str = '' + date.getFullYear();

  if (date.getMonth() < 9) str = str + '0'; // zero-based
  str = str + (date.getMonth() + 1);

  if (date.getDate() < 10) str = str + '0';
  str = str + (date.getDate());

  return str;
}

function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

//
// main
//

function processExpressions(inputStr) {
  console.log('processExpressions input:\n', decodeURIComponent(inputStr));

  let result = inputStr;

  if(result.indexOf(encodeURIComponent('${')) === -1) {
    console.log('no expressions found');
  } else {

    Object.keys(expressionsMap).forEach(function (key, index) {
      // console.log('  expression:', key);
      result = replaceAll(
        result,
        encodeURIComponent(key),
        encodeURIComponent(expressionsMap[key]())
      );
      // console.log('step:', result);
    });
  }

  console.warn('processExpressions result:\n', decodeURIComponent(result));
  return result;
}


