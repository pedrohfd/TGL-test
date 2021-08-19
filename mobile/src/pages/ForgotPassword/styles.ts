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

export const Input = styled.TextInput`
  padding-left: 26px;
  height: 71px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.ultra_light_gray};
  font-size: 15px;
  font-weight: bold;
`

export const CardButton = styled.TouchableOpacity`
  align-items: center;
`

export const CardButtonText = styled.Text<ButtonProps>`
  font-size: 30px;
  margin-top: 17px;
  margin-bottom: 20px;
  color: ${colors.green};
  font-weight: bold;
  font-style: italic;
`

export const Button = styled.TouchableOpacity`
  align-items: center;
`

export const ButtonText = styled.Text<ButtonProps>`
  font-size: 30px;
  margin-top: ${props => (props.up ? `45px` : `0px`)};
  margin-bottom: ${props => (props.up ? `65px` : `85px`)};
  color: ${colors.dark_gray};
  font-weight: bold;
  font-style: italic;
`
