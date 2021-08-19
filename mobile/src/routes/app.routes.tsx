import React from 'react'
import { StatusBar, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Account from '../pages/Account'
import NewBet from '../pages/NewBet'

import BetsIcon from '../assets/icons/bets.svg'
import HomeFocusedIcon from '../assets/icons/homeFocused.svg'
import HomeIcon from '../assets/icons/home.svg'
import AccountIcon from '../assets/icons/account.svg'
import AccountFocusedIcon from '../assets/icons/accountFocused.svg'
import colors from '../styles/colors'

const Tab = createBottomTabNavigator()

const AppRoutes = () => {
  return (
    <>
      <StatusBar backgroundColor='#FEFEFE' barStyle='dark-content' />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { height: 72 },
          tabBarActiveTintColor: colors.green,
          tabBarInactiveTintColor: colors.light_gray,
          tabBarLabelStyle: { bottom: 14, fontSize: 14 },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <HomeFocusedIcon width={35} height={35} />
              ) : (
                <HomeIcon width={35} height={35} />
              ),
          }}
        />
        <Tab.Screen
          name=' '
          component={NewBet}
          options={{
            tabBarIcon: () => <BetsIcon width={100} height={100} />,
            tabBarButton: ({ children, onPress }) => (
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: -50,
                  height: 110,
                  width: 110,
                  borderRadius: 60,
                  backgroundColor: '#fff',
                  shadowColor: '#000',
                  shadowOpacity: 50,
                  elevation: 4,
                  paddingTop: 16,
                }}
                onPress={onPress}
              >
                {children}
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name='Account'
          component={Account}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AccountFocusedIcon width={40} height={40} />
              ) : (
                <AccountIcon width={40} height={40} />
              ),
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default AppRoutes
