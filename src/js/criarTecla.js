import { apertouTecla } from './apertouTecla.js'

export const criarTecla = (valor, classe) => {
  const tecla = document.createElement('button')
  tecla.textContent = valor
  tecla.classList.add(classe)
  tecla.addEventListener('click', apertouTecla)
  return tecla
}
