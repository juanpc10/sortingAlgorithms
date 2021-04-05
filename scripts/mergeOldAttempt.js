'use strict';

function mergeSort (arr) {
  
  let arr1 = arr.slice(0, Math.floor(arr.length / 2));
  let arr2 = arr.slice(Math.floor(arr.length / 2));
  //let result = [];

  for (let mainIndex = 1; mainIndex < arr1.length; mainIndex++) {
    for (let insideIndex = mainIndex - 1; insideIndex >= 0; insideIndex--) {
      if (arr1[insideIndex] > arr1[mainIndex]) {
        let temp = arr1[mainIndex];
        arr1[mainIndex] = arr1[insideIndex];
        arr1[insideIndex] = temp;
        mainIndex--;
      }
    }
  }
  for (let mainIndex = 1; mainIndex < arr2.length; mainIndex++) {
    for (let insideIndex = mainIndex - 1; insideIndex >= 0; insideIndex--) {
      if (arr2[insideIndex] > arr2[mainIndex]) {
        let temp = arr2[mainIndex];
        arr2[mainIndex] = arr2[insideIndex];
        arr2[insideIndex] = temp;
        mainIndex--;
      }
    }
  }
  arr = [];
  while (arr1.length || arr2.length) {
    if (arr1.length && !arr2.length) {
      arr.push(...arr1);
      arr1 = [];
    } else if (arr2.length && !arr1.length) {
      arr.push(...arr2);
      arr2 = [];
    } else {
      if (arr1[0] === arr2[0]) {
        arr.push(arr1[0]);
        arr.push(arr2[0]);
        arr1.shift();
        arr2.shift();
      } else if (arr1[0] < arr2[0]) {
        arr.push(arr1[0]);
        arr1.shift();
      } else {
        arr.push(arr2[0]);
        arr2.shift();
      }
    }
  } 
  return [...arr];
}

// let arraaay = [ 5, 18, 6, 7, 4, 18, 16, 10, 2, 2 ];
// debugger
// mergeSort(arraaay);

module.exports = mergeSort;