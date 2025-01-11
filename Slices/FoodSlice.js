import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const foodApi = createApi({
    reducerPath:'foodApi',
    baseQuery:fetchBaseQuery({baseUrl:"http://192.168.1.10:7464/api/v1",
     prepareHeaders:async(headers)=>{
const token = await AsyncStorage.getItem("token");
if(token){
    headers.set('Authorization',`Bearer ${token}`)
}
return headers

     }}),
     tagTypes:['Food'],
     endpoints:(builder)=>({
        getFoods: builder.query({
            query:()=>({
                url:'/getallfoods',
                
            }),
            providesTags:['Food']
        })
     })
    } )
  export const {useGetFoodsQuery} = foodApi;