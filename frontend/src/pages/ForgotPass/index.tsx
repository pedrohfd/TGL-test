import { AuthHeader } from '../../components/AuthHeader'
import { AuthForgotPass } from '../../components/AuthForgotPass'
import { AuthLayout } from '../../layout/auth'

export const ForgotPassword = () => {
  return (
    <AuthLayout>
      <AuthHeader />
      <AuthForgotPass />
    </AuthLayout>
  )
}
