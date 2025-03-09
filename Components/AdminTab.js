import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddCategory from './AddCategory';
import AddFoodForm from './AddFoodForm';
import DeleteFood from './DeleteFood';

const AdminTab = () => {
    const Tab = createBottomTabNavigator();
  return (
   <Tab.Navigator>
    <Tab.Screen 
        name='food' 
        component={AddFoodForm} 
        options={{ headerShown: false }} 
    />
    <Tab.Screen 
        name='category' 
        component={AddCategory} 
        options={{ headerShown: false }} 
    />
    <Tab.Screen name='deletefood' component={DeleteFood} options={{headerShown:false}}/>
   </Tab.Navigator>
  )
}

export default AdminTab