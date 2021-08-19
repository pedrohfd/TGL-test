import React, { useEffect, useState } from 'react'
import {
  Container,
  Email,
  EmailArea,
  Header,
  LogoutButton,
  Name,
  NameArea,
  Title,
} from './styles'
import Logo from '../../assets/icons/logo.svg'
import LogoutIcon from '../../assets/icons/logout.svg'
import { api } from '../../services/api'
import { useSelector, useDispatch } from 'react-redux'
import { UserActions } from '../../store/userSlice'

const Account = () => {
  const { users } = useSelector((state: any) => state.user)
  const [user, setUser] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await api.post('/account', { email: users })
      console.log(data)
      setUser(data)
    }
    getUser()
  }, [])

  const handleLogout = () => {
    dispatch(UserActions.logOut())
  }

  return (
    <Container>
      <Header>
        <Logo width={100} height={100} />
        <LogoutButton onPress={handleLogout}>
          <LogoutIcon width={30} height={30} />
        </LogoutButton>
      </Header>

      <NameArea>
        <Title>Name</Title>
        <Name>{user?.username}</Name>
      </NameArea>
      <EmailArea>
        <Title>Email</Title>
        <Email>{user?.email}</Email>
      </EmailArea>
    </Container>
  )
}

export default Account
