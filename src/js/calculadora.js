import { tela } from './tela.js'
import { criarTecla } from './criarTecla.js'
import { teclas } from './teclas.js'

export const calculadora = document.createElement('div')

calculadora.append(tela)

teclas.forEach(tecla => {
  const teclaCriada = criarTecla(tecla.valor, tecla.classe)
  calculadora.append(teclaCriada)
})
