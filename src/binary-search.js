const binarySearch = (array, item) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (item === guess) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    }
    if (guess < item) {
      low = mid + 1;
    }
  }
  return null
}
