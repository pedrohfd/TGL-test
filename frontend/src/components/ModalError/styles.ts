import styled from 'styled-components'

interface ColorProps {
  color: string
}

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.459);
`
export const CardWrapper = styled.div<ColorProps>`
  position: fixed;
  top: 30vh;
  left: 50vw;
  z-index: 100;

  width: 50rem;

  background-color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  > header {
    > h2 {
      margin: 1rem;
      color: var(--gray-900);
    }

    > svg {
      position: absolute;
      color: ${props => props.color};

      margin-top: -2.5rem;
    }
  }
  > div {
    padding: 1rem;
    > p {
      color: ${props => props.color};
    }
  }
  > footer {
    padding: 1rem;
    display: flex;

    justify-content: flex-end;

    > button {
      width: 8rem;

      border-radius: 100px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      padding: 0.75rem;
      background: ${props => props.color};
      color: var(--white);

      transition: filter ease-in 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      > svg {
        position: absolute;
        margin-left: 0.75rem;
      }
    }
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    left: 0;
    right: 9rem;

    width: auto;
  }
`
