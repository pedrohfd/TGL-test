import { createSlice } from '@reduxjs/toolkit'
import { RegisteredUserProps } from '../@types/RegisteredUserProps'

const initialState: RegisteredUserProps = {
  users: [],
  isLogged: false,
  emails: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    bgEmails(state, action) {
      state.emails = action.payload
    },
    addUser(state, action) {
      const newUser = action.payload
      state.users.push(newUser)
    },
    logIn(state) {
      state.isLogged = true
    },
    logOut(state) {
      state.isLogged = false
      state.users = []
    },
  },
})

const UserActions = userSlice.actions
export { userSlice, UserActions }
