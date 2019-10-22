import { validar } from './validar.js'
import { stringEval } from './stringEval.js'

export const igual = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  const expressaoInvalida = document.querySelector('.expressaoInvalida')
  operacaoAtual.setAttribute('data-resultado', 'true')
  const operacao = operacaoAtual.value
  if (!validar(operacao)) {
    expressaoInvalida.classList.add('displayBlock')
    expressaoInvalida.classList.remove('displayNone')
  } else {
    try {
      const evalThisString = stringEval(operacao)
      const resultado = eval(evalThisString)
      operacaoAtual.value = resultado
    } catch {
      expressaoInvalida.classList.add('displayBlock')
      expressaoInvalida.classList.remove('displayNone')
    }
    document.querySelector('.operacaoAtual').focus()
  }
}
