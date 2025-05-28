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

function findAllPaths(i, j, n, m) {
  if (i === n && j === m) {
    return 1;
  } else if (i > n || j > m) {
    return 0;
  } else {
    return findAllPaths(i + 1, j, n, m) + findAllPaths(i, j + 1, n, m);
  }
}

const memoizedFindAllPaths = memoize(function findAllPaths(i, j, n, m) {
  if (i === n && j === m) {
    return 1;
  } else if (i > n || j > m) {
    return 0;
  } else {
    return (
      memoizedFindAllPaths(i + 1, j, n, m) +
      memoizedFindAllPaths(i, j + 1, n, m)
    );
  }
});
console.log(
  "The possible ways are (memoized): ",
  memoizedFindAllPaths(15, 15, 30, 30)
);
console.log(
  "The possible ways are (not memoized): ",
  findAllPaths(15, 15, 30, 30)
);
