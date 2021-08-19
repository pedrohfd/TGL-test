import { useHistory } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Container, Form, FormContent } from './styles'
import { FormEvent, useCallback, useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { UserActions } from '../../store/userSlice'
import { UserProps } from '../../@types/User'
import { ErrorProps } from '../../@types/Error'
import { AuthToast } from '../AuthToast'
import { api } from '../../services/api'

export const AuthRegistration = () => {
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })
  const [redirect, setRedirect] = useState(false)

  const isEmptyName = (value: string) => value.trim().length >= 3
  const isEmptyEmail = (value: string) => value.trim() !== ''
  const isValidRegex = (value: string) =>
    /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/.test(value)
  const isMinChars = (value: string) => value.trim().length >= 6

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const { push } = useHistory()
  // const dispatch = useDispatch()
  // const { addUser } = UserActions

  const handlerBackButton = () => {
    push('/')
  }

  const handleSubmit = useCallback(async (event: FormEvent) => {
    const name = nameInputRef.current?.value
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    event.preventDefault()

    console.log(name)
    console.log(email)
    console.log(password)

    try {
      if (name && email && password) {
        const enteredName = isEmptyName(name)
        const enteredEmail = isEmptyEmail(email) && isValidRegex(email)
        const enteredPassword = isMinChars(password)

        const formIsValid = enteredName && enteredEmail && enteredPassword

        if (formIsValid) {
          const userData: UserProps = {
            name,
            email,
            password,
          }

          await api.post('/register', {
            email: email,
            password: password,
            username: name,
          })

          setMessageToUser({
            title: `Ola,${userData.name}`,
            description:
              'Seu cadastrado foi realizado com sucesso, aproveite! 🎉 ',
            color: 'var(--green)',
            active: true,
          })
          // dispatch(addUser(userData))
          setRedirect(true)
        } else {
          throw new Error(
            `Dados Inválidos! Nome deve ter ao menos 3 letras | Email deve ser valido | Senha deve ter pelo menos 6 caracteres!`
          )
        }
      } else {
        throw new Error(`error on create a data `)
      }
    } catch (error) {
      setMessageToUser({
        title: 'Ocorreu um durante o cadastro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
      setRedirect(false)
    }
  }, [])

  const toggleToast = () => {
    setMessageToUser({ title: '', description: '', color: '', active: false })
    redirect && push('/')
  }

  const toast = (
    <AuthToast
      color={messageToUser.color}
      title={messageToUser.title}
      description={messageToUser.description}
      onClickClose={toggleToast}
      handleSvgError={redirect}
      toReset={false}
    />
  )

  const onBlurEmail = () => {
    if (emailInputRef.current?.value) {
      const regexValidEmail = /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/.test(
        emailInputRef.current?.value
      )
      try {
        if (!regexValidEmail) {
          throw new Error('Campo obrigatório.')
        }
      } catch (error) {
        setMessageToUser({
          title: 'Email Invalido',
          description: error.message,
          color: 'var(--red)',
          active: true,
        })
      }
    }
  }

  const onBlurName = () => {
    const name = nameInputRef.current?.value
    if (name) {
      try {
        if (name.length < 3) {
          throw new Error('Nome deve possuir pelo menos  3 letras!')
        }
      } catch (error) {
        setMessageToUser({
          title: 'Name Invalido',
          description: error.message,
          color: 'var(--red)',
          active: true,
        })
      }
    }
  }

  const onBlurPassword = () => {
    const password = passwordInputRef.current?.value
    if (password) {
      try {
        if (password.length < 6) {
          throw new Error(`Password deve conter pelo menos 6 caracteres`)
        }
      } catch (error) {
        setMessageToUser({
          title: 'Password Invalido',
          description: error.message,
          color: 'var(--red)',
          active: true,
        })
      }
    }
  }

  return (
    <Container>
      {messageToUser.active && toast}
      <h2>
        <strong>Registration</strong>
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <input
            type='text'
            id='name'
            placeholder='Name'
            required
            ref={nameInputRef}
            onBlur={() => onBlurName()}
          />

          <input
            type='email'
            id='email'
            placeholder='Email'
            required
            ref={emailInputRef}
            onBlur={() => onBlurEmail()}
          />

          <input
            type='password'
            id='password'
            placeholder='Password'
            required
            ref={passwordInputRef}
            onBlur={() => onBlurPassword()}
          />

          <button type='submit' className='registration'>
            Registration
            <HiOutlineArrowRight />
          </button>
        </FormContent>
      </Form>
      <button className='back' onClick={handlerBackButton}>
        <HiOutlineArrowLeft />
        <span>Back</span>
      </button>
    </Container>
  )
}
