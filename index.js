function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    let j = word.length - 1 - i;

    if (word[i] !== word[j]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  //SOLUTION 2//
  iterate word and see first letter matches with last later, 
  second letter matches with second from last later, 
  and so on until middle letter(it stops at middle letter)

  assign corresponding letter to variable 
  and minus 1 every time iterating

  compare letter[index] with corresponding letter[index]
  return false if they don't match

  return true after finishing iterating

*/

/*
  Add written explanation of your solution here
  for loop will iterate WORD until middle by using /2

  let j will iterate word from backword

  return false and stop iterating if false

  by putting return true at the end will make for loop
  iterate until middle
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
