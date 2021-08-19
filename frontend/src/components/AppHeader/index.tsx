import { useDispatch } from 'react-redux'
import { UserActions } from '../../store/userSlice'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { Header, BurgerMenu } from './styles'
import { useState } from 'react'
import { CartActions } from '../../store/cartSlice'

export const AppHeader = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    const { logOut } = UserActions
    const { isLogOut } = CartActions

    dispatch(isLogOut())
    dispatch(logOut())
  }

  const handleToggleMenuMobile = () => {
    setBurgerMenu(!burgerMenu)
  }
  return (
    <Header>
      <nav>
        <h2>TGL</h2>
        <BurgerMenu className={`${burgerMenu && 'active'}`}>
          <button className={`btn-mobile`} onClick={handleToggleMenuMobile}>
            Menu
          </button>
          <div className={`header-nav-div-center`}>
            <NavLink exact to='/new-bet'>
              Home
            </NavLink>
            <NavLink to='/'>Account</NavLink>
          </div>

          <div className={`header-nav-div-end `} onClick={logoutHandler}>
            <NavLink to='/'>
              Log out <HiOutlineArrowRight />
            </NavLink>
          </div>
        </BurgerMenu>
      </nav>
    </Header>
  )
}
