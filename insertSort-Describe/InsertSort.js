"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertSort = void 0;
var InsertSort = /** @class */ (function () {
    function InsertSort() {
    }
    InsertSort.sort = function (arr) {
        for (var i = 1; i < arr.length; i++) {
            var key = arr[i];
            var j = i - 1;
            /* Move elements of arr[0..i-1], that are
            greater than key, to one position ahead
            of their current position */
            while (j >= 0 && arr[j] > key) {
                console.log("gan ".concat(arr[j + 1], " = ").concat(arr[j]));
                arr[j + 1] = arr[j];
                console.log("j = ".concat(j - 1));
                j = j - 1;
            }
            console.log("gan ".concat(arr[j + 1], " = key = ").concat(key));
            arr[j + 1] = key;
            console.log("list sau lan: " + i);
            for (var k = 0; k < arr.length; k++) {
                console.log(+arr[k]);
            }
        }
    };
    InsertSort.arr = [2, 1, 4, 3, 5, 0, -1];
    return InsertSort;
}());
exports.InsertSort = InsertSort;
