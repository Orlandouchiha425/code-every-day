// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {

  // SOLUTION 1 - Return a single longest word
  //create filetered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
 

  //sort by length
  const sorted  = wordArr.sort(function(a , b){
    return b.length - a.length
  })
// return sorted[0]
//if multiple words, put into array
const longestWordArr = sorted.filter(function(word){
  return word.length === sorted[0].length;
})
//check if more than one array value
if (longestWordArr.length === 1) {
  ////return the word
  return longestWordArr[0]
}else{
  return longestWordArr
}
// SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
//initialize array 
const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}
function flattenArray(arrays) {
  ///SOLUTION 1
// return arrays.reduce(function(a,b){
//   return a.concat(b)
// })


////SOLUTION 2
// return [].concat(arrays)


////SOLUTION 3

}
console.log(flattenArray([1, 2], [3, 4], [5, 6], [7]))

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
return formatStR(str1) === formatStR(str2)

}

//helper function
function formatStR(str){
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}
console.log(isAnagram('elbow', 'belows'))

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = longestWord('Hello,there my name is Brad');

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))
console.log(output);