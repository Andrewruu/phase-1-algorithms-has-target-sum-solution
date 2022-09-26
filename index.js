function hasTargetSum(array, target) {
  // Write your algorithm here

  // O(n) using an obj to keep track of checked numbers searching keys is O(1)
  // so only real time used is the for loop which is O(n)
  const obj = {}

  for (const number of array){
    const newTarget = target - number
    if (newTarget in obj){
      return true
    }
    obj[number] = 0
  }
  return false

  /* const newArray = []

  for (const number of array){
    const newTarget = target - number
    if (newArray.includes(newTarget)){
      return true
    }
    newArray.push(number)
  }
  console.log(newArray)
  return false
 */

  /* This is checking itself so if 4-2 = 2 it checks if 2 is in the array  
  for (const number of array){
    const newTarget = target - number
    console.log(number)
    console.log(newTarget)
    if (array.includes(newTarget)){
      return true
    }
  }
  return false */
}

/* 
  Write the Big O time complexity of your function here

  due to using for loop and .includes this should be O(n^2)

  const newArray = []

  for (const number of array){
    const newTarget = target - number
    if (newArray.includes(newTarget)){
      return true
    }
    newArray.push(number)
  }
  return false
*/

/* 
  Add your pseudocode here

  create a new array to hold checked numbers
  take target number and subtract number from array 
  check if result is in the new array return true
  else return false


*/

/*
  Add written explanation of your solution here

  created a new Obj to keep track of checked numbers to reduce time since checking for keys is O(1)
  then created a loop that checks the array O(n)
  target - check number in array 
  if this result is in Obj return true
  if not move on to the next number in array an check

  by having that target - number in array
  doing that we will know what number needs to be added with "number in array" to get target number
  we will then check if it is a key in the Obj if it is not we add it as a new key 
  if it is in the obj we end and return true
  after going through the whole array if we dont find any of the numbers as keys in the Obj we return false
  
  
*/

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
