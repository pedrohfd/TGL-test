import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import React from 'react'
import { useSelector } from 'react-redux'

const Routes = () => {
  const user = useSelector((state: any) => state.user)

  return user.isLogged ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
