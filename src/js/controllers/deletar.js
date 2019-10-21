export const deletar = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  const texto = operacaoAtual.textContent
  operacaoAtual.textContent = texto.substr(0, texto.length - 1)
}
