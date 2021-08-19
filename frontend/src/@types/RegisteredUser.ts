import { UserProps } from './User'

export interface RegisteredUserProps {
  users: UserProps[]
  isLogged?: boolean
  token: string
  emails: []
}
