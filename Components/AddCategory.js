import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AddCategory = () => {
  return (
    <View style={styles.catbod}>
      <Text>AddCategory</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    catbod:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default AddCategory