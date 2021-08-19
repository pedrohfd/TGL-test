import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`

export const Header = styled.View`
  flex-direction: row;
  height: 79px;
  background: ${colors.header};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

// Cart Items

export const CartButton = styled.TouchableOpacity`
  margin-left: 150px;
`

export const CartArea = styled.View`
  background-color: #fff;
  height: 500px;
  border-radius: 20px;
`

export const CartHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const CartTitle = styled.Text`
  font-size: 20px;
`

export const CartCloseButton = styled.TouchableOpacity``

export const CartSaveButton = styled.TouchableOpacity`
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.ultra_light_gray};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const CartSaveButtonText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.green};
`

export const ScrollView = styled.ScrollView``

export const CartItems = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
  margin-left: 20px;
`

interface CartProps {
  color?: string
}

export const CartItemsColor = styled.View<CartProps>`
  background-color: ${props => props.color};
  width: 6px;
  height: 80px;
  border-radius: 100px;
`

export const CartItemsArea = styled.View`
  justify-content: space-between;
`

export const CartItemsBottomArea = styled.View`
  flex-direction: row;
`

export const CartItemsNumbers = styled.Text`
  margin-left: 5px;
  font-size: 19px;
`

export const CartItemsPrice = styled.Text`
  font-size: 19px;
  margin-left: 5px;
`

export const CartItemsName = styled.Text<CartProps>`
  margin-left: 5px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.color};
`

export const CartTotalPriceArea = styled.View`
  height: 30px;
  justify-content: center;
  align-items: center;
`

export const CartTotalPrice = styled.Text`
  font-size: 30px;
  color: ${colors.green};
`

// Empty cart

export const CartEmptyArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px; ;
`

export const CartEmptyText = styled.Text`
  font-size: 20px;
`

export const FlatList = styled.FlatList``

export const LogoutButton = styled.TouchableOpacity``

export const Title = styled.Text`
  margin-top: 26px;
  margin-left: 20px;
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.dark_gray};
`

export const Subtitle = styled.Text`
  margin-top: 15px;
  margin-left: 20px;
  font-size: 17px;
  font-style: italic;
  color: #868686;
`

export const FiltersArea = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 15px;
`

interface ButtonFilterProps {
  color: string
  isActive: boolean
}

export const Filters = styled.TouchableOpacity<ButtonFilterProps>`
  border-color: ${props => props.color};
  border-width: 2px;
  border-radius: 100px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  background-color: ${props => (props.isActive ? props.color : 'transparent')};
`

export const FiltersText = styled.Text<ButtonFilterProps>`
  color: ${props => (props.isActive ? '#ffffff' : props.color)};
`

export const GameRulesArea = styled.View`
  margin-top: 23px;
  margin-left: 20px;
  margin-right: 20px;
`

export const GameRulesTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
`

export const GameRulesDescription = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: #868686;
  line-height: 20px;
`

export const NumbersScrollView = styled.ScrollView``

export const ButtonSelectedNumberArea = styled.View`
  flex-direction: row;
  height: 50px;
`

export const ButtonNumbersArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10px;
  flex: 1;
  padding-bottom: 50px;
`

interface ButtonProps {
  isActive: boolean
  color: string
}

export const ButtonNumbers = styled.TouchableOpacity<ButtonProps>`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? props.color : '#adc0c4')};
  margin: 10px;
  border-radius: 100px;
`

export const ButtonNumbersText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`

export const ButtonArea = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
`

export const CompleteButton = styled.TouchableOpacity`
  height: 32px;
  width: 110px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.green};
  border-radius: 4px;
`

export const CompleteButtonText = styled.Text`
  font-size: 13px;
  color: ${colors.green};
`

export const ClearButton = styled.TouchableOpacity`
  height: 32px;
  width: 87px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${colors.green};
  border-radius: 4px;
  margin-left: 8px;
`

export const ClearButtonText = styled.Text`
  font-size: 13px;
  color: ${colors.green};
`

export const AddToCartButton = styled.TouchableOpacity`
  height: 32px;
  width: 122px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.green};
  margin-left: 8px;
  border-radius: 4px;
`

export const AddToCartButtonText = styled.Text`
  font-size: 13px;
  color: #fff;
`
