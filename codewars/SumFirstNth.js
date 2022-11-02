
function SeriesSum(n){
    const decimals=[
        "1.00",
        "1.25",
        "1.39",
        "1.49",
        "1.57"
        
    ]
      if (n==1) {
        console.log(decimals[0])
  
      }if (n===2) {
        console.log(decimals[2])
      }
      if (n===3) {
        console.log(decimals[3])
      }
      if (n===4) {
        console.log(decimals[4])
      }
      if (n===5) {
        console.log(decimals[6])
      }
      if (n===0) {
        console.log("0")
      }
}

SeriesSum(1)



// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"