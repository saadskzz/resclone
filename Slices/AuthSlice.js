import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const authApi = createApi({
    reducerPath : "authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://192.168.1.13:7464/auth"
    }),
 endpoints:(builder)=>({
    signUpUser: builder.mutation({
        query:(userData)=>({
            url: '/signup',
            method:'POST',
            body: userData
        })
    }),
    loginUser: builder.mutation({
        query:(credentials)=>({   
        url:'/login',
        method:'POST',
        body:credentials
        })

    })
 })
})
export const {useSignUpUserMutation,useLoginUserMutation} = authApi;
