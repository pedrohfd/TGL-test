import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Container, Form, FormContent } from './styles'

import { ErrorProps } from '../../@types/Error'
import { AuthToast } from '../AuthToast'
import { api } from '../../services/api'

export const AuthResetPass = () => {
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [token, setToken] = useState('')
  const [redirect, setRedirect] = useState(false)

  const { push } = useHistory()

  const handlerBackButton = () => {
    push('/')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await api.put('/reset', {
        token: token,
        password: password,
        password_confirmation: passwordConfirmation,
      })

      setMessageToUser({
        title: 'Senha Alterada',
        description: 'Sua senha foi alterada',
        color: 'var(--green)',
        active: true,
      })
      setRedirect(true)
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
      toReset={false}
    />
  )

  return (
    <Container>
      {messageToUser.active && toast}
      <h2>
        <strong>Reset Password</strong>
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <input
            type='token'
            id='token'
            placeholder='Token'
            value={token}
            onChange={event => setToken(event.target.value)}
            onBlur={event => onBlurEmail(event.target.value)}
          />
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            onBlur={event => onBlurEmail(event.target.value)}
          />
          <input
            type='password'
            id='password'
            placeholder='Confirm Password'
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
            onBlur={event => onBlurEmail(event.target.value)}
          />
          <button type='submit' className='send-link'>
            <span>Change Password</span>
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
