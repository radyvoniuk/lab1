/* eslint-disable no-unused-vars */
const countElements = () => {
  const count = {};
  return (tagName) => {
    count[tagName] = count[tagName]
      ? (count[tagName] += 1)
      : (count[tagName] = 1);
    return count;
  };
};
const second = () => {
  console.log('It is a record too');
};
const first = () => {
  console.log('It is a record');
  second();
  console.log('It is the end of the record');
};
first();
