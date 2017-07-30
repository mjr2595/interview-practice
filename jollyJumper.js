

function isJollyJumper(numbers) {
  const set = [];
  const n = numbers.length;

  for (let i = 1; i <= n - 1; i++) {
    set.push(i);
  }

  for (let i = 0; i < n - 1; i ++) {
    const a = numbers[i];
    const b = numbers[i + 1];
    const diff = Math.abs(a - b);
    if (set.indexOf(diff) !== -1) {
      set.splice(set.indexOf(diff), 1);
    }
  }
  
  return set.length === 0;
}

console.log(isJollyJumper([1, 4, 2, 3]));