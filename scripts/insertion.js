'use strict';
const { performance } = require('perf_hooks');

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i -1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        let oldval = arr[j];
        arr[j] = arr[i];
        arr[i] = oldval;
        i--;
      }
    }
  }
  return arr;
}


module.exports = insertionSort;


