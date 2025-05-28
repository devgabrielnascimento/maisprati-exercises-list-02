const pairs = [
  ["a", 1],
  ["b", 2],
];

function pairsToObject(pairs) {
  const obj = {};
  pairs.forEach((item) => {
    obj[item[0]] = item[1];
  });
  return obj;
}
console.log(pairsToObject(pairs));

let obj = {
  a: 1,
  b: 2,
};

function objectToPairs(obj) {
  const array = [];
  for (const key in obj) {
    array.push([key, obj[key]]);
  }
  return array;
}
console.log(objectToPairs(obj));
