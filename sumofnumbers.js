const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop,
// recursion, and underscore. Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
function sumFor(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}

function sumWhile(numbers) {
  let totalSum = 0;
  let iterator = 0;
  while (iterator < numbers.length) {
    totalSum += numbers[iterator];
    iterator++;
  }
  return totalSum;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers.pop() + sumRecursion(numbers);
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (memo, val) => memo + val);
}

console.log(sumFor(digits));
console.log(sumWhile(digits));
console.log(sumRecursion(digits));
console.log(sumTheSimpleWay(digits));
