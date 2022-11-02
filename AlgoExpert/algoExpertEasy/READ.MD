    Question 1  

[3, 5, -4, 8, 11, 1, -1, 6],10
Question 1: need to go through and array and find pair that when added will equal the targetSum ex: in the array [11,-1]= targetSum = 10
target Sum =10
current Num = X           or X + Y =10  
 if we isolate, it will be equal to y = 10 -x to find y, so our first number in the equation x is equal to what number we at in iteration.... 

so if we loop and iterate y = 10 - x or y= 10-3 =7 , we add 3 to our object we can assign any value we want, in our case we used true
y = 10-5 = 5: another 5 is not in the array so we add the assign value true
y = 10 - -4 = 14 14 is not in the in array above, so we assign a boleen true
y = 10 -8 = 2
y = 10 - 11 = -1
so we return 11 and -1
{3:true, 5:true, -4:true, 8:true, 11: true and since -1 is in the array, we return 11,-1}


///Solution 2 Question 1
we can sort first small to big
[-4, -1, 1, 3, 5, 6, 8, 11]
L                        R
 -4+ 11 = 7 compare to 10 =is not a valid sum


[-4, -1, 1, 3, 5, 6, 8, 11]
      L                 R
-1 +11 =10 

example 2)
[-4, -1, 1, 3, 5, 6, 8, 11],13
    L                    R
       10

[-4, -1, 1, 3, 5, 6, 8, 11]
         L               R
          1 +11 =12 

[-4, -1, 1, 3, 5, 6, 8, 11]
            L           R
        3+11 = 14
is now more than 13, so lets move the R pointer to 8
[-4, -1, 1, 3, 5, 6, 8, 11]
            L        R
3+8 =11
[-4, -1, 1, 3, 5, 6, 8, 11]
               L     R
5 +8 = 13 = return [5,8]






~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~QUESTION 2 Validate Subsequence
Array1 = [5. 1. 22, 25, 6, -1, 8, 10]
       Array2 = [1, 6, -1, 10]
Need to make sure if the second array, aka subsequence is within the first array, it needs to be in the same order, since it needs to be in the same order , we first need to make sure the 1 in array2 


~~~~~~~~~~~~~QUESTION 3 Sorted Squared Array

return a new output with the given array from small to big  and it needs to be squared. take into consideration if is negatives it will be squared 