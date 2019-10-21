import { escreverNaTela } from './escreverNaTela.js'

export const apertouTecla = event => {
  const operacao = event.target.className

  switch (operacao) {
    default:
      escreverNaTela(event.target.value)
  }
}
