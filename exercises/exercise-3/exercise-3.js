let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function orderSum(order) {
  let totalorder = [];
  for (let i = 0; i < order.length; i++) {
    let { quantity, unitPrice } = order[i];
    totalorder.push(`${quantity * unitPrice}`);
  }
  return totalorder.reduce((total, current) => Number(total) + Number(current));
}
console.log(orderSum(order));
