// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers


function plusMinus(arr) {
    // Write your code here
  const len = arr.length
    let pos = 0, neg = 0, zero = 0

    arr.forEach(element => {
        if(element > 0) {
            pos++
        } else if (element < 0) {
            neg++
        } else {
            zero++
        }
    })
    
    console.log(`${(pos / len).toFixed(6)}\n${(neg / len).toFixed(6)}\n${(zero / len).toFixed(6)}`)
}
