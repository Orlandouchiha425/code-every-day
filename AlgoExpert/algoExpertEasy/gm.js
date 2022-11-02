
// ///SOLUTION 1
function twoNumberSumA(array, targetSum) {
    const nums = {};
    for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
    return [potentialMatch, num];
    } else {
    nums[num] = true;
    }
    }
    return [];
    }




// console.log(twoNumberSumA([3, 5, -4, 8, 11, 1, -1, 6], 10))

// // y =10 -x
// //////////Solution 2


// function twoNumberSumB(array, targetSum) {
//     for (let i = 0; i < array.length - 1; i++) {
//     const firstNum = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//     const secondNum = array[j];
//     if (firstNum + secondNum === targetSum) {
//     return [firstNum, secondNum];
//     }
//     }
//     }
//     return [];
// }


// //SOLUTION 3
// function twoNumberSumC(array, targetSum) {
//     array.sort((a, b) => a - b);
//     let left = 0;
//     let right = array.length - 1;
//     while (left < right) {
//     const currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//     return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//     left++;
//     } else if (currentSum > targetSum) {
//     right--;
//     }
//     }
//     return [];
//     }   

function kzdenFunction(x) {
    let number = x *2
    if (number<2) {
        console.log("try again")
    } else {
     console.log('good job ' + number)   
    }
    
}
 

console.log(kzdenFunction(0))
console.log(kzdenFunction(3))
