export const deletar = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  const texto = operacaoAtual.value
  operacaoAtual.value = texto.substr(0, texto.length - 1)
}
