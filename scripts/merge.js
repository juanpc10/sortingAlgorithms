'use strict';




function mergeSort (arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length * 0.5); //mid position of array rounded down
  let left = arr.slice(0, mid); //left array
  let right = arr.slice(mid); //right array
  mergeSort(left);
  mergeSort(right);
  return merge(left, right, arr);
}

function merge (left, right, arr) {
  let index = 0;
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) arr[index++] = left.shift();
    else arr[index++] = right.shift();
  }
  while (left.length > 0) arr[index++] = left.shift();
  while (right.length > 0) arr[index++] = right.shift();
}




module.exports = mergeSort;