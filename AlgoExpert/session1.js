function twoNumberSum(array , targetSum) {
    nums = {}
for (const num of array) {
    if (targetSum -num in nums){
        return [targetSum -num, num]
    }else{
        nums[num ]= true
    }
}
return []
}

console.log(twoNumberSum[3, 5, -4, 8, 11, 1, -1,6])

// hash Table
// target sum = 10
// current Number =X       X+Y=10
//We already have X on the array  --- we are looking for the pair aka y
// Y= 10 -3= 7   seven is not on the array , so add to the hash table as tru

///| 3: True, -4: True 11:True
///| 5: True,  8:True, 1: True   -1 false so return [11, -1]
///|

// Option 2
//Sort the array
// [-4, -1, 1, 3, 5, 6, 8, 11]
//Left                   Right Pointer
// -4 +11 = 7  comapre to 10
//