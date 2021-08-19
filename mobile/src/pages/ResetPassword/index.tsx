import React, { useState } from 'react'

import ShowPassword from '../../assets/icons/eyeOpen.svg'
import HidePassword from '../../assets/icons/eyeSlashed.svg'
import Logo from '../../assets/icons/logo.svg'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import colors from '../../styles/colors'

import { Feather } from '@expo/vector-icons'

import {
  Container,
  Title,
  Input,
  CardButton,
  CardButtonText,
  Button,
  ButtonText,
  InputArea,
  ButtonShowPassword,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { useSelector } from 'react-redux'

const ResetPassword = () => {
  const { emails } = useSelector((state: any) => state.user)
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isPasswordShow, setIsPasswordShow] = useState(true)
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(true)

  const navigation = useNavigation()

  const handleReset = async () => {
    try {
      await api.put('/reset', {
        token: token,
        password: password,
        password_confirmation: passwordConfirmation,
      })

      navigation.navigate('Login')
    } catch (error) {}
  }

  const handleShowPassword = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  const handleShowConfirmPassword = () => {
    setIsConfirmPasswordShow(!isConfirmPasswordShow)
  }

  return (
    <Container>
      <Logo width={150} height={150} />
      <Title>Reset Password</Title>

      <Card>
        <InputArea>
          <Input placeholder='Token' onChangeText={text => setToken(text)} />
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
        <InputArea>
          <Input
            placeholder='Confirm Password'
            onChangeText={(text: string) => setPasswordConfirmation(text)}
            secureTextEntry={isConfirmPasswordShow}
          />
          <ButtonShowPassword onPress={handleShowConfirmPassword}>
            {isConfirmPasswordShow ? (
              <ShowPassword width={30} height={30} />
            ) : (
              <HidePassword width={30} height={30} />
            )}
          </ButtonShowPassword>
        </InputArea>

        <CardButton onPress={handleReset}>
          <CardButtonText green>
            Change Password
            <Feather name='arrow-right' size={30} color={colors.green} />
          </CardButtonText>
        </CardButton>
      </Card>
      <Button>
        <ButtonText up onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={30} color={colors.dark_gray} /> Back
        </ButtonText>
      </Button>
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

export default ResetPassword
