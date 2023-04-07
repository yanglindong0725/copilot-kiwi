// 二分查询算法 - 递归
function binarySearch(arr, target, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end);
    }
}

// 二分查询算法 - 非递归
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

// test
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(arr, 5, 0, arr.length - 1)); // 4
console.log(binarySearch(arr, 5)); // 4

// 比较两个算法的执行效率
let arrNew = [];
for (let i = 0; i < 10000000; i++) {
    arrNew.push(i);
}

console.time('binarySearch');
binarySearch(arrNew, 9999999);
console.timeEnd('binarySearch'); 

console.time('binarySearch');
binarySearch(arrNew, 9999999, 0, arrNew.length - 1);
console.timeEnd('binarySearch');






