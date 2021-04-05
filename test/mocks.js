'use strict';

function randomArrGenerator (length) {
  let res = [];
  for (let i = 0; i < length; i++) {
    res.push(Math.floor(Math.random() * length * 2));
  }
  return res;
}

exports.randomArr = randomArrGenerator(10);
exports.sortedArr = exports.randomArr.slice().sort(function (a, b) {
  return a - b;
});
