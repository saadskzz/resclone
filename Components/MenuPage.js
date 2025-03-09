import React from 'react'
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text ,View} from 'react-native'
import { useGetFoodsQuery } from '../Slices/FoodSlice'
import { useGetCategoriesQuery } from '../Slices/CategorySlice';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import { increment,addCartItems } from '../Slices/CartSlice';
import AppRectangle from "../apprectangle.png"
import addquant from '../add.png'
import App from '../App';
function MenuPage() {
    const dispatch = useDispatch();
      
     
  const cartItem = useSelector(state=>state.cart.items) 
  const totalbill = cartItem.reduce((acc,curr) =>{ return acc + curr.quantity*curr.price},0);
  console.log(cartItem,"haha")
 
  const { data: foodsData, isLoading: foodsLoading, error: foodsError } = useGetFoodsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();
 const navigation = useNavigation();
const addToCart = (item)=>{
  
  dispatch(addCartItems({ itemId: item._id, name: item.name, price: item.price, quantity: 1,foodPic:item.foodPic }))
  console.log('Cart')
}
    const handleFoodClick=(item)=>{
navigation.navigate('FoodDetail',{item});
console.log('hello')
    }
  return (
   
  <View style={{padding:20}}>
    <View style={{width:'100%', height:150}}>
 <Image style={{width:'100%', borderRadius:20}} source={AppRectangle}/>
</View>
  {categoriesError && <Text>{categoriesError}</Text>}
  {categoriesLoading && <Text>...LOADING</Text>}
  {categoriesData && categoriesData.data.map(categorys => {
  
     return(<ScrollView key={categorys._id}>
     <Text style={styles.catHeading}  >
    {categorys.catName}
  </Text>
  {foodsError && <Text>{foodsError}</Text>}
  {foodsLoading && <Text>...LOADING</Text>}
  {foodsData &&
  <FlatList horizontal
   data={foodsData.data.filter(food=>food.category._id === categorys._id)}
   keyExtractor={(item)=>item._id}
   renderItem={({item})=> 
 <View>
    <Pressable key={item._id} style={styles.foocard} onPress={()=>handleFoodClick(item)} >
      <Image style={{width:100,height:100, alignItems:'center',borderRadius:10}} source={{uri:`http://192.168.1.13:7464/${item.foodPic.replace(/\\/,'/')}`}}/>
      <Text style={{flexWrap:'wrap',fontWeight:600,fontSize:12}}>{item.name}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontSize:18,fontWeight:700}}>${item.price}</Text>
      <Pressable onPress={()=>addToCart(item)} style={{alignSelf:'center',justifyContent:''}}>
      <Image  source={addquant}/>
     </Pressable>  
     </View>
     
    </Pressable>
      </View>
  }
  />
  }
  </ScrollView>
  )})}

  </View>
  )
}
const styles = StyleSheet.create({
  foocard:{
    backgroundColor:'white',
   
    display:'flex',
   
    justifyContent:'center',
    padding:10,
    margin:10,
    width:125,
    borderRadius:10

  },
  catHeading:{
    fontSize:18,
    fontWeight:800
  },
  foodBox:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})
export default MenuPage