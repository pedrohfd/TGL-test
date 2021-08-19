import styled from 'styled-components/native'
import { BetsProps } from '../../@types/BetsProps'

export const Container = styled.View`
  flex-direction: row;
  padding-left: 15px;
  height: 72px;
  margin-top: 25px;
  margin-left: 20px;
`

export const ItemsArea = styled.View`
  margin-left: 15px;
  justify-content: space-between;
  padding-top: 3px;
`

export const Numbers = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
`

export const CenterArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 75px;
`

export const Date = styled.Text`
  font-size: 12px;
`

export const Price = styled.Text`
  font-size: 12px;
`

export const GameName = styled.Text<BetsProps>`
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.color};
`

export const Color = styled.View<BetsProps>`
  border-radius: 100px;
  background-color: ${props => props.color};
  height: 75px;
  width: 5px;
`
