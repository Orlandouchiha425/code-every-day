// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// function addAll() {
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for (let i = 0; i < args.length; i++) {
//          total += args[i];
        
//     }
//     return total

// }
// function addAll(...numbers) {
//     let total = 0;
//     numbers.forEach((num) => {
//         total += num
//     });
//     return total
// }

function addAll(...numbers) {
    return numbers.reduce((acc,cur)=>{
        return acc + cur
    },0)
    
}
console.log(addAll(2,5,6,7,5))

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
    let total = 0
    function checkForPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i %j===0 ) {
                return false
            }
        }
        return true
    }
    for (let i = 2; i <= num; i++) {
        if(checkForPrime(i)){
            total +=i

        }
       
    }
    return total
}

console.log(sumAllPrimes(10))

// // CHALLENGE 3: SEEK & DESTROY
// // Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// // ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(array) {
    const args = Array.from(arguments)
    function filterArr(arr){
        // return tru if not in the arra
        return args.indexOf(arr) === -1
    }
    return array.filter(filterArr)
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))


function seekAndDestroySoluton2(arr, ...rest) {
    return arr.filter(val  => !rest.includes(val))
    
}
console.log(seekAndDestroySoluton2([2, 3, 4, 6, 6, 'hello'], 2, 6))


// // CHALLENGE 4: SORT BY HEIGHT
// // Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// // ex.
// // a = [-1, 150, 190, 170, -1, -1, 160, 180]
// // sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(height) {
const arr1 = []
const arr2 = []

height.forEach((val, i) =>{
    if (val == -1) {
        arr1.push(i)
    } else {
        arr2.push(val)
    }
})
const sortArr = arr2.sort((a, b) => a -b)
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))
    return sortArr
}
console.log(sortByHeight([-1, 150, 160, 170, -1, -1, 180, 190]))
// // CHALLENGE 5: MISSING LETTERS
// // Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// // ex.
// // missingLetters("abce") == "d"
// // missingLetters("abcdefghjklmno") == "i"
// // missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

// function missingLetters() {}

// // CHALLENGE 6: EVEN & ODD SUMS
// // Take in an array and return an array of the sums of even and odd numbers
// // ex.
// // evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

// function evenOddSums() {}
