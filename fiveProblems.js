// Problem 1 -- Sum

function forLoopSum(nums) {
  var sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

function whileLoopSum(nums) {
  var sum = 0;
  var i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}

function recursionSum(nums) {
  return (nums.length === 0) ? 0 : nums[0] + recursionSum(nums.slice(1));
}

console.log(forLoopSum([1, 2, 3, 4]));
console.log(whileLoopSum([1, 2, 3, 4]));
console.log(recursionSum([1, 2, 3, 4]));

// Problem 2 -- Combine lists

function combineTwo(a, b) {
  var result = [];
  var i = 0;
  var j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i]);
    result.push(b[j]);
    i++;
    j++;
  }
  // add remainder
  while (i < a.length) {
    result.push(a[i]);
    i++;
  }
  while (j < b.length) {
    result.push(b[j]);
    j++;
  }
  return result;
}

console.log(combineTwo(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6]));

function fib(n, memo) {
  memo = [0, 1];
  if (n <= 1) {
    return memo[n];
  } else if (memo.indexOf(n)) {
    memo[n] = fib(n - 1) + fib(n - 2);
  }
  return memo[n]
}

console.log(fib(7, []));

function largestNumber(array) {
  return {
    max: array
      .sort((a, b) => {
        return ((a + b) - (b + a)) * -1;
      })
      .join('')
  }
}

console.log(largestNumber(["79", "82", "34", "83", "69"]));
