import styled from 'styled-components'

interface ButtonColorProps {
  color: string
  isActive: boolean
}

interface ColorProps {
  color: string
}

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 80vh;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-800);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`

export const BetContainer = styled.section`
  margin-left: 9rem;
  margin-top: 72px;

  > section {
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;

    > h2 {
      font-size: 2rem;
      color: var(--gray-700);
      margin-right: 45px;
    }

    > span {
      font-size: 1.1rem;
      font-style: italic;
      color: var(--gray-800);
      margin-right: 1rem;
    }
  }

  @media (max-width: 780px) {
    margin: 1.75rem;
    > section {
      flex-direction: column;
      margin-bottom: 0.5rem;

      > h2 {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 520px) {
    > section {
      > div {
        width: 15rem;
      }
    }
  }
`

export const Empty = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const ButtonGame = styled.button<ButtonColorProps>`
  width: 120px;

  background: transparent;
  margin-right: 1.56rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;

  //Props
  border: 2px solid ${props => (props.isActive ? 'none' : props.color)};
  color: ${props => (props.isActive ? 'var(--white)' : props.color)};
  background: ${props => (props.isActive ? props.color : 'transparent')};

  &:last-child {
    margin-right: 0;
  }

  //Active change border, background, color.
`

export const CartItem = styled.button<ColorProps>`
  display: flex;
  flex-direction: column;
  background: transparent;

  max-width: 50.5rem;

  word-wrap: break-word;
  color: var(--gray-800);

  border-left: 6px solid ${props => props.color};
  border-radius: 4px;
  padding: 0.5rem;

  margin-bottom: 2.5rem;

  > p {
    font-size: 1.4rem;
    font-style: italic;
    font-weight: bold;
    line-height: 1.75rem;

    margin-bottom: 15px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    > p {
      font-size: 1.2rem;
    }
  }

  > strong {
    font-size: 1.4rem;
    font-style: italic;
    color: ${props => props.color};
  }
`
export const NewBetContainer = styled.section`
  display: flex;
  align-items: center;

  position: fixed;
  right: 14rem;

  margin-top: 6rem;
  //margin-right: 14rem;

  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: var(--green-900);

  > a {
    text-decoration: none;
    color: var(--green-900);
    margin-right: 11px;
  }

  @media (max-width: 780px) {
    margin-top: 0;
    top: 6rem;
    right: 4rem;
  }

  @media (max-width: 420px) {
    top: 6rem;
    right: 2rem;

    font-size: 1rem;
  }
`
