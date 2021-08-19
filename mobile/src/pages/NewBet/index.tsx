import React, { useEffect, useState } from 'react'
import Modal from 'react-native-modal'

import Logo from '../../assets/icons/logo.svg'
import LogoutIcon from '../../assets/icons/logout.svg'
import CartIcon from '../../assets/icons/cart.svg'
import { api } from '../../services/api'
import { GameProps } from '../../@types/GameProps'

import {
  Container,
  Header,
  LogoutButton,
  Title,
  Subtitle,
  FiltersArea,
  Filters,
  FiltersText,
  GameRulesArea,
  GameRulesTitle,
  GameRulesDescription,
  ButtonNumbers,
  ButtonNumbersText,
  ButtonNumbersArea,
  NumbersScrollView,
  CartButton,
  CartArea,
  CartTitle,
  ButtonSelectedNumberArea,
  CartHeader,
  CartItems,
  CartItemsNumbers,
  FlatList,
  CompleteButton,
  CompleteButtonText,
  ClearButton,
  ClearButtonText,
  ButtonArea,
  AddToCartButton,
  AddToCartButtonText,
  CartItemsPrice,
  CartItemsName,
  CartEmptyArea,
  CartEmptyText,
  CartItemsColor,
  CartItemsArea,
  ScrollView,
  CartItemsBottomArea,
  CartSaveButton,
  CartSaveButtonText,
  CartTotalPriceArea,
  CartTotalPrice,
} from './styles'
import {
  currencyValue,
  formatNumberInArray,
  inputFormatValue,
} from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import { UserActions } from '../../store/userSlice'
import { useNavigation } from '@react-navigation/native'
import { CartActions } from '../../store/cartSlice'

