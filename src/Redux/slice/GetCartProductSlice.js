import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartProduct: [],
};
export const fetchCartProducts = createAsyncThunk("cartProduct", async(id) => {
    console.log('id', id)
  const response = await axios.get(`https://dummyjson.com/carts/user/${id}`).then((res) => console.log('res.data', res));
  return response;
});

const GetCartProductSlice = createSlice({
  name: "cartProduct",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(fetchCartProducts.pending, (state, action) => {
        console.log("CartPending", state);
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.cartProduct = action.payload;
        console.log("Cartaction.payload", action.payload);
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        console.log("Cartrejected", state);
      });
  },
});

export default GetCartProductSlice.reducer;
