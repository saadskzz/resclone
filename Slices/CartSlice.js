import { StyleSheet, Text, View } from 'react-native'
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    items :[]
}

export const CartSlice = createSlice({
    name: 'items',
    initialState,
    reducers:{
        addCartItems:(state,action)=>{
  const {itemId,name,price,quantity,foodPic} = action.payload;
  const existingItem = state.items.find((item) => item.itemId === itemId);
  if(existingItem){
    existingItem.quantity += quantity
  }else{
  state.items.push({itemId,name,price,quantity,foodPic})
              }      },
        increment:(state,action)=>{
            const item = state.items.find(item=> item.itemId === action.payload );
            if (item ) {
                item.quantity += 1;
            }
        },
        decrement:(state,action)=>{
            const item = state.items.find(item=> item.id === action.payload );
            if (item && item.quantity > 0) {
                item.quantity -= 1;
            }
        }
    }
})
export const {increment,decrement,addCartItems} = CartSlice.actions;
export default CartSlice.reducer;