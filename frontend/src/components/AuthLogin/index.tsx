import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Container, Form, FormContent } from './styles'
import { useDispatch } from 'react-redux'
import { UserActions } from '../../store/userSlice'
import { FormEvent, useRef, useState } from 'react'
// import { UserProps } from '../../@types/User'
import { ErrorProps } from '../../@types/Error'
import { AuthToast } from '../AuthToast'
import { api } from '../../services/api'
import { useEffect } from 'react'

export const AuthLogin = () => {
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })

  const dispatch = useDispatch()
  // const { emails } = useSelector((state: any) => state.emails)
  const { logIn, addUser, bgEmails } = UserActions
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const getEmails = async () => {
      const response = await api.get('/')

      console.log(response.data)

      dispatch(bgEmails(response.data))
    }

    getEmails()
  }, [bgEmails, dispatch])

  const handleSubmit = async (event: FormEvent) => {
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    event.preventDefault()

    try {
      if (email && password) {
        const response = await api.post('/login', {
          email: email,
          password: password,
        })

        if (!!response) {
          dispatch(addUser(email))
          dispatch(logIn())
        }
      }
    } catch (error) {
      setMessageToUser({
        title: 'Ocorreu um erro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

  const toggleToast = () => {
    setMessageToUser({ title: '', description: '', color: '', active: false })
  }

  const toast = (
    <AuthToast
      color={messageToUser.color}
      title={messageToUser.title}
      description={messageToUser.description}
      onClickClose={toggleToast}
      handleSvgError={false}
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

  return (
    <Container>
      {messageToUser.active && toast}
      <h2>
        <strong>Authentication</strong>
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <input
            type='email'
            id='email'
            placeholder='email'
            required
            ref={emailInputRef}
            onBlur={() => onBlurEmail()}
          />
          <input
            type='password'
            id='password'
            placeholder='password'
            required
            ref={passwordInputRef}
          />
        </FormContent>
        <Link to='/forgot-password'>I forget my password</Link>
        <button type='submit' className='sign-in'>
          <span>Log In</span>

          <HiOutlineArrowRight />
        </button>
      </Form>
      <button className='sign-up'>
        <Link to='/register'>Sign Up</Link> <HiOutlineArrowRight />
      </button>
    </Container>
  )
}
