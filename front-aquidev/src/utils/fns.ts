export const price = () => {
  const minPrice = 25;
  const maxPrice = 80;
  const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
  return randomPrice.toFixed(2).replace(".", ",");
};
