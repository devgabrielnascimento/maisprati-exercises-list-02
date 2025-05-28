const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
  { name: "Product D", price: 10 },
];

function showProdNameByAscPrices(products) {
  const orderedArray = [...products].sort((a, b) => a.price - b.price);

  return orderedArray.map((product) => product.name);
}

console.log(showProdNameByAscPrices(products));
