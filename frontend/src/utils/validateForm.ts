export const isValidEmail = (email: string) => {
  if (email) {
    const regexValidEmail = /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/.test(email)
    if (regexValidEmail) {
      return email
    } else {
      throw new Error('Email invalido!')
    }
  } else {
    throw new Error(`Preencha o campo!`)
  }
}

export const isNameValid = (name: string) => {
  if (name) {
    if (name.length >= 3) {
      return name
    } else {
      throw new Error(`${name} deve conter no minimo 3 letras!`)
    }
  } else {
    throw new Error(`Preencha o campo!`)
  }
}

export const isPasswordValid = (password: string) => {
  if (password) {
    if (password.length >= 6) {
      return password
    } else {
      throw new Error(`${password} deve conter no minimo 6 caracteres!`)
    }
  } else {
    throw new Error(`Preencha o campo!`)
  }
}

export const isFormRegisterValid = (
  name: string,
  email: string,
  password: string
) => {
  if (isNameValid(name) && isPasswordValid(email) && isValidEmail(password)) {
    return true
  } else {
    throw new Error(`Erro durante o registro`)
  }
}
