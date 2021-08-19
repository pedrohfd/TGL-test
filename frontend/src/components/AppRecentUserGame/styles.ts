import styled from 'styled-components'

interface ColorProps {
  color: string
}

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

    margin-bottom: 1rem;
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

  @media (max-width: 780px) {
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    > p {
      font-size: 1rem;
      font-style: italic;
      font-weight: bold;
      line-height: 1.5rem;
    }
  }
`

export const EmptyContainer = styled.div``
