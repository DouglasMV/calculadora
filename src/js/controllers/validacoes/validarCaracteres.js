import { caracteresValidos } from './caracteresValidos.js'

export const validarCaracteres = operacao => {
  const operacaoArray = operacao.split('')
  for (let i = 0; i < operacaoArray.length; i++) {
    if (!caracteresValidos.includes(operacaoArray[i])) {
      console.log('invalido')
      return false
    }
  }
  return true
}
