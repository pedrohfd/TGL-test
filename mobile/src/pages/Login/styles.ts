import styled from 'styled-components/native'
import colors from '../../styles/colors'

import { ButtonProps } from '../../@types/ButtonProps'

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
`

export const InputArea = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.ultra_light_gray};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`

export const Input = styled.TextInput`
  padding-left: 26px;
  height: 71px;
  font-size: 15px;
  font-weight: bold;
`

export const ButtonShowPassword = styled.TouchableOpacity``

export const ButtonForget = styled.TouchableOpacity`
  align-items: flex-end;
  margin-top: 25px;
  margin-right: 31px;
`

export const ButtonForgetText = styled.Text`
  color: ${colors.light_gray};
`

export const Button = styled.TouchableOpacity`
  align-items: center;
  margin-top: 45px;
  margin-bottom: 33px;
`

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.green ? colors.green : '#707070')};
`
