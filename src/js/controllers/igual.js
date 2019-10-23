import { validar } from './validar.js'
import { stringEval } from './stringEval.js'
import { focus } from './focus.js'

export const igual = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  const operacaoAnterior = document.querySelector('.operacaoAnterior')
  const expressaoInvalida = document.querySelector('.expressaoInvalida')
  operacaoAtual.setAttribute('data-resultado', 'true')
  const operacao = operacaoAtual.textContent
  if (!validar(operacao)) {
    expressaoInvalida.classList.add('displayBlock')
    expressaoInvalida.classList.remove('displayNone')
  } else {
    try {
      const evalThisString = stringEval(operacao)
      const resultado = eval(evalThisString)
      operacaoAtual.textContent = resultado
      operacaoAnterior.textContent = operacao
    } catch {
      expressaoInvalida.classList.add('displayBlock')
      expressaoInvalida.classList.remove('displayNone')
    }
    focus()
  }
}
