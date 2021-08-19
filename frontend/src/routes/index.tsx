import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { AppHeader } from '../components/AppHeader'

export const Routes = () => {
  const user = useSelector((state: any) => state.user)

  return (
    <BrowserRouter>
      {user.isLogged ? (
        <>
          <AppHeader /> <AppRoutes />
        </>
      ) : (
        <>
          <AuthRoutes /> <Footer />
        </>
      )}
    </BrowserRouter>
  )
}
