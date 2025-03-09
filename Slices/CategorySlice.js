import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.13:7464/api"
  }),
  tagTypes: ['category'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/getcategory"
      }),
      providesTags: ['category']
    }),
    createCategory: builder.mutation({
      query: (cred) => ({
        url: '/createcategory',
        method: 'POST',
        body: cred,
      }),
      invalidatesTags: ['category']
    })
  })
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } = categoryApi;