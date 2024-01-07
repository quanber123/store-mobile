import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.15:3000/api/' }),
  tagTypes: ['Products', 'Banners', 'Categories'],
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: (query) => {
          if (!query) return `products?page=1`;
          return `products?${query.search}`;
        },
      }),
      getProductById: builder.query({
        query: (id) => `products/${id}`,
        providesTags: ['Products'],
      }),
      getBanners: builder.query({
        query: () => 'banners',
        providesTags: ['Banners'],
      }),
      getCategories: builder.query({
        query: () => 'categories',
        providesTags: ['Categories'],
      }),
    };
  },
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetBannersQuery,
  useGetCategoriesQuery,
} = productApi;
