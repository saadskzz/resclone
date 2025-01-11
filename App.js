import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuPage from './Components/MenuPage';
import Auth from './Components/Auth';
import { Provider } from 'react-redux';
import store from './Store/store'
import AntDesign from '@expo/vector-icons/AntDesign';
import FoodDetails from './Components/FoodDetails';
import Cart from './Components/Cart';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
   

        <Stack.Screen component={Auth} name='Auth' options={{headerShown:false}}/>
        <Stack.Screen component={MenuPage} name='Menu' options={{headerRight:()=><AntDesign name="shoppingcart" size={24} color="black" />,headerLeft:()=>'',headerTitle:'' }}/>
        <Stack.Screen component={FoodDetails} name='FoodDetail'  options={{headerShown:false}} />
        <Stack.Screen component={Cart} name='Cart'/>
      </Stack.Navigator>

      
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
