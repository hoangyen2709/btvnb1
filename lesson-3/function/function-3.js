let array = [1, 2, 5, 15];
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let totalSum = calculateSum(array);
console.log(`Tổng của các phần tử trong mảng là: ${totalSum}`);