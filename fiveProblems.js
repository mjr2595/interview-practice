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

// Fib
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

// Fisher-Yates shuffle algo
function shuffle(array) {
  var n = array.length;
  while (n) {
    randomIndex = Math.floor(Math.random() * n--);
    swap(n, randomIndex, array);
  }
  return array;
}

function swap(oldIndex, newIndex, array) {
  var temp = array[oldIndex];
  array[oldIndex] = array[newIndex];
  array[newIndex] = temp;
}

console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));
console.log(shuffle([1, 2, 3, 4, 5]));


// Max sub array
function maxSubArraySum(array) {
  var size = array.length;
  var maxSoFar = Number.MIN_SAFE_INTEGER;
  var maxEndingHere = 0;

  for (let i = 0; i < size; i++) {
    maxEndingHere = maxEndingHere + array[i];
    if (maxEndingHere < 0)
      maxEndingHere = 0;
    else if (maxSoFar < maxEndingHere)
      maxSoFar = maxEndingHere;
  }
  return maxSoFar;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));


// find missing letter from substring of alphabet
function fearNotLetter(str) {
  var n = str.charCodeAt(0);
  var m = str.charCodeAt(str.length-1);
  var idealSum = getSumFromRange(n, m);
  var actualSum = getActualSum(str);
  return idealSum === actualSum ? undefined : String.fromCharCode(idealSum - actualSum);
}

function getActualSum(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

function getSumFromRange(n, m) {
    var sum = 0;
    for (var i = n; i <= m; i++) {
      sum += i;
    }
    return sum;
}

console.log(fearNotLetter("abce"));


// Make a queue with 2 stacks
function QueueTwoStacks() {
  this.inStack = [];
  this.outStack = [];
}

QueueTwoStacks.prototype.enqueue = function(item) {
  this.inStack.push(item);
}

QueueTwoStacks.prototype.dequeue = function() {
  if (this.outStack.length === 0) {
    // move everything over to outStack
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
    // If outStack is still empty, raise an error
    if (this.outStack.length === 0) {
      return undefined;
    }
  }
  // else just pop off top item from outStack
  this.outStack.pop();
}

var s = new QueueTwoStacks();
s.enqueue(1);
s.enqueue(2);
s.enqueue(3);
s.enqueue(4);
s.dequeue();
console.log(s);


// Check if parans or tokens are balanced
const isBalancedParens = str => {
  let stack = [];
  let open = { '{': '}', '[': ']', '(': ')' };
  let closed = { '}': true, ']': true, ')': true };

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (open[currChar]) {
      stack.push(currChar);
    } else if (closed[currChar]) {
      // only valid if top is the coresponding open paren
      if (open[stack.pop()] !== currChar) {
        return false;
      }
    }
  }
  // reached the end, only valid if no more open parens
  return stack.length === 0;
}
console.log(isBalancedParens('()'));
console.log(isBalancedParens('([])'));
console.log(isBalancedParens('([)]'));

// Check if a number is prime
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(45));
/* ** NOTE **
you can also decrease complexity of algorithm
from O(n) to O(sqrt(n)) if you run the loop until
square root of number
i <= Math.sqrt(num)
*/ 

