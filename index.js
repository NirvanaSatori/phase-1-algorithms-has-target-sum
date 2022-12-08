function hasTargetSum(array, target) {
  // Write your algorithm here
  //iterate through the array ,adding each number to other numbers and return 
// // take one nums from the array
      for (let i = 0; i < array.length; i++) {
        // look through the rest of the array
        for (let j = i + 1; j < array.length; j++) {
          // if they add up to the target
          if (array[i] + array[j] === target) {
            return true;  //return true
          }
        }
      }
      return false
}
 /* 
  //Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// take one nums from the array
//   compare it to the other nums in the array
//     if they add up to the target
//       return true

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
