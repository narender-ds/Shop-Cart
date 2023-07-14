import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  LoginUsers: [],
};

export const loginUsers = createAsyncThunk("loginUsers", async (userData) => {
    console.log('userData', userData)
  const response = await axios
    .post(
      "https://dummyjson.com/auth/login",
      {
        username: userData.email,
        password:userData.password
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) => res.data)
    .catch((error) => console.error(error));
  return response;
});

const LoginSlice=createSlice({
    name:"LoginUsers",
    initialState,
    extraReducers:(data)=>{
        data
        .addCase(loginUsers.pending,(state,action)=>{
            console.log('loginUsersPending', state)
        })
        .addCase(loginUsers.fulfilled,(state,action)=>{
            state.LoginUsers=action.payload
            console.log('loginUsersfulfilled', state)
        }).addCase(loginUsers.rejected,(state,action)=>{
            console.log('loginUsersrejected', state)
        })
    }
})
export default LoginSlice.reducer;
