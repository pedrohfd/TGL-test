import React, { ReactNode } from 'react'
import { Container } from './styles'

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>
}

export default Card
