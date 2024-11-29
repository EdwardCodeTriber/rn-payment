import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import PaymentScreen from "./screens/PaymentScreen";
import * as SplashScreen from 'expo-splash-screen';
import { View, Image } from 'react-native';


const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();


export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificially delay for 2 seconds to show splash screen
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        
      } catch (e) {
        console.warn(e);
      } finally {
        //application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  //  return null or a loading view
  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* product screen*/}

        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: "Our Products" }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ title: "Complete Payment" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function CustomSplashScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#007bff',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image 
        source={require('./assets/paySplash.gif')} 
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain'
        }} 
      />
    </View>
  );
}
