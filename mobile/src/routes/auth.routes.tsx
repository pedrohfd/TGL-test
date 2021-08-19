import React from 'react'

import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Registration from '../pages/Registration'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import ForgotPassword from '../pages/ForgotPassword'

const Stack = createNativeStackNavigator()

const AuthRoutes = () => (
  <>
    <StatusBar backgroundColor='#f7f7f7' barStyle={'dark-content'} />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='ResetPassword' component={ResetPassword} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Registration' component={Registration} />
    </Stack.Navigator>
  </>
)

export default AuthRoutes
