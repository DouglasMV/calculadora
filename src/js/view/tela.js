import { operacaoAnterior } from './operacaoAnterior.js'
import { operacaoAtual } from './operacaoAtual.js'
import { expressaoInvalida } from './expressaoInvalida.js'

export const tela = document.createElement('div')
tela.classList.add('tela')
tela.append(operacaoAnterior)
tela.append(operacaoAtual)
tela.append(expressaoInvalida)
