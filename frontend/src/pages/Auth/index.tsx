import { AuthHeader } from '../../components/AuthHeader'
import { AuthLogin } from '../../components/AuthLogin'
import { AuthLayout } from '../../layout/auth'

export const AuthPage = () => {
  return (
    <AuthLayout>
      <AuthHeader />
      <AuthLogin />
    </AuthLayout>
  )
}
