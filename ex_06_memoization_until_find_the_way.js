function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

function untilFindTheWay(i, j, n, m) {
  if (i === n && j === m) {
    return 1;
  } else if (i > n || j > m) {
    return 0;
  } else {
    return untilFindTheWay(i + 1, j, n, m) + untilFindTheWay(i, j + 1, n, m);
  }
}

const memoizedUntilFindTheWay = memoize(function untilFindTheWay(i, j, n, m) {
  if (i === n && j === m) {
    return 1;
  } else if (i > n || j > m) {
    return 0;
  } else {
    return (
      memoizedUntilFindTheWay(i + 1, j, n, m) +
      memoizedUntilFindTheWay(i, j + 1, n, m)
    );
  }
});
console.log(
  "The possible ways are (memoized): ",
  memoizedUntilFindTheWay(15, 15, 30, 30)
);
console.log(
  "The possible ways are (not memoized): ",
  untilFindTheWay(15, 15, 30, 30)
);
