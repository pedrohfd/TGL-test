import styled from "styled-components";

export const Container = styled.section`
  height: 3.9375rem; 
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  text-align: center;
  font-size: 0.9375rem;
  background: var(--background);
  color: var(--gray-700);
  border-top: 1px solid var(--shape);
  padding-top: 1.825rem; 
  
  @media (max-width: 1200px) {
    margin-top: 2rem;
    position: relative;
  }
`;
