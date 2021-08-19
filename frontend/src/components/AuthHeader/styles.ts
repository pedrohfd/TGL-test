import styled from 'styled-components'

export const Container = styled.section`
  grid-area: AN;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2 {
    color: var(--gray-700);
  }

  > section {
    width: 15.5625rem;
    text-align: center;

    > h2 {
      font-size: 4.375rem;
      font-style: italic;
    }
  }

  > div {
    margin: 1.875rem 0 1.25rem;
    background: var(--green);
    padding: 0.4375rem 3.5625rem;
    border-radius: 6.25rem;
    > p {
      color: var(--white);
    }
  }

  > h1 {
    font-size: 5.3125rem;
  }

  @media (max-width: 1200px) {
    margin-top: 2rem;

    > section {
      width: 50%;

      > h2 {
        font-size: 3.375rem;
      }
    }
    > div {
      margin: 1.575rem 0 1.05rem;
    }

    > h1 {
      font-size: 3.3125rem;
    }
  }

  @media (max-width: 500px) {
    > section {
      width: 70%;
    }
  }
`
