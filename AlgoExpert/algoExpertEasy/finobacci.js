// O(2^n) time | O(n) space
 [0, 1 ,1 , 2 , 3, 5, 8, 13, 21, 34]
function getNthFib1(n) {
    if (n === 2) {
    return 1;
    } else if (n === 1) {
    return 0;
    } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
    }
    }



    /////SOLUTION 2
    // O(n) time | O(n) space
function getNthFib2(n, memoize = {1: 0, 2: 1}) {
    if (n in memoize) {
    return memoize[n];
    } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
    return memoize[n];
    }
    }



    //////LAST Solution

    // O(n) time | O(1) space
function getNthFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;
    while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
    }