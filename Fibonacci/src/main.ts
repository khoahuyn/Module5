// Bước 1: Khai báo hàm đệ quy để tính số Fibonacci
function fibonacciRecursive(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}

// Bước 2: Sử dụng vòng lặp để hiển thị các số Fibonacci
function displayFibonacciSeries(limit: number): void {
    for (let i = 0; i < limit; i++) {
        console.log(fibonacciRecursive(i));
    }
}

// Bước 3: Khai báo biến sum = 0
let sum: number = 0;

// Bước 4: Thực hiện việc tính tổng các số Fibonacci
function calculateFibonacciSum(limit: number): number {
    for (let i = 0; i < limit; i++) {
        sum += fibonacciRecursive(i);
    }
    return sum;
}

// Ví dụ sử dụng:
const limit: number = 10;

console.log("Fibonacci Series:");
displayFibonacciSeries(limit);

sum = 0; // Đặt sum về 0 trước khi tính tổng mới
const fibonacciSum: number = calculateFibonacciSum(limit);
console.log("Sum of Fibonacci Series:", fibonacciSum);
