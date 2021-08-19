import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { Container, NewBetContainer, BetContainer } from './styles'
import { useSelector } from 'react-redux'
import { ModalError } from '../ModalError'
import { useEffect, useState } from 'react'
import { GameTypesProps } from '../../@types/GameTypes'
import { ErrorProps } from '../../@types/Error'
import { api } from '../../services/api'
import { LoadingSpinner } from '../LoadingSpinner'
import { AppGamesApiResponse } from '../AppGamesApiResponse'
import { AppRecentUserGame } from '../AppRecentUserGame'
import { Footer } from '../Footer'

export const AppRecentGames = () => {
  const [apiResponse, setApiResponse] = useState<GameTypesProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [gameChoice, setGameChoice] = useState<GameTypesProps>({
    game_type: '',
    description: '',
    range: 0,
    price: 0,
    max_number: 0,
    color: '',
    min_cart_value: 0,
  })
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })

  const { games } = useSelector((state: any) => state.cart)

  useEffect(() => {
    async function getGames() {
      setIsLoading(true)
      try {
        await api.get<GameTypesProps[]>('/all-games').then(response => {
          const { data } = response

          setIsLoading(false)
          setApiResponse(data)
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
    getGames()
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

  const handleButtonGameMode = (gameType: string) => {
    setIsLoading(true)
    const result = apiResponse.filter(game => game.game_type === gameType)
    const gameChoice = [...result]

    setGameChoice(gameChoice[0])
    setIsLoading(false)
  }

  return (
    <>
      {messageToUser.active && modal}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <BetContainer>
            <section>
              <h2>RECENT GAMES</h2>
              <span>Filters</span>
              <div>
                <AppGamesApiResponse
                  apiResponse={apiResponse}
                  gameChoice={gameChoice}
                  handleButtonGameMode={handleButtonGameMode}
                />
              </div>
            </section>

            <AppRecentUserGame games={games} filter={gameChoice} />
          </BetContainer>
          <NewBetContainer>
            <Link to='/new-bet'> New Bet</Link> <HiOutlineArrowRight />
          </NewBetContainer>
        </Container>
      )}
      <Footer />
    </>
  )
}
