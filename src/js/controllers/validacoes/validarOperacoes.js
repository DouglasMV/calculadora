export const validarOperacoes = operacao => {
  const operacaoArray = operacao.split('')
  for (let i = 1; i < operacaoArray.length; i++) {
    if (
      ['÷', '×', ')', '²', '√', '.', '%', '+'].includes(operacaoArray[i]) &&
      ['÷', '×', '(', ')', '-', '²', '√', '.', '%', '+'].includes(
        operacaoArray[i - 1]
      )
    ) {
      return false
    }
  }
  return true
}
