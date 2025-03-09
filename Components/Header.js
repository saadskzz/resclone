import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const Header = () => {
    const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart.items)
  const totalBill = cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  return (
    <View style={styles.headerContainer}>
      <AntDesign name="shoppingcart" size={24} color="black" onPress={()=>navigation.navigate('Cart')} />
      <Text style={styles.totalPrice}>${totalBill.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalPrice: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Header
