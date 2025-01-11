import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

function Form({ placeholder, name,value,states }) {
  
  const validPlaceholder = placeholder || '';

  return (
    <View style={styles.formBox}>
      <AntDesign name={name} size={24} color="white" style={{ marginRight: 10 }} />
      <TextInput
        placeholder={placeholder}
        style={styles.formStyle}
        placeholderTextColor="white"
        value={value}
        onChangeText={states}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formBox: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: "center",
    padding: 10,
    paddingBottom: 3
  },
  formStyle: {
    fontSize: 16,
  }
});

export default Form;
