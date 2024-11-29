import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import PaymentScreen from "./screens/PaymentScreen";

const Stack = createStackNavigator();

export default function App() {
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
