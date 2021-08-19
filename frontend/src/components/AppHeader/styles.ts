import styled from 'styled-components'

export const Header = styled.header`
  height: 5rem;
  position: relative;
  border-bottom: 1px solid var(--shape);
  padding: 0 14rem 0 8em;
  > nav {
    display: flex;
    align-items: center;
    padding: 1rem;
    > h2 {
      color: var(--gray-700);
      font-size: 2.75rem;
      margin-right: 3.625rem;
      ::before {
        content: '';
        width: 5.5rem;
        height: 0.25rem;
        position: absolute;
        bottom: -2px;
        border-radius: 7px;
        background-color: var(--green);
      }
    }
  }

  @media (max-width: 920px) {
    padding: 0 0.5rem 0 0.5em;
  }
`

export const BurgerMenu = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1rem;

  > .btn-mobile {
    display: none;
  }

  a {
    color: var(--gray-700);
    font-weight: bold;
    text-decoration: none;
    font-size: 1.3rem;
    font-style: italic;
  }

  > .header-nav-div-center {
    width: 14rem;
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
  > .header-nav-div-end {
    color: var(--gray-700);
    margin-left: 3.625rem;
    > a {
      > svg {
        width: 20px;
        height: 18px;
        margin-left: 0.25rem;
      }
    }
  }

  @media (max-width: 920px) {
    > .btn-mobile {
      display: block;
      position: absolute;
      right: 5rem;
      padding: 0.55rem;
      font-size: 1.25rem;
      color: var(--green);
      border: 1px solid var(--green);
      border-radius: 20px;
      background: transparent;
    }

    > .header-nav-div-center,
    > .header-nav-div-end {
      display: none;
    }

    &.active {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      z-index: 1000;

      background: rgba(0, 0, 0, 0.85);

      a {
        color: var(--green);
      }
      > .btn-mobile {
        position: fixed;
        top: 1rem;
        right: 1rem;
      }

      > .header-nav-div-center {
        display: flex;
        margin-bottom: 40rem;
      }

      > .header-nav-div-end {
        display: flex;
        margin-bottom: 40rem;
      }
    }
  }

  @media (max-width: 360px) {
    &.active {
      > .header-nav-div-center {
        margin-bottom: 20rem;
      }

      > .header-nav-div-end {
        margin-bottom: 20rem;
      }
    }
  }
`
