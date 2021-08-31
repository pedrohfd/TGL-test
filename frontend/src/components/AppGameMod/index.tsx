import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CartActions } from '../../store/cartSlice'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { IoCartOutline } from 'react-icons/io5'
import { BsTrash } from 'react-icons/bs'
import { Container, GridBet, GridCart, Title, Grid, CartItem } from './styles'
import { formatNumberInArray, currencyValue } from '../../utils'
import { ModalError } from '../ModalError'
import { GameTypesProps } from '../../@types/GameTypes'
import { api } from '../../services/api'
import { LoadingSpinner } from '../LoadingSpinner'
import { GameToAddCartProps } from '../../@types/CartTypes'
import { EmptyCart } from '../EmptyCart'
import { ErrorProps } from '../../@types/Error'
import { useHistory } from 'react-router-dom'
import { AppGameInputNumbers } from '../AppGameInputNumbers'
import { AppGamesApiResponse } from '../AppGamesApiResponse'
import { Footer } from '../Footer'

export const AppGameMod = () => {
  const { users } = useSelector((state: any) => state.user)
  const [isLoading, setIsLoading] = useState(true)
  const [apiResponse, setApiResponse] = useState<GameTypesProps[]>([])
  const [redirect, setRedirect] = useState(false)
  const [gameChoice, setGameChoice] = useState<GameTypesProps>({
    game_type: '',
    description: '',
    range: 0,
    price: 0,
    max_number: 0,
    color: '',
    min_cart_value: 0,
  })
  const [selectedNumbers, setSelectedNumbers] = useState<string[]>([])
  const [cartsGames, setCartGames] = useState<GameToAddCartProps[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [messageToUser, setMessageToUser] = useState<ErrorProps>({
    title: '',
    description: '',
    color: '',
    active: false,
  })
  const { push } = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    async function getGames() {
      setIsLoading(true)
      try {
        await api.get<GameTypesProps[]>('/all-games').then(response => {
          const { data } = response

          const findLotofacil = data.filter(
            game => game.game_type === 'Lotofácil'
          )

          const initialGame = [...findLotofacil]
          setIsLoading(false)
          setApiResponse(data)
          setGameChoice(initialGame[0])
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

  useEffect(() => {
    const total = cartsGames.reduce((sumTotal, games) => {
      return sumTotal + games.price
    }, 0)
    setTotalPrice(total)
  }, [cartsGames])

  const handleButtonGameMode = (gameType: string) => {
    setIsLoading(true)
    setSelectedNumbers([])
    const result = apiResponse.filter(game => game.game_type === gameType)
    const gameChoice = [...result]

    setGameChoice(gameChoice[0])
    setIsLoading(false)
  }

  const handlerInputValue = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const newValue = event.currentTarget.value

      try {
        const indexSelected = selectedNumbers.indexOf(newValue)
        const numExists = indexSelected === -1

        if (numExists && selectedNumbers.length < gameChoice.max_number) {
          return setSelectedNumbers(prevState => [...prevState, newValue])
        } else if (!numExists) {
          const filterNumbers = selectedNumbers.filter(num => num !== newValue)
          return setSelectedNumbers(filterNumbers)
        } else {
          throw new Error(
            `Quantidade selecionada, excede a quantidade maxima ${gameChoice.max_number}`
          )
        }
      } catch (error) {
        setRedirect(false)
        setMessageToUser({
          title: 'Números Selecionados',
          description: error.message,
          color: 'var(--red)',
          active: true,
        })
      }
    },

    [selectedNumbers, gameChoice]
  )

  const handlerClearSelectedNumbers = () => {
    return setSelectedNumbers([])
  }

  const handlerCompleteGame = () => {
    setSelectedNumbers([])
    const { range } = gameChoice
    let selectArray = [...selectedNumbers]

    try {
      if (selectedNumbers.length === gameChoice.max_number) {
        throw new Error(`Números máximos atingidos`)
      } else {
        while (selectArray.length < gameChoice.max_number) {
          const randomNumber = String(Math.ceil(Math.random() * range))
          if (selectArray.indexOf(randomNumber) === -1) {
            selectArray.push(randomNumber)
          }
        }
        setSelectedNumbers(prevState => [...prevState, ...selectArray])
      }
    } catch {}
  }

  const handlerAddCart = () => {
    try {
      const { game_type, price, color } = gameChoice
      const numbersChoice = [...selectedNumbers].map(el => Number(el))
      const newCartGame: GameToAddCartProps = {
        id: String(new Date().getTime()),
        game_type,
        gameNumbers: numbersChoice,
        price,
        betDate: new Date(),
        color,
      }

      if (numbersChoice.length !== gameChoice.max_number) {
        throw new Error(
          `Você não adicionou a quantidade de números do jogo, ${gameChoice.max_number}`
        )
      }

      setCartGames(prevState => [...prevState, newCartGame])
      setSelectedNumbers([])
    } catch (error) {
      setMessageToUser({
        title: 'Ocorreu um erro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

  const removeItemToCart = (id: string) => {
    setCartGames(prevState => prevState.filter(game => game.id !== id))
  }

  const saveGame = () => {
    try {
      if (totalPrice < 30) {
        const minPrice = gameChoice.min_cart_value
        throw new Error(
          `Valor minimo para salvar o game nao atingido: ${currencyValue(
            minPrice
          )}`
        )
      }
      let sendEmailIndex = 0

      cartsGames.forEach(async game => {
        sendEmailIndex += 1

        await api.post('/new-bet', {
          game_type: game.game_type,
          numbers: game.gameNumbers,
          email: users[0],
          length: cartsGames.length,
          totalPrice,
          sendEmailIndex,
          color: game.color,
        })

        dispatch(CartActions.addItemToCart(game))
      })
      setCartGames([])

      setMessageToUser({
        title: 'Bet Realizada com Sucesso!',
        description: 'Veja seu histórico de apostas, acessando sua conta.',
        color: 'var(--spinner)',
        active: true,
      })
      setRedirect(true)
    } catch (error) {
      setMessageToUser({
        title: 'Ocorreu um erro !',
        description: error.message,
        color: 'var(--red)',
        active: true,
      })
    }
  }

  const toggleModal = () => {
    setMessageToUser({ title: '', description: '', color: '', active: false })
    redirect && push('/')
  }

  const modal = (
    <ModalError
      color={messageToUser.color}
      title={messageToUser.title}
      description={messageToUser.description}
      onClickClose={toggleModal}
    />
  )

  return (
    <Container>
      {messageToUser.active && modal}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid>
          <GridBet>
            <Title>
              <strong>NEW BET</strong> <span>FOR {gameChoice.game_type}</span>
            </Title>
            <span>Choose a game</span>
            <AppGamesApiResponse
              apiResponse={apiResponse}
              gameChoice={gameChoice}
              handleButtonGameMode={handleButtonGameMode}
            />

            <div className='grid-bet-container-description'>
              <h3>Fill your bet</h3>
              <p>{gameChoice.description}</p>
            </div>

            <AppGameInputNumbers
              gameChoice={gameChoice}
              handlerInputValue={handlerInputValue}
              selectedNumbers={selectedNumbers}
            />

            <section className='grid-bet-container-buttons'>
              <div className='generic-btn'>
                <button onClick={handlerCompleteGame}>Complete game</button>
                <button onClick={handlerClearSelectedNumbers}>
                  Clear game
                </button>
              </div>
              <div className='add-cart'>
                <button onClick={handlerAddCart}>
                  <IoCartOutline style={{ height: '25', width: '25' }} />
                  Add to Cart
                </button>
              </div>
            </section>
          </GridBet>
          <GridCart>
            <h3>CART</h3>

            <div>
              <section className='grid-cart-container-section'>
                {!!cartsGames.length ? (
                  cartsGames.map(game => (
                    <div key={game.id}>
                      <BsTrash onClick={() => removeItemToCart(game.id)} />
                      <CartItem color={game.color}>
                        <p>{formatNumberInArray(game.gameNumbers)}</p>
                        <span>
                          <strong>{game.game_type}</strong>
                          <span>{currencyValue(game.price)}</span>
                        </span>
                      </CartItem>
                    </div>
                  ))
                ) : (
                  <EmptyCart color='var(--grey-800)' />
                )}
              </section>
              <section className='grid-cart-total'>
                <span>
                  <strong>CART </strong>
                  TOTAL:
                  <span> {currencyValue(totalPrice)}</span>
                </span>
              </section>
            </div>

            <button className='grid-cart-button-save' onClick={saveGame}>
              <span>
                Save <HiOutlineArrowRight />
              </span>
            </button>
          </GridCart>
        </Grid>
      )}
      <Footer />
    </Container>
  )
}
