// CalculatePercent.js
export const calculateSalePercentage = (salePrice, regularPrice) => {
    const sale = parseFloat(salePrice.replace('$', ''));
    const regular = parseFloat(regularPrice.replace('$', ''));
    const discountPercentage = ((regular - sale) / regular) * 100;
    return discountPercentage.toFixed(2) + '%'; // Returns the percentage as a string with 2 decimal places
  };