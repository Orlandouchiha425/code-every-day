function findOdd(A) {
    //happy coding!
     let index={}
for (let nums of A) {
   
    if (index[nums]) {
 index[nums]++
    //  index = A[nums]
       }else{
        index[nums]=1
       }
       
}
for(let number in index) {
    if(index[number] % 2 ==1 && index[number] ==1){
 return number
    }else{
        console.log('there are no odd numbers')
    }
}
return index

  }

  console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
  console.log(findOdd([1,1,2]))

// odd is 1 and 3
//4 is even
//   Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

