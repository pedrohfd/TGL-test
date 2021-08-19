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
  active?: any
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
  /* background-color: ${props =>
    props.active ? props.color : 'transparent'}; */
`

export const FiltersText = styled.Text<ButtonFilterProps>`
  color: ${props => props.color};
`

export const FilteredBets = styled.View``

export const FlatList = styled.FlatList``
