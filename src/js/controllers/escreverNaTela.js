export const escreverNaTela = valor => {
  const operacaoAtual = document.querySelector('.operacaoAtual')

  if (operacaoAtual.getAttribute('data-resultado') === 'true') {
    if (!['+', '-', '×', '÷', '²', '%'].includes(valor)) {
      operacaoAtual.value = ''
    }
    operacaoAtual.setAttribute('data-resultado', 'false')
  }
  document.querySelector('.operacaoAtual').focus()
  operacaoAtual.value += valor
}
