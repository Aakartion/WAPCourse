// Question 1
console.log("************Question 1***********");
let arr = [12, 20, 22, 44, 50, 23, 18, 19];
let total = 0;
function sum(arr) {
  for (i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

console.log(sum(arr));

// We can use reduce method too

let arr1 = [33, 42, 42, 12, 32, 56, 77, 12, 85, 19];
let result = arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(result);

console.log("************Question 2***********");
// Question 2
const arrays = ["tiger", "cat", "elephant", "leopard"];

function getNewArray(arrays) {
  return arrays.filter((str) => str.length > 5 && str.includes("a"));
}

console.log(getNewArray(arrays));

console.log("************Question 3***********");

const concat = (str, ...arrays) => {
  const result = [...str];
  arrays.forEach((array) => {
    result.push(...array);
  });
  return result;
};

const res = concat("hi", [1, 2, 3], ["Hello", "world"]);
console.log(res);