const NewBet = () => {
  const [gameData, setGameData] = useState<GameProps[]>([])
  const [gameRules, setGameRules] = useState<GameProps>()
  const [betName, setBetName] = useState('MEGA SENA')
  const [selectedNumbers, setSelectedNumbers] = useState<any>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cart, setCart] = useState<any>([])
  const { users } = useSelector((state: any) => state.user)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await api.get('/all-games')
        setGameData(data)
        setGameRules(data[0])
      } catch (err) {}
    }

    getGames()
  }, [])

  useEffect(() => {
    const total = cart.reduce((sumTotal, games) => {
      return sumTotal + games.price
    }, 0)
    setTotalPrice(total)
  }, [cart])

  const handleFilterBets = (gameType: string) => {
    setBetName(gameType.toUpperCase())

    const data = gameData.find(item => item.game_type === gameType)
    setSelectedNumbers([])
    setGameRules(data)
  }

  const handleSelectNumbers = (index: number) => {
    if (selectedNumbers.includes(index)) {
      const result = selectedNumbers.filter((item: number) => item !== index)
      setSelectedNumbers(result)
    } else if (selectedNumbers.length === gameRules?.max_number) {
      alert('Você atingiu o limite de números selecionados')
    } else {
      setSelectedNumbers((prevState: any) => [...prevState, index])
    }
  }

  const handleLogout = () => {
    dispatch(UserActions.logOut())
  }

  const handleCompleteGame = () => {
    setSelectedNumbers([])
    const range = gameRules?.range
    let selectArray = [...selectedNumbers]

    try {
      if (selectedNumbers.length === gameRules?.max_number) {
        throw new Error(`Número máximos atingidos`)
      } else {
        while (selectArray.length < gameRules?.max_number) {
          const randomNumber = String(Math.ceil(Math.random() * range))
          if (selectArray.indexOf(randomNumber) === -1) {
            selectArray.push(randomNumber)
          }
        }
        setSelectedNumbers((prevState: any) => [...prevState, ...selectArray])
      }
    } catch {}
  }

  const handleClearGame = () => {
    setSelectedNumbers([])
  }

  const handleAddToCartGame = () => {
    const { game_type, price, color, max_number } = gameRules
    const numbersSelected = [...selectedNumbers].map(el => Number(el))
    if (numbersSelected.length !== gameRules?.max_number) {
      alert(
        `Você não adicionou a quantidade de números do jogo, ${gameRules?.max_number}`
      )
      return
    }
    const newCartGame = {
      id: Number(new Date().getTime()),
      game_type,
      gameNumbers: numbersSelected,
      price,
      betDate: new Date().toLocaleDateString('pt-BR'),
      color,
    }

    setCart((prevState: any) => [...prevState, newCartGame])
    setSelectedNumbers([])
  }

  const handleSaveGame = () => {
    try {
      if (totalPrice < 30) {
        const minPrice = gameRules?.min_cart_value
        alert(
          `Valor mínimo para salvar o jogo não atingido: ${currencyValue(
            minPrice
          )}`
        )
      }

      cart.forEach(async (game: any) => {
        await api.post('new-bet', {
          game_type: game.game_type,
          numbers: game.gameNumbers,
          email: users,
          length: cart.length,
          totalPrice,
          color: game.color,
        })
        dispatch(CartActions.addItemToCart(game))
      })

      navigation.navigate('Home')
      setCart([])
      alert('Aposta realizada por sucesso!')
    } catch {}
  }

  const existsNumber = (value: number): boolean => {
    const checkNumbers = selectedNumbers.find(
      (values: number) =>
        inputFormatValue(Number(values)) === inputFormatValue(value)
    )
    return checkNumbers ? true : false
  }

  const inputNumbers = () => {
    let gameRangeInputs = []

    for (let index = 1; index <= gameRules?.range; index++) {
      gameRangeInputs.push(
        <ButtonNumbers
          key={index}
          isActive={existsNumber(index)}
          onPress={() => handleSelectNumbers(index)}
          color={gameRules?.color}
        >
          <ButtonNumbersText>{index}</ButtonNumbersText>
        </ButtonNumbers>
      )
    }

    return gameRangeInputs
  }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <Container>
      <Header>
        <Logo width={100} height={100} />

        <CartButton onPress={toggleModal}>
          <CartIcon width={40} height={40} />
        </CartButton>

        <LogoutButton onPress={handleLogout}>
          <LogoutIcon width={30} height={30} />
        </LogoutButton>
      </Header>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <CartArea>
          <CartHeader>
            <CartIcon />
            <CartTitle>Cart</CartTitle>
          </CartHeader>
          {cart.length !== 0 ? (
            <>
              <ScrollView>
                {cart.map((game: any) => (
                  <CartItems key={game.id}>
                    <CartItemsColor color={game.color} />
                    <CartItemsArea>
                      <CartItemsNumbers>
                        {formatNumberInArray(game.gameNumbers)}
                      </CartItemsNumbers>
                      <CartItemsPrice>
                        R$ {currencyValue(game.price)}
                      </CartItemsPrice>
                      <CartItemsName color={game.color}>
                        {game.game_type}
                      </CartItemsName>
                    </CartItemsArea>
                  </CartItems>
                ))}
              </ScrollView>
              <CartTotalPriceArea>
                <CartTotalPrice>
                  Total - R$ {currencyValue(totalPrice)}
                </CartTotalPrice>
              </CartTotalPriceArea>
              <CartSaveButton onPress={handleSaveGame}>
                <CartSaveButtonText>Save</CartSaveButtonText>
              </CartSaveButton>
            </>
          ) : (
            <CartEmptyArea>
              <CartEmptyText>O carrinho está vazio</CartEmptyText>
            </CartEmptyArea>
          )}
        </CartArea>
      </Modal>

      <Title>NEW BET FOR {betName}</Title>

      <Subtitle>Choose a game</Subtitle>

      <FiltersArea>
        {gameData.map(game => (
          <Filters
            color={game.color}
            key={game.id}
            onPress={() => handleFilterBets(game.game_type)}
            isActive={game.game_type === gameRules?.game_type}
          >
            <FiltersText
              isActive={game.game_type === gameRules?.game_type}
              color={game.color}
            >
              {game.game_type}
            </FiltersText>
          </Filters>
        ))}
      </FiltersArea>

      {selectedNumbers.length === 0 ? (
        <GameRulesArea>
          <GameRulesTitle>Fill your bet</GameRulesTitle>

          <GameRulesDescription>{gameRules?.description}</GameRulesDescription>
        </GameRulesArea>
      ) : (
        <ButtonArea>
          <CompleteButton onPress={handleCompleteGame}>
            <CompleteButtonText>Complete game</CompleteButtonText>
          </CompleteButton>
          <ClearButton onPress={handleClearGame}>
            <ClearButtonText>Clear game</ClearButtonText>
          </ClearButton>
          <AddToCartButton onPress={handleAddToCartGame}>
            <AddToCartButtonText>Add to cart</AddToCartButtonText>
          </AddToCartButton>
        </ButtonArea>
      )}
      <NumbersScrollView>
        <ButtonNumbersArea>{inputNumbers()}</ButtonNumbersArea>
      </NumbersScrollView>
    </Container>
  )
}

export default NewBet
