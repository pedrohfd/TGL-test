import { ReactNode } from 'react'
import { Grid } from './styles'

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Grid>{children}</Grid>
)
