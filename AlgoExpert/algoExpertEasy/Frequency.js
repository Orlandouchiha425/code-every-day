
const sameFrequency = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
      return false
    }
    const counter1 = {}// frequency counter for arr1
    const counter2 = {} // frequency counter for arr2
    for(let num of arr1){
      console.log(arr1)
      if(counter1[num]){
        console.log('I am running because ', num, ' is already been added to the object', counter1)
        counter1[num]++
        console.log(`I just added ${num} to the object`, counter1)
      } else {
        console.log('I am running because ', num, ' hasn\'t already been added to the object', counter1)
        counter1[num] = 1
        console.log(`I just added ${num} to the object`, counter1)
      }
    }
    console.log(counter1)
  }


const sameFrequency2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
      return false
    }
    const counter1 = {}// frequency counter for arr1
    const counter2 = {} // frequency counter for arr2
    for(let num of arr1){
      if(counter1[num]){
        counter1[num]++
      } else {
        counter1[num] = 1
      }
    }
  
    for(let num of arr2){
      if(counter2[num]){
        counter2[num]++
      } else {
        counter2[num] = 1
      }
    }
  
    for(let key in counter1 ){
      console.log(`key is ${key} which is equal to ${counter1[key]} `,`the corresponding squared key is ${key ** 2} which is ${counter2[key ** 2]}`)
      if(counter1[key] !== counter2[key ** 2]){
        return false
      }
    }
    return true
  }
  


console.log(sameFrequency([1,2,3], [4,1,9])) // true)
console.log(sameFrequency([1,2,3], [1,9])) // false


// console.log(sameFrequency2([1,2,3], [4,1,9])) // true)
// console.log(sameFrequency2([1,2,3], [1,9])) // false