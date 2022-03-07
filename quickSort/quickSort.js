
function quickSort(array, left, right) {
    left = 0;
    right = array.length - 1;
    if (left >= right) {
        return;
    }
    let partionIndex = partition(array,left,right);
    if(left < partionIndex - 1) {
        quickSort(array,left, partionIndex -1);
    }
    if(right < partionIndex + 1) {
        quickSort(array,partionIndex + 1, right);
    }
}
function partition(array,left, right) {
    // choose pivot by choose the middle number of array
    let pivot = array[right];
    i = left - 1;
    for (j = 0; j < array.length; i++) {
        if (array[j] < pivot) {
            i += 1;
            swap(array, i, j);
        }
    swap(array, i + 1, right)
    }
    return i + 1;
}
function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;


}
(function test() {
    var array = [5,8,2,7,4,1]
    console.log(quickSort(array, 0, array.length - 1))
    // let array1 = [1, 4, 20, 7, 6, 3, 12, 2, 9, 15, 8, 10, 30 ] // 13 or 12 index
    // console.log(quickSort(array1))
})()
