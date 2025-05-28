let sales = [
  { customer: "Alice", total: 100 },
  { customer: "Bob", total: 200 },
  { customer: "Alice", total: 150 },
  { customer: "Charlie", total: 300 },
  { customer: "Bob", total: 250 },
  { customer: "Bob", total: 97.5 },
];

let salesByClient = {};

salesByClient = sales.reduce((acc, sale) => {
  acc[sale.customer] = (acc[sale.customer] || 0) + sale.total;

  return acc;
}, {});

console.log(salesByClient);
