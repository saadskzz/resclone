import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath:'categoryApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://192.168.1.10:7464/api"
    }),
    tagTypes:['category'],
    endpoints:(builder)=>({
        getCategories: builder.query({
            query: ()=>({
                url:"/getcategory"
            }),
            providesTags:['category']
        })
        

    })
})
export const {useGetCategoriesQuery} = categoryApi