import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const addUsers = createAsyncThunk("addUsers", async (userData) => {
  console.log("userData", userData);
  const response = await axios
    .post(
      "https://dummyjson.com/users/add",
      {
        firstName: userData.firstname,
        lastName: userData.lastname,
        email: userData.email,
        username: userData.username,
        password: userData.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => res.data)
    .catch((error) => console.error(error));
  return response;
});

const SignUpSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (data) => {
    data
      .addCase(addUsers.pending, (state, action) => {
        console.log("addUserPending", state);
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.addUsers = action.payload;
        console.log("addUserfulfilled", state);
      })
      .addCase(addUsers.rejected, (state, action) => {
        console.log("addUserrejected", state);
      });
  },
});
export default SignUpSlice.reducer;
