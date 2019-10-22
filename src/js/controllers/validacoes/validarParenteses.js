export function validarParenteses (operacao) {
  const stack = []
  for (let i = 0; i < operacao.length; i++) {
    if (operacao[i] === '(') {
      stack.push('(')
    } else if (operacao[i] === ')') {
      if (stack.length === 0) {
        return false
      } else {
        stack.pop()
      }
    }
  }

  return !stack.length
}
