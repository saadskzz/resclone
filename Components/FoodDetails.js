import React, { useState } from 'react'
import { Text, View,Image, StyleSheet,Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import DetailBg from '../fooddetailbg.png'
import { addCartItems } from '../Slices/CartSlice'
import { useSelector,useDispatch } from 'react-redux'

function FoodDetails() {
    const dispatch = useDispatch();
    const items = useSelector(state=>state.cart.items);
    const totalbill = items.reduce((acc,curr) =>{ return acc + curr.quantity*curr.price},0)
const [quantity,setQuantity] = useState(1)
const increaseQuantity =()=> {
    setQuantity((prevQuantity)=>prevQuantity+1)
}
const decreaseQuantity = ()=>{
  
 quantity>1 && setQuantity(prevQuantity=>prevQuantity-1)

}
console.log('decreased qy',quantity)
    const route = useRoute();
    const {item} = route.params;
    console.log(item)
  return (
    <View style={{flex:1,backgroundColor:'white',position:'relative',zIndex:-1}}>
  <View style={styles.detailBox}>
  <Image style={styles.detailbgimg} source={DetailBg} />
  <View style={styles.detailimg}>
      <Image style={{width:'100%',height:'100%',borderRadius:100}} 
      source={{uri:`http://192.168.1.13:7464/${item.foodPic.replace(/\\/,'/')}`}}
      />
    </View>
   
  </View>
  <View>
    <View style={{padding:20}} >
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:1}}>
        <View>
        <Text style={{fontSize:28,fontWeight:600,marginTop:0}}>{item.name}</Text>
        </View>
         <View style={{ flexDirection: 'row' }}>
                       <Pressable
                         style={{
                           backgroundColor: '#F8B756',
                           paddingHorizontal: 7,
                           marginHorizontal: 4,
                           borderRadius: 5,
                           justifyContent: 'center',
                           alignItems: 'center',
                         }}
                         onPress={() => console.log('Decrement logic here')} // Replace with decrement action
                       >
                         <Text style={{ fontWeight: 'bold', fontSize: 16 }} onPress={()=>decreaseQuantity()}>-</Text>
                       </Pressable>
                       <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500' }}>
                         {quantity}
                       </Text>
                       <Pressable
                         style={{
                           backgroundColor: '#F8B756',
                           paddingHorizontal: 7,
                           marginHorizontal: 4,
                           borderRadius: 5,
                           justifyContent: 'center',
                           alignItems: 'center',
                         }}
                         onPress={() => increaseQuantity()}
                       >
                         <Text style={{ fontWeight: 'bold', fontSize: 16 }}>+</Text>
                       </Pressable>
                     </View>
        </View>
        <Text style={{fontSize:28,fontWeight:700,marginTop:20}} >${item.price}</Text>
        <Text style={{fontSize:16,fontWeight:600,marginTop:10}}>DESCRIPTION</Text>
        <Text style={{fontSize:14,fontWeight:400,marginTop:10,lineHeight:19}}>{item.description}</Text>

        </View>
        <View style={{flexDirection:'row',justifyContent:'center',borderRadius:20}}>
      
      <Text style={{backgroundColor:'#49B38D',padding:12,width:'60%',textAlign:'center',borderTopLeftRadius:20,borderBottomLeftRadius:20,fontSize:20,color:'white',fontWeight:500}} onPress={()=>{dispatch(addCartItems({itemId:item._id,name:item.name,price:item.price,quantity:quantity,foodPic:item.foodPic}))}}>Add to cart</Text>
    <Text style={{backgroundColor:'#6DC2A4',padding:12,width:'30%',textAlign:'center',borderTopRightRadius:20,borderBottomRightRadius:20,fontSize:20,color:'white',fontWeight:500}}>${quantity*item.price}</Text>
    
  </View>
    </View>
  
    </View>
  )
}
const styles = StyleSheet.create({
    detailBox:{width:"100%",height:"50%",
        position:'relative',
        zIndex:-1,
        display:'flex',
         justifyContent: 'center',
        alignItems:'center'
    },
        detailbgimg:{
            width:'100%',
            height:'100%',
            position:'absolute',
            zIndex:-1
        },
        detailimg:{
            width:'80%',
            height:'80%',
             alignItems:'center',
             position:'relative',
             zIndex:1,
             justifyContent:'center'
            }
})
export default FoodDetails