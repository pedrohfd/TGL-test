import styled from 'styled-components/native'
import colors from '../../styles/colors'

import { ButtonProps } from '../../@types/ButtonProps'

export const Container = styled.View`
  align-items: center;
  flex: 1;
  background: ${colors.background};
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

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin-top: ${props => (props.card ? '22px' : '38px')};
  margin-bottom: 30px;
`

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  color: ${props => (props.card ? colors.green : colors.dark_gray)};
`
