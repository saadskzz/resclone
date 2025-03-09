import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddFoodForm from './AddFoodForm'
import AdminTab from './AdminTab'

const AdminMenu = () => {
  return (
    <View style={styles.container}>
    
    <AdminTab/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});

export default AdminMenu