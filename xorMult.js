function xorMultiply(a, b) {
  var results = 0;
  while (b != 0) {
    console.log(b.toString(2));
    console.log(a.toString(2));
    results ^= a * (b & 1);
    console.log(results.toString(2));
    a <<= 1;
    b >>= 1;
  }
  return results;
}

console.log(xorMultiply(14, 13));