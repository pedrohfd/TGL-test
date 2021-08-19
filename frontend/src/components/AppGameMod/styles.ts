import styled from "styled-components";

interface CartItemProps {
  color: string;
}

export const Container = styled.section`
  margin: 2.625rem 8.75rem 1rem 8.75rem;

  @media (max-width: 780px) {
    margin: 1.75rem;
  }
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 40rem;
  grid-template-rows: 1fr;

  grid-gap: 2.5625rem; //41px\\

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const GridBet = styled.section`
  > span {
    font-weight: bold;
    color: var(--gray-800);
  }

  > .grid-bet-container-gamer-mode {
    margin: 2rem auto;
  }

  > .grid-bet-container-description {
    max-width: 40.5rem;
    word-wrap: break-word;
    color: var(--gray-800);

    > h3 {
      font-size: 1.2rem;
    }
    > p {
      font-size: 1.06rem;
      font-style: italic;

      line-height: 1.5rem;
    }
  }

  > .grid-bet-container-gamerange {
    margin-top: 2rem;
  }

  > .grid-bet-container-buttons {
    display: flex;
    align-items: center;

    > .generic-btn {
      width: 28rem;
      > button {
        width: 12rem;
        height: 3.25rem;

        border-radius: 10px;
        border: 1px solid var(--green-900);

        padding: 1.06rem 1.375rem 1rem 1.562rem;

        font-size: 1rem;
        color: var(--green-900);

        transition: 0.5s ease-in filter;

        &:hover {
          filter: brightness(0.9);
        }

        &:first-child {
          margin-right: 25px;
        }
      }
    }
    > .add-cart {
      margin-left: 14rem;
      > button {
        width: 16rem;
        height: 3.25rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

        font-size: 1.2rem;

        border: none;
        border-radius: 10px;
        padding: 1.06rem 1.375rem 1rem 1.562rem;
        color: var(--white);
        background-color: var(--green-900);
      }
    }
  }

  @media (max-width: 780px) {
    > .grid-bet-container-gamer-mode {
      margin: 0.25rem;
    }

    > .grid-bet-container-buttons {
      flex-direction: column;
      margin: 0.5rem;

      > .generic-btn {
        margin: auto;
        > button {
          width: 10rem;
          font-size: 0.85rem;
        }
      }

      > .add-cart {
        margin-top: 2rem;
        margin-left: 0.25rem;
      }
    }
  }

  @media (max-width: 290px) {
    > .grid-bet-container-buttons {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;

export const Title = styled.section`
  text-transform: uppercase;
  font-size: 1.5rem; //24px
  font-style: italic;
  margin-bottom: 33px;

  color: var(--gray-700);
`;

export const GridCart = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 25rem;

  max-height: 500px;

  background: var(--white);
  border-radius: 10px;
  border: 1px solid var(--gray-200);

  > h3 {
    padding-top: 3rem;
    padding-left: 1rem;

    font-size: 1.5rem;
    font-style: italic;
    color: var(--gray-700);
    margin-bottom: 46px;
  }

  > div {
    > .grid-cart-container-section {
      position: relative;

      font-size: 0.937rem;
      color: var(--gray-800);

      margin-left: 2.5rem;

      max-height: 10rem;

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

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;

        > svg {
          width: 1.5rem;
          height: 1.75rem;

          opacity: 0.5;

          margin-right: 1.25rem;
          cursor: pointer;
        }
      }
    }
    > .grid-cart-total {
      position: absolute;

      margin-bottom: 3rem;
      margin-left: 1rem;
      bottom: 6rem;

      color: var(--gray-700);
      font-size: 1.8rem;
      > span {
        > strong {
          font-style: italic;
        }
      }
    }
  }

  > .grid-cart-button-save {
    height: 96px;
    width: 100%;

    position: absolute;
    bottom: 0;
    > span {
      color: var(--green-900);
      font-size: 32px;
      > svg {
        width: 24px;
        height: 20px;
      }
    }
  }

  @media (max-width: 780px) {
    width: 90%;
    height: 28rem;

    margin: 2rem auto;

    > h3 {
      margin: 0 0 1rem 0;
    }

    > div {
      > .grid-cart-container-section {
        > div {
          > svg {
            width: 2rem;
            opacity: 0.8;
          }
        }
      }

      > .grid-cart-total {
        font-size: 1.5rem;
      }
    }
  }
`;

export const CartItem = styled.section<CartItemProps>`
  border-left: 0.25rem solid ${(props) => props.color};
  border-radius: 5px;
  padding: 0.5rem;

  > p {
    width: 15rem;
    word-wrap: break-word;
    margin-bottom: 0.5rem;
  }

  > span {
    > strong {
      font-size: 1rem;
      font-style: italic;
      margin-right: 19px;
      color: ${(props) => props.color};
    }
    > span {
      color: var(--green-800);
    }
  }

  @media (max-width: 720px) {
    > p {
      width: 100%;
    }
  }
`;
