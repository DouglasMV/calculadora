export const limparTela = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  operacaoAtual.value = ''
  const expressaoInvalida = document.querySelector('.expressaoInvalida')
  expressaoInvalida.classList.remove('displayBlock')
  expressaoInvalida.classList.add('displayNone')
  document.querySelector('.operacaoAtual').focus()
}
