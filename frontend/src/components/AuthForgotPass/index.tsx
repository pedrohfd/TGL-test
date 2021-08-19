import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Container, Form, FormContent } from './styles'

import { useSelector } from 'react-redux'
import { ErrorProps } from '../../@types/Error'
import { AuthToast } from '../AuthToast'
import { api } from '../../services/api'

export const AuthForgotPass = () => {
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })
  const [email, setEmail] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { emails } = useSelector((state: any) => state.user)

  const { push } = useHistory()

  const handlerBackButton = () => {
    push('/')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const emailExists = emails.find((item: string) => item === email)

      if (!emailExists) {
        throw new Error(`email nao cadastrado`)
      } else {
        await api.post('/forgot', { email: email })

        setMessageToUser({
          title: 'Email enviado',
          description: 'uma nova senha foi enviada para seu email informado',
          color: 'var(--green)',
          active: true,
        })
        setRedirect(true)
      }
    } catch (error) {
      setRedirect(false)
      setMessageToUser({
        title: 'Ocorreu um erro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

  const onBlurEmail = (enteredEmail: string) => {
    const regexValidEmail = /^[\w+.]*@\w+.(?:[A-Z]{2,})?.[\w\w]*$/.test(
      enteredEmail
    )
    try {
      if (!regexValidEmail) {
        throw new Error('Campo obrigatório.')
      }
    } catch (error) {
      setRedirect(false)
      setMessageToUser({
        title: 'Email Invalido',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

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
      toReset={true}
    />
  )

  return (
    <Container>
      {messageToUser.active && toast}
      <h2>
        <strong>Forgot Password</strong>
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            onBlur={event => onBlurEmail(event.target.value)}
          />
          <button type='submit' className='send-link'>
            <span>Send Link</span>
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
