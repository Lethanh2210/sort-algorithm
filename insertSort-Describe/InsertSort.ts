export class InsertSort {
    static arr: number[] = [2,1,4,3,5,0,-1];

    static sort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            /* Move elements of arr[0..i-1], that are
            greater than key, to one position ahead
            of their current position */
            while (j >= 0 && arr[j] > key) {
                console.log(`gan ${arr[j+1]} = ${arr[j]}`)
                arr[j + 1] = arr[j];
                console.log(`j = ${j-1}`)
                j = j - 1;
            }
            console.log(`gan ${arr[j+1]} = key = ${key}`)
            arr[j + 1] = key;
            console.log("list sau lan: " + i);
            for (let k = 0; k < arr.length; k++) {
                console.log( + arr[k]);
            }
        }

    }
}


