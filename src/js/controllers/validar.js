import { validarCaracteres } from './validacoes/validarCaracteres.js'

export function validar (operacao) {
  return (
    validarCaracteres(operacao) &&
    validarParenteses(operacao) &&
    validarOperadores(operacao)
  )
}
