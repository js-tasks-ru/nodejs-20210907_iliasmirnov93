function sum(a, b) {
  /* ваш код */
  if ([a, b].some((value) => typeof value !== 'number')) {
    throw new TypeError();
  }

  return a + b;
}


module.exports = sum;
