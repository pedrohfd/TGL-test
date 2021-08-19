import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { UserActions } from '../../store/userSlice'
import { api } from '../../services/api'

import {
  Container,
  Title,
  Input,
  ButtonForget,
  ButtonForgetText,
  Button,
  ButtonText,
  InputArea,
  ButtonShowPassword,
} from './styles'

import { Feather } from '@expo/vector-icons'

import Logo from '../../assets/icons/logo.svg'
import ShowPassword from '../../assets/icons/eyeOpen.svg'
import HidePassword from '../../assets/icons/eyeSlashed.svg'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import colors from '../../styles/colors'

const Login = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordShow, setIsPasswordShow] = useState(true)
  const dispatch = useDispatch()
  const { logIn, bgEmails, addUser } = UserActions

  useEffect(() => {
    const getEmails = async () => {
      const response = await api.get('/')

      console.log(response.data)

      dispatch(bgEmails(response.data))
    }

    getEmails()
  }, [bgEmails, dispatch])

  const handleLogin = async () => {
    try {
      if (email && password) {
        const response = await api.post('/login', {
          email: email,
          password: password,
        })

        if (!!response) {
          dispatch(logIn())
          dispatch(addUser(email))
        }
      } else {
        alert('Preencha os campos')
      }
    } catch (err) {}
  }

  const handleShowPassword = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  return (
    <Container>
      <Logo width={150} height={150} />
      <Title>Authentication</Title>
      <Card>
        <InputArea>
          <Input placeholder='Email' onChangeText={text => setEmail(text)} />
        </InputArea>
        <InputArea>
          <Input
            placeholder='Password'
            onChangeText={(text: string) => setPassword(text)}
            secureTextEntry={isPasswordShow}
          />
          <ButtonShowPassword onPress={handleShowPassword}>
            {isPasswordShow ? (
              <ShowPassword width={30} height={30} />
            ) : (
              <HidePassword width={30} height={30} />
            )}
          </ButtonShowPassword>
        </InputArea>
        <ButtonForget onPress={() => navigation.navigate('ForgotPassword')}>
          <ButtonForgetText>I forget my password</ButtonForgetText>
        </ButtonForget>
        <Button onPress={handleLogin}>
          <ButtonText green>
            Log In <Feather name='arrow-right' size={30} color={colors.green} />
          </ButtonText>
        </Button>
      </Card>
      <Button onPress={() => navigation.navigate('Registration')}>
        <ButtonText>
          Sign Up
          <Feather name='arrow-right' size={30} color={colors.dark_gray} />
        </ButtonText>
      </Button>
      <Footer />
    </Container>
  )
}

export default Login
