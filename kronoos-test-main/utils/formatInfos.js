function convertDateFormatToDate(date) {
  const [year, month, day] = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)];
  return new Date(year, month, day);
}

function formatCurrencyToBrazilianReal(currencyAmount) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currencyAmount)
}; 

export  {
  convertDateFormatToDate,
  formatCurrencyToBrazilianReal
}