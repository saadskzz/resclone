import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Form from './Form';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useGetCategoriesQuery, useCreateCategoryMutation } from '../Slices/CategorySlice';
import { useCreateFoodsMutation } from '../Slices/FoodSlice';
import CustomButton from './CustomButton';
import ImagePickers from './ImagePickers';

const AddFoodForm = () => {
  const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
  
  const [value, setValue] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [foodPic, setFoodPic] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDes] = useState('');
  const [isFocus, setIsFocus] = useState(false);
 
  const [createFood] = useCreateFoodsMutation();

  const handleCreateFood = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('foodPic', {
        uri: foodPic,
        name: 'foodPic.jpg',
        type: 'image/jpeg'
      });

      const response = await createFood(formData);
      console.log('Response:', response);
    } catch (error) {
      console.error(error);
    }
  };

  if (categoryLoading) {
    return <Text>Loading...</Text>;
  }

  if (categoryError) {
    return <Text>Error loading categories</Text>;
  }

  const categories = categoryData?.data?.map(category => ({
    label: category.catName,
    value: category._id,
  })) || [];

  return (
    <View style={{ backgroundColor: 'pink' }}>
      <Text>Add Food Form</Text>
      <Form placeholder='Enter Food Name' name='pluscircle' states={setName} />
      <Form placeholder='Enter Food Price' name='foodprice' states={setPrice} />
      <Form placeholder='Enter Food Description' name='description' states={setDes} />
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={categories}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setCategory(item.value);
        }}
      />
      <ImagePickers setImage={setFoodPic} />
      <CustomButton button={'create Food'} onPress={handleCreateFood} />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AddFoodForm;