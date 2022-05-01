const findSmallest = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

const selectionSort = (array) => {
  const length = array.length;
  const sortedArr = [];
  for (let i = 0; i < length; i += 1) {
    let smallestIndex = findSmallest(array);
    sortedArr.push(array[smallestIndex]);
    array.splice(smallestIndex, 1);
  }
  return sortedArr;
}

console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
// => [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
