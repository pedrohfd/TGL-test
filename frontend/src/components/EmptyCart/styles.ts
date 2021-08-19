import styled from "styled-components";

interface ColorProps {
  color: string;
}

export const Container = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.color};
  font-size: 1.8rem;

  cursor: unset;
`;
