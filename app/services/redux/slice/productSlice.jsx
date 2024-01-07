import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  banners: [],
  categories: [],
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState: initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setBanners, setCategories } = productSlice.actions;
export const getBanners = (state) => state.products.banners;
export const getAllCategories = (state) => state.products.categories;
export default productSlice.reducer;
