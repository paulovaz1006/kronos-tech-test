import { formatCurrencyToBrazilianReal, convertDateFormatToDate } from "./utils/formatInfos"
import { validateIdentifierFormat, calculateAveragePaymentAmount } from "./utils/validInfos"

describe('Functions validations', () => {
  describe('validations', () => {
    test('validateIdentifierFormat', () => {
      const mockInfos = {
        cnpj: '12.345.678/0001-00',
        cpf:'123.456.789-01',
        invalid: '123',
        invalidType: '12312.testeinfo'
      }

      expect(validateIdentifierFormat(mockInfos.cnpj)).toBe('cnpj')
      expect(validateIdentifierFormat(mockInfos.cpf)).toBe('cpf')
      expect(validateIdentifierFormat(mockInfos.invalid)).toBe('invalid identification');
    })

    test('calculateAveragePaymentAmount', () => {
      const mockInfos = {
        vlTotal: '200',
        qtPrestacoes:'2',
      }

      expect(calculateAveragePaymentAmount(mockInfos.vlTotal, mockInfos.qtPrestacoes)).toEqual(100)  
    })
  })

  describe('formatted', () => {
    test('formatDateToBrl', () => {
      const converToDate = convertDateFormatToDate('20231009')
      expect(typeof converToDate).toBe('object');
      expect(converToDate.getFullYear()).toBe(2023)      
      expect(converToDate.getMonth()).toBe(10)     
      expect(converToDate.getDate()).toBe(9)     
    })
    
    test('formatCurrencyToBrazilianReal', () => {
      expect(formatCurrencyToBrazilianReal('8000')).toBe('R$ 8.000,00')
    })
  })
})