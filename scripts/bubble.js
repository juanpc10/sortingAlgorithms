'use strict';


function bubbleSort (arr) {
  let counter = arr.length;
  
  while (counter > 0) {
    for (let i = 0; i < counter; i++) {
      if (arr[i+1] <= arr[i]) {
        let save = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = save;
      }
    }
    counter--;
  }
  return arr;
}

// function bubbleSort (arr) {
//   let hasChanged = true;
//   while (hasChanged) {
//     hasChanged = false;
//     for (var i = 0; i <= arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         hasChanged = true;
//       }
//     }
//   }
//   return arr;
// }


module.exports = bubbleSort;
