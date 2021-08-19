import { api } from '../services/api'
import { GameTypesProps } from '../@types/GameTypes'
import { useEffect, useState } from 'react'

export const ApiCallResponse = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [apiResponse, setApiResponse] = useState<GameTypesProps[]>([])
  const [gameChoice, setGameChoice] = useState<GameTypesProps>({
    game_type: '',
    description: '',
    range: 0,
    price: 0,
    max_number: 0,
    color: '',
    min_cart_value: 0,
  })

  useEffect(() => {
    async function getGames() {
      setIsLoading(true)
      try {
        await api.get<GameTypesProps[]>('/all-games').then(response => {
          const { data } = response

          // console.log(data)
          const findLotofacil = data.filter(
            game => game.game_type === 'Lotofácil'
          )

          const initialGame = [...findLotofacil]
          setIsLoading(false)
          setApiResponse(data)
          setGameChoice(initialGame[0])
        })
      } catch (error) {}
    }
    setIsLoading(false)
    getGames()
  }, [])

  return { isLoading, gameChoice, apiResponse }
}
