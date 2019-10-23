import { focus } from './focus.js'

export const deletar = () => {
  const operacaoAtual = document.querySelector('.operacaoAtual')
  const texto = operacaoAtual.textContent
  operacaoAtual.textContent = texto.substr(0, texto.length - 1)

  const expressaoInvalida = document.querySelector('.expressaoInvalida')
  expressaoInvalida.classList.remove('displayBlock')
  expressaoInvalida.classList.add('displayNone')
  focus()
}
