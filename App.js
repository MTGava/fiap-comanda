import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Order from './screens/Order';
import Dvds from './screens/Dvds';
import { AuthProvider } from "./context/AuthContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Dvds" component={Dvds} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}