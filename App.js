import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Booking from './src/screens/Booking';
import Checkout from './src/screens/Checkout';
import Success from './src/screens/Success';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import poppinsRegular from './assets/fonts/Poppins-Regular.ttf';
import poppinsSemiBold from './assets/fonts/Poppins-SemiBold.ttf';
import poppinsBold from './assets/fonts/Poppins-Bold.ttf';
import { SafeAreaView, Text } from 'react-native';

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    poppinsRegular: poppinsRegular,
    poppinsSemiBold: poppinsSemiBold,
    poppinsBold: poppinsBold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
