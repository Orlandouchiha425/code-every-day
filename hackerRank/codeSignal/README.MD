Question 1)
Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.
Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
Example
* For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].
    * (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
    * (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
    * (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
* For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];Since all the elements of numbers are increasing, there are no zigzags.
* For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].Since all the elements of numbers are the same, there are no zigzags.
Input/Output
* [execution time limit] 4 seconds (js)
* [input] array.integer numbersAn array of integers.Guaranteed constraints:3 ≤ numbers.length ≤ 100,1 ≤ numbers[i] ≤ 109.
* [output] array.integerReturn an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.
[JavaScript] Syntax Tips




Question 2)
You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.
Example
For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].
* For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
* For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
* For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
* For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
* For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.
Input/Output
* [execution time limit] 4 seconds (js)
* [input] array.integer numbersAn array of integers.Guaranteed constraints:1 ≤ numbers.length ≤ 100,1 ≤ numbers[i] ≤ 106.
* [input] integer leftAn integer representing the lower bound for x.Guaranteed constraints:1 ≤ left ≤ 104.
* [input] integer rightAn integer representing the upper bound for x.Guaranteed constraints:1 ≤ left ≤ right ≤ 104.
* [output] array.booleanA boolean array result described above.
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
