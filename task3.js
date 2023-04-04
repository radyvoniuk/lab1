function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
const myArray = [3, 6, 1, 8, 2, 10, 5, 4, 9, 7];
const sortedArray = insertionSort(myArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
