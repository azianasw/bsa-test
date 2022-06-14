function sumDiagonal(arr) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
    b += arr[i][arr.length - 1 - i];
  }

  return a + b;
}

console.log(
  sumDiagonal([
    [11, 2, 4, 1],
    [4, 5, 6, 1],
    [10, 8, 12, 1],
    [10, 8, 12, 1],
  ])
);

let a = 11 + 5 + 12 + 1;
let b = 1 + 6 + 8 + 10;
console.log(a + b);
