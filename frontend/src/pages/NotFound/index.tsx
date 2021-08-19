import { Container } from './styles'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <Container>
    <span>404 | Not Found !</span>
    <span>Link acessado nao encontrado, por favor volte a home.</span>
    <Link to='/'>Go Home</Link>
  </Container>
)
