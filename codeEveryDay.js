// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!
//CODE WARS
function createPhoneNumber(numbers){
    numbers.unshift("(");
    numbers.splice(4, 0, ")", " ");
    numbers.splice(9, 0, "-");
    return numbers.join("");
    
    
  }


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let string1=stringA.split('')
//     let string2=stringB.split('')
    
//     let total1=[]
//     let total2=[]
//     if(string1.length!=string2.length){
//        return false
//      }
    
    
//       for (let i in string1) {
//         if (aCharMap[char] !== bCharMap[char]) {
//           return false;
//         }
//       }
//     for(let i = 0; i < string2.length; i++) {
//        return total2=string1[i].length()
        
//     }
//     if(total1!=total2){
//       return false
//     }
//       else{return true}
//     // for (let index2 = 0; index2 < string2.length; index2++) {
//     //    return index2
        
//     // }
//     // if (index1===index2) {
//     //    return true 
//     // } else {
//     //     return false
//     // }
    
//     }
function anagrams(stringA, stringB) {
    let string1=comparison(stringA)
    let string2=comparison(stringB)

    if(string1.length!=string2.length){
       return false
     }

  for (let i in string1) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }

  return true;
}

function comparison(str){
  const charMap = {};

  for (let i of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[i] = charMap[i] + 1 || 1;
  }

  return charMap;
}
module.exports = anagrams;