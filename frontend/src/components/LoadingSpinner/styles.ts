import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  > .spinner {
    display: inline-block;
    width: 280px;
    height: 280px;
  }
  .spinner:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--spinner);
    border-color: var(--spinner) transparent var(--spinner) transparent;
    animation: spinner 1.2s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
