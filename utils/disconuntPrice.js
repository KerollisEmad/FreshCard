export function calcDisconuntPrice(price,priceAfterDiscount) {
  return ((price - priceAfterDiscount) / price) * 100;
}
