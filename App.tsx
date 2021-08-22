import React from 'react'
import {StatusBar,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import MainStack from './src/stacks/MainStack'


import AppProvider from './src/hooks'

const App: React.FC = () => (
  <NavigationContainer>
      <StatusBar backgroundColor='#21b5a7'></StatusBar>
      <AppProvider>
       <MainStack></MainStack>
      </AppProvider>
    </NavigationContainer>
)
export default App;

