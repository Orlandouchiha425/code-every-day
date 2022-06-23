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
//     // if (index1===in0dex2) {
//     //    return true 
//     // } else {
//     //     return false
//     // }
    
//     }


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
  }
  
  function cleanString(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }


  console.log(anagrams('Hi there', 'Bye there'))
module.exports = anagrams;


function isAnagram(stringA,stringB){
  
  stringA=stringA.toUpperCase().split('').sort().join('')
  stringB=stringB.toUpperCase().split('').sort().join('')
  return stringA===stringB
}

console.log(isAnagram('hello there','hello there'))
console.log(isAnagram('hi there','hi'))
// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    insert(data) {
      if (data < this.data && this.left) {
        this.left.insert(data);
      } else if (data < this.data) {
        this.left = new Node(data);
      } else if (data > this.data && this.right) {
        this.right.insert(data);
      } else if (data > this.data) {
        this.right = new Node(data);
      }
    }
  
    contains(data) {
      if (this.data === data) {
        return this;
      }
  
      if (this.data < data && this.right) {
        return this.right.contains(data);
      } else if (this.data > data && this.left) {
        return this.left.contains(data);
      }
  
      return null;
    }
  }

module.exports = Node;



// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// function capitalize(str) {
//     uppercaseString='';
//      for(let i=0; i<str.length;i++){
//        uppercaseString=str.split(' ')
       
//      }
//      return uppercaseString.toUpperCase()
//    }
   
//    console.log(capitalize('name is orlando'))


function capitalize(str){
  let string= str.split(' ')
    for(let i=0; i<string.length;i++){
      string[i]= string[i].charAt(0).toUpperCase() + string[i].slice(1)
    }
    return string.join(' ')
  }
  console.log(capitalize('name is orlando'))
module.exports = capitalize;


// function capitalizeString(str){
//   str[0].toUpperCase + str.slice(1).toLowerCase();
// }
// function capitalizedWords(str){
//   str.split(' ').map(capitalizeString).join(' ')
// }
// console.log(capitalizedWords('hi my name is orlando '))


// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// function chunk(array,size) {
//   let total='';
//  for(let i=0;i<array.length;i++){
// total+=array[i]
//  }
//    if(total!=' '){
//      total.length/size
//      total.split(' ')
//    }
//   return total
// }
// console.log(chunk([1, 2, 3, 5],2))

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}
console.log(chunk([1, 2, 3, 5],2))


// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


function palindrome(str) {
  string=str.reverse;
if(string===str){
  return true
}
else {return false}

}


function palindrome(str) {
const string = str.split('').reverse().join('');

return str === string;
}

console.log(palindrome('abba'))


// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return n.toString().split('').reverse().join('')
}

console.log(reverseInt(675))