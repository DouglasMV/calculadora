export const stringEval = string => {
  const tempArr = string.split('')
  const raizes = []
  const arr = tempArr.map((element, index) => {
    if (element === '÷') {
      return '/'
    }
    if (element === '×') {
      return '*'
    }
    if (element === '²') {
      return '**2'
    }
    if (element === '%') {
      return '/100'
    }
    if (element === '√') {
      raizes.push(index)
      if (
        index === 0 ||
        ['÷', '×', '-', '+', '(', '√'].includes(tempArr[index - 1])
      ) {
        return 'Math.sqrt('
      }
      return '*Math.sqrt('
    }
    return element
  })

  console.log(arr)

  const numeric = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
    'Math.sqrt('
  ]

  raizes.forEach(posicao => {
    let indice = arr.findIndex((element, index) => {
      if (index > posicao && !numeric.includes(element)) {
        return true
      }
      return false
    })
    if (indice === -1) {
      arr.push(')')
    } else {
      arr.splice(indice, 0, ')')
    }
  })

  const str = arr.join('')
  console.log(str)
  return str
}
