export const formatPrice = (amount: number) => {
  const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return `${formattedAmount} ₽`;
};
