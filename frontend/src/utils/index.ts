export const inputFormatValue = (number: Number) => {
  return number < 10 ? `0${number}` : `${number}`
}

export const currencyValue = (value: any) => {
  value = value * 100
  value = String(value).replace(/\D/g, '')

  value = Number(value) / 100

  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return value
}

export const dateFormatValue = (date: Date) => {
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}

export const formatNumberInArray = (selectedNumber: number[]) => {
  const numbers = (num1: number, num2: number) => {
    return num1 - num2
  }

  const results = [...selectedNumber]

  const numberResult = results.sort(numbers)

  const formateNumbers = (numbers: number[]) => numbers.join(', ')

  return formateNumbers(numberResult)
}
