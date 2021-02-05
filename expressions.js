
//
// expressions
//

const expressionsMap = {
  '${today}': () => formatDate(new Date()),

  '${today-1d}': () => daysFromNow(-1),

  '${today-6m}': () => monthsFromNow(-6),

  '${today-1y}': () => monthsFromNow(-12),
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

//
// main
//

function processExpressions(inputStr) {
  console.log('processExpressions input:\n', decodeURIComponent(inputStr));

  let result = inputStr;

  Object.keys(expressionsMap).forEach(function (key, index) {
    console.log('  expression:', key);
    result = result.replaceAll(encodeURIComponent(key), encodeURIComponent(expressionsMap[key]()));
    // console.log('step:', result);
  });

  console.warn('processExpressions result:\n', decodeURIComponent(result));
  return result;
}


