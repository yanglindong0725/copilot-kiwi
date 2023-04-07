/** 
 * 快速排序 
 * @param arr 待排序数组
 * @returns 排序后的数组
 *  */
const quickSort = (arr: number[]) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 使用mocha测试 quickSort 函数
// describe('quickSort', () => {
//     it('should return sorted array', () => {
//         const arr = [3, 2, 1, 4, 5, 6];
//         const sortedArr = quickSort(arr);
//         // console.log(sortedArr);
//         assert.deepEqual(sortedArr, [1, 2, 3, 4, 5, 6]);
//     });
// });
