function findMostFrequent(arr) {
  const count = {};
  let maxCount = 0;
  let maxItem = null;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
    if (count[item] > maxCount) {
      maxCount = count[item];
      maxItem = item;
    }
  }
  return maxItem;
}
const myArray = [3, 6, 1, 8, 2, 10, 5, 5, 6, 6];
const a = findMostFrequent(myArray);
console.log(a);
