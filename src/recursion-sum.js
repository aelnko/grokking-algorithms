const recursionSum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let sum = arr[arr.length - 1];
    arr.pop();
    return sum + recursionSum(arr);
  }
}

console.log(recursionSum([1, 2, 3, 10, 20]));
// => 36