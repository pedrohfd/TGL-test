import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    margin-bottom: 2rem;
    color: var(--grey-800);
  }
  > a {
    text-decoration: none;
    color: var(--green-900);
    font-size: 2rem;
  }
`
