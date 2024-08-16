function findMaxNumber(arr) {
  let max = arr[0]; // set up to the first element 

  for (let i = 1; i < arr.length; i++) {  //start the loop at the second element "i = 1" as long as i is less than the array
    if (arr[i] > max) { // if the array at that index is greter than the max it will set max to that number
      max = arr[i];
    }
  }
  return max;
}

//example with a method:

// function findMaxNumber(arr) {
//   return Math.max(...arr);
// }

module.exports = findMaxNumber;
