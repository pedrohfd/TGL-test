// import { Link } from 'react-router-dom'
// import { HiOutlineArrowRight } from 'react-icons/hi'
import {
  Container,
  // NewBetContainer,
  UserContainer,
  InformationContainer,
} from './styles'
import { useSelector } from 'react-redux'
import { ModalError } from '../ModalError'
import { useEffect, useState } from 'react'
import { GameTypesProps } from '../../@types/GameTypes'
import { ErrorProps } from '../../@types/Error'
import { api } from '../../services/api'
import { LoadingSpinner } from '../LoadingSpinner'
// import { AppGamesApiResponse } from '../AppGamesApiResponse'
// import { AppRecentUserGame } from '../AppRecentUserGame'
import { Footer } from '../Footer'

export const UserAccount = () => {
  const [userResponse, setUserResponse] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { users } = useSelector((state: any) => state.user)

  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })

  useEffect(() => {
    async function getUser() {
      setIsLoading(true)
      try {
        await api.post('/account', { email: users[0] }).then(response => {
          const { data } = response

          // setUserResponse({ email: data.email, username: data.username })
          setUserResponse([data.email, data.username])
          console.log(userResponse)
          setIsLoading(false)
        })
      } catch (error) {
        setMessageToUser({
          title: 'Request Error',
          description: '500 - Internal Server Error',
          color: 'var(--red)',
          active: true,
        })
      }
    }

    setIsLoading(false)
    getUser()
  }, [])

  const toggleModal = () => {
    setMessageToUser({ title: '', description: '', color: '', active: false })
  }

  const modal = (
    <ModalError
      color={messageToUser.color}
      title={messageToUser.title}
      description={messageToUser.description}
      onClickClose={toggleModal}
    />
  )

  // const handleButtonGameMode = (gameType: string) => {
  //   setIsLoading(true)
  //   const result = apiResponse.filter(game => game.game_type === gameType)
  //   const gameChoice = [...result]

  //   setGameChoice(gameChoice[0])
  //   setIsLoading(false)
  // }

  return (
    <>
      {messageToUser.active && modal}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Container>
            <UserContainer>
              <section>
                <h2>Personal Information</h2>
                <span>Edit Information</span>
              </section>
            </UserContainer>
          </Container>
          <InformationContainer>
            {/* <section>{userResponse}</section> */}
          </InformationContainer>
        </>
      )}
      <Footer />
    </>
  )
}
