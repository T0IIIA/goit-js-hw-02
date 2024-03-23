function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log( getShippingMessage ("Australia", 120, 50) );
console.log( getShippingMessage ("Germany", 80, 20) );
console.log( getShippingMessage ("Sweden", 100, 20) );
console.log( getShippingMessage ("Ukraine", 699.5, 77.5) );