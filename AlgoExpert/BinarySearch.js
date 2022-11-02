function binarySearch(array, target) {
    return binaryhelperMethod(array, target, 0, array.length - 1);
    }
    function binaryhelperMethod(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
    return middle;
    } else if (target < potentialMatch) {
    return binaryhelperMethod(array, target, left, middle - 1);
    } else {
    return binaryhelperMethod(array, target, middle + 1, right);
    }
    }

    console.log(binarySearch([1,2,3,4,6,7,55,60], 7))


    function binarySearchB(array, target) {
        return binarySearchHelper(array, target, 0, array.length - 1);
        }
        function binarySearchHelper(array, target, left, right) {
        while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const potentialMatch = array[middle];
        if (target === potentialMatch) {
        return middle;
        } else if (target < potentialMatch) {
        right = middle - 1;
        } else {
        left = middle + 1;
        }
        }
        return -1;
        }