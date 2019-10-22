import { validarCaracteres } from './validacoes/validarCaracteres.js'
// import { validarOperadores } from './validacoes/validarOperdaores.js'
import { validarParenteses } from './validacoes/validarParenteses.js'

export function validar (operacao) {
  return validarCaracteres(operacao) && validarParenteses(operacao)
}
