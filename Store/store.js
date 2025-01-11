import { configureStore } from "@reduxjs/toolkit";
import {authApi} from '../Slices/AuthSlice'
import { foodApi } from "../Slices/FoodSlice";
import { categoryApi } from "../Slices/CategorySlice";
import cartreducer from '../Slices/CartSlice'
 const store = configureStore({
    reducer:{
    cart: cartreducer,
    [authApi.reducerPath] : authApi.reducer,
    [foodApi.reducerPath] : foodApi.reducer,
    [categoryApi.reducerPath] : categoryApi.reducer
    },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,foodApi.middleware,categoryApi.middleware), // Ensure correct syntax

})
export default store;