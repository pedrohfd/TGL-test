import styled from "styled-components";

interface InputProps {
  isActive: boolean;
}

export const Container = styled.section`
  margin-top: 2rem;
`;

export const InputGame = styled.input<InputProps>`
  width: 3rem;
  height: 3rem;

  margin: 0 1.375rem 1.5rem 0;

  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;

  color: var(--white);
  background-color: ${({ isActive }) =>
    isActive ? "var(--green-900)" : "var(--cyan-gray)"};

  border: none;
  border-radius: 50%;

  cursor: pointer;
  @media (max-width: 520px) {
    margin: 0.25rem 0.5rem 0.25rem 0.15rem;
  }
`;
