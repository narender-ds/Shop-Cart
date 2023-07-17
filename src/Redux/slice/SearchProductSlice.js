import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  searchProduct: [],
};
export const fetchSearchProducts = createAsyncThunk("searchProduct", async(data) => {
    console.log('data', data)
  const response = await axios.get(`https://dummyjson.com/products/search?q=${data}`).then((res) =>  res.data);
  return response;
});

const SearchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(fetchSearchProducts.pending, (state, action) => {
        console.log("CartPending", state);
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.searchProduct = action.payload;
        console.log("Cartaction.payload", action.payload);
      })
      .addCase(fetchSearchProducts.rejected, (state, action) => {
        console.log("Cartrejected", state);
      });
  },
});

export default SearchProductSlice.reducer;
