'use strict';

function selectionSort (arr) {
  let counter = 0;
  while (counter < arr.length) {
    for (let i = counter + 1; i < arr.length; i++) {
      if (arr[i] <= arr[counter]) {
        let save = arr[counter];
        arr[counter] = arr[i];
        arr[i] = save;
      }
    }
    counter++;
  }
  return arr;
}

//soltion2master
// function selectionSort (arr) {
//   let currentIndex = 0;
//   while (currentIndex < arr.length) {
//     let tempIndex = currentIndex;
//     let minIndex = tempIndex;
//     while (tempIndex < arr.length) {
//       if (arr[tempIndex] < arr[minIndex]) {
//         minIndex = tempIndex;
//       }
//       tempIndex++;
//     }
//     [arr[minIndex], arr[currentIndex]] = [arr[currentIndex], arr[minIndex]];
//     currentIndex++;
//   }
//   return arr;
// }


module.exports = selectionSort;
