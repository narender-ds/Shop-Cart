import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],

};
export const fetchProducts = createAsyncThunk("products", async () => {
  const response = await axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data);
  return response;
});

const FetchProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(fetchProducts.pending, (state, action) => {
        console.log("fetchProductsPending", state);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        console.log('fetchProducts', state.allProducts)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("fetchProductsRejected", state);
      });
  },
});

export default FetchProductsSlice.reducer;
