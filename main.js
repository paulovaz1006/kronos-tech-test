import csv from 'csv-parser';
import * as fs from 'fs';
import { formatCurrencyToBrazilianReal, convertDateFormatToDate } from './utils/formatInfos.js';
import { validateIdentifierFormat } from './utils/validInfos.js';

const results = [];

const formatDataCSV = (data) => {
    const {
      vlTotal,
      vlPresta,
      vlMora,
      vlMulta,
      vlOutAcr,
      vlIof,
      vlDescon,
      vlAtual,          
      dtContrato,
      dtVctPre,
      qtPrestacoes,
      nrCpfCnpj
    } = data

    return {
      ...data,
      vlTotal: formatCurrencyToBrazilianReal(vlTotal),
      vlPresta: formatCurrencyToBrazilianReal(vlPresta),
      vlMora: formatCurrencyToBrazilianReal(vlMora),
      vlMulta: formatCurrencyToBrazilianReal(vlMulta),
      vlOutAcr: formatCurrencyToBrazilianReal(vlOutAcr),
      vlIof: formatCurrencyToBrazilianReal(vlIof),
      vlDescon: formatCurrencyToBrazilianReal(vlDescon),
      vlAtual: formatCurrencyToBrazilianReal(vlAtual),    
      isCpfOrCnpj:validateIdentifierFormat(nrCpfCnpj),
      vlTotalEqualVlPresta: validateIdentifierFormat(vlTotal, qtPrestacoes) === vlPresta,
      dtContrato: convertDateFormatToDate(dtContrato),
      dtVctPre: convertDateFormatToDate(dtVctPre),
    }
}

fs.createReadStream('data.csv')
  .pipe(csv({}))
  .on('data', (data) => results.push(formatDataCSV(data)))
  .on('end', () => console.log(results))
