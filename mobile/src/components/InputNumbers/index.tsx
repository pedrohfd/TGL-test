import React from 'react'
import { GameProps } from '../../@types/GameProps'
import { ButtonNumbers, ButtonNumbersText, Container } from './styles'

const InputNumbers = (gameRules: GameProps) => {
  // const existsNumber = (value: number): boolean => {
  //   const checkNumbers = selectedNumbers.find(
  //     values => inputFormatValue(Number(values)) === inputFormatValue(value)
  //   )
  //   return checkNumbers ? true : false
  // }

  const getNumbers = () => {
    let gameRangeInputs = []
    for (let index = 1; index <= gameRules.range; index++) {
      gameRangeInputs.push(
        <ButtonNumbers>
          <ButtonNumbersText>{gameRules.game_type}</ButtonNumbersText>
        </ButtonNumbers>
      )
    }

    return gameRangeInputs
  }

  return <Container>{getNumbers()}</Container>
}

export default InputNumbers
