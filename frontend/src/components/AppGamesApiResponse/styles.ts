import styled from 'styled-components'

interface ButtonColorProps {
  color: string
  isActive: boolean
}

export const Container = styled.section`
  margin: 2rem auto;
  @media (max-width: 520px) {
    margin-top: 0.5rem;
  }
`
export const ButtonGame = styled.button<ButtonColorProps>`
  width: 10rem;

  background: transparent;
  margin-right: 1.56rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;

  border: 2px solid ${props => (props.isActive ? 'none' : props.color)};
  color: ${props => (props.isActive ? 'var(--white)' : props.color)};
  background: ${props => (props.isActive ? props.color : 'transparent')};

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 520px) {
    width: 90%;
    margin-bottom: 0.5rem;
  }
`
