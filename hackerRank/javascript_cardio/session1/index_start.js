// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  ///////option 1 below
  // return str
  //   .split('')
  //   .reverse()
  //   .join('')


  ////////option 2 below
  // let revString = '';
  // for (let i = 0; i < str.length -1; i++) {
  //    revString = str[i] +revString;
    
  // }
  // return revString

  //////////option 3 below

//   let revString = '';
// for (let i of str) {
//   revString = i + revString
  
// }
// return revString


//////option 4 below
// let reversedString = '';

// str.split('').forEach(string => reversedString = string + reversedString);
// return reversedString

////////option 5 below
return str.split('').reduce((revString, string) => {
  return string + revString
}, '')
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // return str.split('').reduce((palindrome, string) =>{
  //  if (palindrome + string === str) {
  //   return true
  //  }
  // },'')

  const revString = str.split('').reverse().join('')
  return revString ===str
}


console.log(isPalindrome('hello'))


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
   return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int)
  //  parseInt(num)
}
console.log(reverseInt(-123))


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {


  /////OPTION 1
  // const strArr = str.toLowerCase().split(' ')
  // for(let i=0; i<strArr.length;i++){
  //   strArr[i] = strArr[i].substring(0,1).toUpperCase() +strArr[i].substring(1)
  // }
  // return strArr.join(' ')




  ///////OPTION 2
  return str
          .toLowerCase()
          .split(' ')
          .map(word => {
            return word[0].toUpperCase() + word.substring(1)
          })
          .join(' ')

  /////OPTION 3///// regular expresionsREVIEW THIS !!!!!!!!
  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase()
  // })
}
console.log(capitalizeLetters('i love javascript'))


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++;
    } else{ 
      charMap[char]=1
    }
    
  })
  for(let char in charMap){
    // debugger;
    if(charMap[char] >maxNum){
      maxNum = charMap[char];
      maxChar = char
    }

  }
  return maxChar
}

// console.log(maxCharacter())
console.log(maxCharacter('javascripttttttt'))

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for(let i = 1; i <= 100; i++) {
        if(i % 15 === 0) {
          console.log('FizzBuzz');
        } else if(i % 3 === 0) {
          console.log('Fizz');
        } else if(i % 5 === 0) {
          console.log('Buzz');
        } else {
          console.log(i);
        }
      }
}


console.log(fizzBuzz())
// Call Function
const output = reverseString('hello');

console.log(output);
