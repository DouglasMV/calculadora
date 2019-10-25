import { validarCaracteres } from './validacoes/validarCaracteres.js'
import { validarOperacoes } from './validacoes/validarOperacoes.js'
import { validarParenteses } from './validacoes/validarParenteses.js'

export function validar (operacao) {
  return (
    validarCaracteres(operacao) &&
    validarParenteses(operacao) &&
    validarOperacoes(operacao)
  )
}
