import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  deleteCart: "",
};

export const deleteItem = createAsyncThunk("deleteCart", async (id) => {
  const response = await axios
    .delete(`https://dummyjson.com/carts/${id}`)
    .then((res) => res.data);
  return response;
});

const DeleteCartSlice = createSlice({
  name: "deleteCart",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(deleteItem.pending, (state, action) => {
        console.log("deleteItemPending", state);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.deleteCart = action.payload;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        console.log("deletRejected", state);
      });
  },
});

export default DeleteCartSlice.reducer;
