function solution(numbers) {
    let result = []
for(let i=0; i<numbers.length; i++){
   if(numbers[i + 1] && numbers[i+2] ){
         if( (numbers[i] < numbers[i +1] && numbers[i +1] > numbers[i + 2]) || (numbers[i] > numbers[i +1] && numbers[i +1] < numbers[i + 2])){
      result.push(1)
   }else{result.push(0)}
   
   }
   
 
   }
   return (result)
}

console.log(solution([1, 2, 1, 3, 4]))