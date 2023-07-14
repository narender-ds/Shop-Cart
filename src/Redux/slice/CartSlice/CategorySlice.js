import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  category: [],
};

export const fetchCategory = createAsyncThunk("category", async () => {
  const response = await axios
    .get("https://dummyjson.com/products/categories")
    .then((res) => res.data);
  return  response;
});



const CategorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(fetchCategory.pending, (state, action) => {
        console.log("categoryPending", state);
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        console.log("categoryrejected", state);
      });
  },
});

export default CategorySlice.reducer;
