import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'

import Logo from '../../assets/icons/logo.svg'
import ShowPassword from '../../assets/icons/eyeOpen.svg'
import HidePassword from '../../assets/icons/eyeSlashed.svg'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import colors from '../../styles/colors'

import { Feather } from '@expo/vector-icons'

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  InputArea,
  ButtonShowPassword,
} from './styles'
import { api } from '../../services/api'

const Registration = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordShow, setIsPasswordShow] = useState(true)

  const handleRegister = async () => {
    const formIsValid = name && email && password

    try {
      if (formIsValid) {
        await api.post('/register', {
          email: email,
          password: password,
          username: name,
        })

        navigation.goBack()
      }
    } catch {}
  }

  const handleShowPassword = () => {
    setIsPasswordShow(!isPasswordShow)
  }

  return (
    <Container>
      <Logo width={150} height={150} />
      <Title>Registration</Title>
      <Card>
        <InputArea>
          <Input
            placeholder='Name'
            onChangeText={(text: string) => setName(text)}
          />
        </InputArea>
        <InputArea>
          <Input
            placeholder='Email'
            onChangeText={(text: string) => setEmail(text)}
          />
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
        <Button card onPress={handleRegister}>
          <ButtonText card>
            Register
            <Feather name='arrow-right' size={30} color={colors.green} />
          </ButtonText>
        </Button>
      </Card>
      <Button onPress={() => navigation.goBack()}>
        <ButtonText>
          <Feather name='arrow-left' size={30} color={colors.dark_gray} /> Back
        </ButtonText>
      </Button>
      <Footer />
    </Container>
  )
}

export default Registration
