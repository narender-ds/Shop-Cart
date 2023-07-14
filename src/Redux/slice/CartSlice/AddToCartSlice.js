import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  addProducts: [],
};

export const addToCart = createAsyncThunk("addItem", async (data) => {
  const response = await axios
    .post(
      "https://dummyjson.com/carts/add",
      {
        userId: 10,
        products: [
          {
            id: data.id,
            quantity: 1,
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => res.data)
    .catch((error) => console.error(error));
  return response;
});


const AddToCartSlice = createSlice({
  name: "addProducts",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(addToCart.pending, (state, action) => {
        console.log("AddToCartPending", state);
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.addProducts = action.payload;
        console.log("state.addProducts", state.addProducts.products);
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.log("AddToCartRejetced", state);
      });
  },
});

export default AddToCartSlice.reducer;
