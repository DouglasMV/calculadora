import { igual } from '../controllers/igual.js'
import { codesTeclas } from '../controllers/codesTeclas.js'

export const operacaoAtual = document.createElement('div')
operacaoAtual.classList.add('operacaoAtual')
operacaoAtual.setAttribute('contentEditable', true)
operacaoAtual.setAttribute('data-resultado', 'false')
operacaoAtual.addEventListener('keydown', event => {
  const key = event.code
  if (codesTeclas.includes(key)) {
    switch (key) {
      case 'Enter':
      case 'NumpadEnter':
        igual()
        break
      case 'NumpadMultiply':
        event.preventDefault()
        operacaoAtual.textContent += '×'
        break
      case 'NumpadDivide':
        event.preventDefault()
        operacaoAtual.textContent += '÷'
        break
    }
  } else {
    event.preventDefault()
  }
})
