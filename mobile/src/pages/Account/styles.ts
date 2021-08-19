import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View``

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
  font-size: 20px;
  padding-left: 5px;
`

export const NameArea = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-color: ${colors.green};
`

export const Name = styled.Text`
  margin-top: 5px;
  font-size: 17px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${colors.green};

  padding-top: 10px;
  padding-left: 10px;
  height: 40px;
`

export const EmailArea = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`

export const Email = styled.Text`
  margin-top: 5px;
  font-size: 17px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${colors.green};

  padding-top: 10px;
  padding-left: 10px;
  height: 40px;
`

export const ChangePassword = styled.TouchableOpacity``

export const ChangePasswordText = styled.Text``
