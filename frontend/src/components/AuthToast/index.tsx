import { ToastProps } from '../../@types/Modal'
import { BackDrop, CardWrapper } from './styles'
import { Link } from 'react-router-dom'

export const AuthToast = ({
  title,
  description,
  color,
  handleSvgError,
  onClickClose,
  toReset,
}: ToastProps) => (
  <BackDrop>
    <CardWrapper color={color}>
      <header>
        <h2>{title}</h2>
      </header>
      <div>
        <p>{description}</p>
      </div>

      <footer>
        {toReset ? (
          <Link to='/reset-password'>Close</Link>
        ) : (
          <button onClick={onClickClose}>Close</button>
        )}
      </footer>
    </CardWrapper>
  </BackDrop>
)
