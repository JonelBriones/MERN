//Found from youtube video
function quickSort(array, left, right) {
    // declaring indexes to start from the start and end of array
    left = left || 0;
    right = right || array.length - 1;
    // initiates partition
    const pivot = partition(array,left,right);

    
    if(left < pivot - 1) {
        quickSort(array,left, pivot - 1)
    }
    if(right > pivot) {
        quickSort(array,pivot,right)
    }
    return array;
}
function partition(array,left,right) {
    const pivot = Math.floor((left + right) / 2)

    while (left <= right) {
        while(array[left] < array[pivot]) {
            left++;
        }
        while(array[right] > array[pivot]) {
            right--;
        }
        if(left <= right) {
            [array[left],array[right]] = [array[right],array[left]]
            left ++;
            right --;
        }
    }
    return left;
}
(function test() {
    var array = [5,8,2,7,4,1]
    let array1 = [1, 4, 20, 7, 6, 3, 12, 2, 9, 15, 8, 10, 30 ] // 13 or 12 index
    console.log(quickSort(array))
    console.log(quickSort(array1))
})()