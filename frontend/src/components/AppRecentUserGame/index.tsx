import {
  currencyValue,
  dateFormatValue,
  formatNumberInArray,
} from '../../utils'
import { EmptyCart } from '../EmptyCart'
import { GameToAddCartProps } from '../../@types/CartTypes'
import { CartItem, EmptyContainer } from './styles'
import { GameTypesProps } from '../../@types/GameTypes'
import { useEffect, useState } from 'react'

interface AppRecentUserGameProps {
  games: GameToAddCartProps[]
  filter: GameTypesProps
}

export const AppRecentUserGame = ({
  games,
  filter,
}: AppRecentUserGameProps) => {
  const [filterGame, setFilterGame] = useState('')

  useEffect(() => {
    setFilterGame(filter.game_type)
  }, [filter, games])

  const filteredGames = () => {
    if (filterGame === '') {
      return !!games.length ? (
        games.map((game: any) => (
          <CartItem key={game.id} color={game.color}>
            <p>{formatNumberInArray(game.gameNumbers)}</p>
            <div>
              <p>
                {dateFormatValue(new Date(game.betDate))} - (
                {currencyValue(game.price)})
              </p>
            </div>
            <strong>{game.type}</strong>
          </CartItem>
        ))
      ) : (
        <EmptyContainer>
          <EmptyCart color='var(--red)' />
        </EmptyContainer>
      )
    } else if (games && filter) {
      const filterGame = games.filter(
        game => game.game_type === filter.game_type
      )
      return filterGame.map((game: any) => (
        <CartItem key={game.id} color={game.color}>
          <p>{formatNumberInArray(game.gameNumbers)}</p>
          <div>
            <p>
              {dateFormatValue(new Date(game.betDate))} - (
              {currencyValue(game.price)})
            </p>
          </div>
          <strong>{game.type}</strong>
        </CartItem>
      ))
    }
  }

  return <>{filteredGames()}</>
}
