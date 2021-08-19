import styled from 'styled-components'

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3rem 1fr;
  grid-gap: 2rem;

  grid-template-areas:
    'AT AT'
    'AN FM';

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`
