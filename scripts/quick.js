'use strict';




function quickSort (arr, left = 0, right = arr.length - 1) {
  let i = left;
  let j = right;
  let tmp;
  let pivotidx = (left + right) / 2;
  let pivot = parseInt(arr[pivotidx.toFixed()]);
  /* partition */
  while (i <= j) {
    while (parseInt(arr[i]) < pivot)
      i++;
    while (parseInt(arr[j]) > pivot)
      j--;
    if (i <= j) {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }
  if (left < j) {
    quickSort(arr, left, j);
  }
  if (i < right) {
    quickSort(arr, i, right);
  }
  return arr;
}





module.exports = quickSort;
