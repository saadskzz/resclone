import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

function CustomButton({button,onPress}) {
  return (
 <Pressable style={styles.buttonstyle} onPress={onPress} >
<Text style={styles.buttontxt}>{button}</Text>
 </Pressable>
  )
}
const styles = StyleSheet.create({
buttonstyle:{
    
    borderRadius:40,
    borderWidth:2,
    borderColor:"#FF2211",
    padding:10,

    width:'45%',
 
},
buttontxt:{
    color:'#FF2211',
    textAlign:'center',
    fontSize:13,
    fontWeight:700
}
})

export default CustomButton