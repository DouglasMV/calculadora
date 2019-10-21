import { apertouTecla } from '../controllers/apertouTecla.js'

export const criarTecla = valor => {
  const tecla = document.createElement('button')
  tecla.textContent = valor
  tecla.classList.add('tecla')
  tecla.addEventListener('click', apertouTecla)
  if (tecla.textContent === '=') {
    tecla.classList.add('igual')
  }
  return tecla
}
