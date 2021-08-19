import React, { useState } from 'react'
import { BetsProps } from '../../@types/BetsProps'

import {
  Container,
  ItemsArea,
  Numbers,
  CenterArea,
  Date,
  Price,
  GameName,
  Color,
} from './styles'

const BetsCard = ({ data }: BetsProps) => {
  return (
    <Container>
      <Color color={data.color} />
      <ItemsArea>
        <Numbers>{data.gameNumbers}</Numbers>
        <CenterArea>
          <Date>{data.date}</Date>
          <Price>- {data.price}</Price>
        </CenterArea>
        <GameName color={data.color}>{data.game_type}</GameName>
      </ItemsArea>
    </Container>
  )
}

export default BetsCard
