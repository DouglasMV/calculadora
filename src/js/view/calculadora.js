import { tela } from './tela.js'
import { criarTecla } from './criarTecla.js'
import { teclas } from './teclas.js'

export const calculadora = document.createElement('div')

calculadora.classList.add('calculadora')
calculadora.append(tela)

teclas.forEach(tecla => {
  const teclaCriada = criarTecla(tecla)
  calculadora.append(teclaCriada)
})
