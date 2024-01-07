import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './features/productFeature';
import productReducer from './slice/productSlice';
const store = configureStore({
  reducer: {
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
