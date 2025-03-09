import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useGetFoodsQuery, useDeleteFoodsMutation } from '../Slices/FoodSlice'

const DeleteFood = () => {
  const { data: foodData, isLoading: foodsLoading, error: foodsError } = useGetFoodsQuery();
  const [deleteFoods] = useDeleteFoodsMutation();

  const handleDelete = async (foodId) => {
    await deleteFoods(foodId);
  };

  return (
    <View style={{ flex: 1 }}>
      {foodsLoading && <Text>Loading...</Text>}
      {foodsError && <Text>Error: {foodsError.message}</Text>}
      {foodData && (
        <FlatList 
          data={foodData.data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View key={item._id} style={styles.foodBox}> 
              <View style={{ backgroundColor: 'white', flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>
                <Image 
                  style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 10 }} 
                  source={{ uri: `http://192.168.1.13:7464/${item.foodPic.replace(/\\/g, '/')}` }} 
                />
                <View>
                  <Text style={{ textAlign: 'center', alignSelf: 'center' }}>{item.name}</Text>
                </View>
                <Pressable style={{ justifyContent: 'center' }} onPress={() => handleDelete(item._id)}>
                  <Text style={{ backgroundColor: 'red', padding: 10 }}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  foodBox: {
    flexDirection: 'row',
    padding: 10,
  }
})

export default DeleteFood