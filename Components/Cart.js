import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../Slices/CartSlice';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items);

let totalbill = item.reduce((acc,curr)=>{
   return acc + curr.quantity*curr.price
},0)
  return (
    <View style={{ padding: 20, backgroundColor: 'white', flex: 1, width: '100%' }}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.itemId} // Ensure keyExtractor returns a string
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', padding: 10 }} key={item.itemId}>
            <View>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: `http://192.168.1.13:7464/${item.foodPic.replace(/\\/, '/')}`,
                }}
              />
            </View>
            <View style={{ padding: 10, flex: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%' }}>
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
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>-</Text>
                  </Pressable>
                  <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '500' }}>
                    {item.quantity}
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
                    onPress={() => dispatch(increment(item.itemId))}
                  >
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>+</Text>
                  </Pressable>
                </View>
                <Text style={{ fontWeight: '600', color: '#DB4B40', fontSize: 22 }}>
                  ${item.quantity * item.price}
                </Text>
                
              </View>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginTop: 20,padding:'20' }}>
        <View>
          <Text  style={{ lineHeight:21.97,fontSize: 16, fontWeight: 600 }}>Total:</Text>
      <Text  style={{  lineHeight:21.97,fontSize: 16, fontWeight: 400,color:'#8B8B8B' }}>{totalbill}</Text>
      </View>
      <View style={{ backgroundColor: '#D52B1E' ,padding: 10, borderRadius: 5 ,width:'70%'}} >
        <Text style={{ fontSize: 20,textAlign:'center' ,fontWeight: 600, color: 'white' }} onPress={()=>navigation.navigate('Order')}>
          Order
        </Text>
      </View>
      </View>
    </View>
  );
};

export default Cart;
