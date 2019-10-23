import { focus } from './focus.js'

export const escreverNaTela = valor => {
  const operacaoAtual = document.querySelector('.operacaoAtual')

  if (operacaoAtual.getAttribute('data-resultado') === 'true') {
    const expressaoInvalida = document.querySelector('.expressaoInvalida')

    if (
      !['+', '-', '×', '÷', '²', '%'].includes(valor) ||
      expressaoInvalida.classList.contains('displayBlock')
    ) {
      operacaoAtual.textContent = ''
    }

    operacaoAtual.setAttribute('data-resultado', 'false')

    expressaoInvalida.classList.remove('displayBlock')
    expressaoInvalida.classList.add('displayNone')
  }
  operacaoAtual.textContent += valor
  focus()
}
