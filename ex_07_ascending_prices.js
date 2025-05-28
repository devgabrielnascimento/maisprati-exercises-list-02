const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
  { name: "Product D", price: 10 },
];
console.log(products);
products.sort((a, b) => a.price - b.price);
const ShowProdNamesByAscPrices = products.map((product) => product.name);
console.log(ShowProdNamesByAscPrices);
