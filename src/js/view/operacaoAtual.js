import { igual } from '../controllers/igual.js'

export const operacaoAtual = document.createElement('div')
operacaoAtual.classList.add('operacaoAtual')
operacaoAtual.setAttribute('contentEditable', true)
operacaoAtual.setAttribute('autofocus', true)
operacaoAtual.addEventListener('keypress', event => {
  const key = event.wich || event.keyCode
  if (key === 13) {
    igual()
  }
})
