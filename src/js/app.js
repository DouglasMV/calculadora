import { calculadora } from './view/calculadora.js'

const root = document.getElementById('root')

root.append(calculadora)

window.onload = function () {
  document.querySelector('.operacaoAtual').focus();
};