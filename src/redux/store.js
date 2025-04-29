import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./Product/ProductSlice"

export const store = configureStore({
  reducer: {
    Product: ProductReducer,
  },
})