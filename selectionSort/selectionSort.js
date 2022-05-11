function selectionSort(arr) {
    var i, j, min_idx;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        // Swap the found minimum element with the first element
        var temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}
function printArray(arr, size) {
    var i;
    for (i = 0; i < size; i++)
        console.log(arr[i] + " ");
    console.log("");
}
var arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:");
printArray(arr, arr.length);
