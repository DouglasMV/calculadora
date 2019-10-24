import { escreverNaTela } from './escreverNaTela.js'
import { igual } from './igual.js'
import { limparTela } from './limparTela.js'
import { deletar } from './deletar.js'

export const apertouTecla = event => {
  event.preventDefault
  const operacao = event.target.textContent

  switch (operacao) {
    case '=':
      igual()
      break
    case 'C':
      limparTela()
      break
    case 'del':
      deletar()
      break
    case 'x²':
      escreverNaTela('²')
      break
    default:
      escreverNaTela(operacao)
  }
}
