import { Container } from './styles'
import { MdRemoveShoppingCart } from 'react-icons/md'

interface ColorProps {
  color: string
}

export const EmptyCart = ({ color }: ColorProps) => (
  <Container color={color}>
    <MdRemoveShoppingCart />
    <span>Carrinho Vazio...</span>
  </Container>
)
