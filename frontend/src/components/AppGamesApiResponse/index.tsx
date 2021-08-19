import { GameTypesProps } from '../../@types/GameTypes'
import { ButtonGame, Container } from './styles'

interface AppGamesApiResponseProps {
  apiResponse: GameTypesProps[]
  gameChoice: GameTypesProps
  handleButtonGameMode: (gameType: string) => void
}

export const AppGamesApiResponse = ({
  apiResponse,
  gameChoice,
  handleButtonGameMode,
}: AppGamesApiResponseProps) => {
  return (
    <Container>
      {apiResponse.map(game => (
        <ButtonGame
          key={game.game_type}
          color={game.color}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault()
            handleButtonGameMode(game.game_type)
          }}
          isActive={game.game_type === gameChoice.game_type}
        >
          {game.game_type}
        </ButtonGame>
      ))}
    </Container>
  )
}
