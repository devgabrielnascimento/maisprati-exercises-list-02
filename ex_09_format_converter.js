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

let obj2 = {
  a: 1,
  b: 2,
};

function objectToPairs(obj2) {
  const array2 = [];
  for (const key in obj2) {
    array2.push([key, obj2[key]]);
  }
  return array2;
}
console.log(objectToPairs(obj2));
