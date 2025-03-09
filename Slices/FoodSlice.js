import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.13:7464/api/v1",
    prepareHeaders: async (headers) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Food'],
  endpoints: (builder) => ({
    getFoods: builder.query({
      query: () => ({
        url: '/getallfoods',
      }),
      providesTags: ['Food']
    }),
    createFoods: builder.mutation({
      query: (cred) => ({
        url: '/createfood',
        method: 'POST',
        body: cred
      }),
      invalidatesTags: ['Food']
    }),
    deleteFoods: builder.mutation({
      query: (foodid) => ({
        url: `/deletefood/${foodid}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Food']
    })
  })
})

export const { useGetFoodsQuery, useCreateFoodsMutation, useDeleteFoodsMutation } = foodApi;