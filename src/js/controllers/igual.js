import { validar } from './validar.js'

export const igual = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  operacaoAtual.setAttribute('data-resultado', 'true')
  const operacao = operacaoAtual.value
  if (validar(operacao)) {
    console.log('dentro do if')
  } else {
    const expressaoInvalida = document.querySelector('.expressaoInvalida')
    expressaoInvalida.classList.add('displayBlock')
    expressaoInvalida.classList.remove('displayNone')
    console.log('no else')
  }
}
