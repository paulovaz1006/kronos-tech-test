function validateIdentifierFormat(identifier) {
  const removeSpecialChar = identifier.replace(/[^a-zA-Z0-9 ]/g, "");
  const isCpf = removeSpecialChar.length === 11 && 'cpf';
  const isCnpj = removeSpecialChar.length === 14 && 'cnpj';

  return (!isCpf && !isCnpj) ? 'invalid identification' :
    isCpf || isCnpj
}

function calculateAveragePaymentAmount(vlTotal, qtPrestacoes) {
  return Number(vlTotal) / Number(qtPrestacoes);
}

export {
  validateIdentifierFormat,
  calculateAveragePaymentAmount
}