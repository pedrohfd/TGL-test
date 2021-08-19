import styled from 'styled-components'

export const Container = styled.section`
  grid-area: FM;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 5rem;

  > h2 {
    color: var(--gray-700);
    text-align: center;
    font-size: 2.1875rem;
    font-style: italic;
    margin-bottom: 26px;
  }

  > .sign-up {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 80px;
    font-size: 35px;
    font-weight: bold;
    font-style: italic;

    color: var(--gray-700);
    background: transparent;

    > a {
      color: var(--gray-700);
      text-decoration: none;
      margin-right: 16px;
    }
  }
`

export const Form = styled.form`
  position: relative;

  box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.078);
  border: 1px solid #dddddd;
  border-radius: 14px;

  background: var(--white);

  > a {
    position: absolute;
    bottom: 9.875rem;
    right: 27px;

    text-decoration: none;

    font-size: 1.1rem;
    font-style: italic;
    color: var(--gray-100);
  }

  > .sign-in {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background: transparent;
    color: var(--green);
    font-weight: bold;
    font-style: italic;
    font-size: 2.2rem;

    margin-bottom: 2.4rem;

    > a {
      text-decoration: none;
      color: var(--green);
      > span {
      }
    }
  }

  @media (max-width: 500px) {
    width: 70%;
    > a {
      bottom: 7.875rem;
      font-size: 0.9rem;
    }
    > .sign-in {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      margin-top: -2rem;
    }
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 320px;
  > input {
    border-bottom: 1px solid var(--shape);
    padding: 34px 0 26px 30px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    font-size: 1.3rem;
    color: var(--gray-700);
  }

  @media (max-width: 500px) {
    width: 70%;
  }
`
