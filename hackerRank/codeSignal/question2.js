function solution(numbers, left, right) {
    let total = []
    let boolean = false;
    
    for(let i=0; i<numbers.length;i++){
       
        let x = numbers[i]/(i +1) 
        if(x%1 ==0){
            if( x>= left && x<= right){
            total.push(true)
            }else{total.push(false)}
        }else{ total.push(false)}
        }
       
        return total
    }
    