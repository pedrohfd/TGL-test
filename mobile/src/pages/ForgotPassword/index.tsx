import React, { useState } from 'react'

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
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { useSelector } from 'react-redux'

const ForgotPassword = () => {
  const { emails } = useSelector((state: any) => state.user)
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  const handleForgot = async () => {
    try {
      const emailExists = emails.find((item: string) => item === email)

      if (emailExists) {
        await api.post('/forgot', { email: email })
        navigation.navigate('ResetPassword')
      }
    } catch (error) {}
  }

  return (
    <Container>
      <Logo width={150} height={150} />
      <Title>Forgot Password</Title>

      <Card>
        <Input placeholder='Email' onChangeText={text => setEmail(text)} />
        <CardButton onPress={handleForgot}>
          <CardButtonText green>
            Send link{' '}
            <Feather name='arrow-right' size={30} color={colors.green} />
          </CardButtonText>
        </CardButton>
      </Card>
      <Button>
        <ButtonText up onPress={() => navigation.navigate('Login')}>
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

export default ForgotPassword
