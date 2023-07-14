import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    categoryData:[]
}
export const fetchCategoryData=createAsyncThunk("categoryData", async(category)=>{
    const response=await axios.get(`https://dummyjson.com/products/category/${category}`).then((res)=>res.data)
    return response
})
const CategoryDataSlice=createSlice({
    name:"categoryData",
    initialState,
    extraReducers:(data)=>{
        data
        .addCase(fetchCategoryData.pending,(state,action)=>{
            console.log('categoryDataPending', state)
        })
        .addCase(fetchCategoryData.fulfilled,(state,action)=>{
            state.categoryData=action.payload
        }).addCase(fetchCategoryData.rejected,(state,action)=>{
            console.log('categoryDataRejected', state)
        })
    }
})

export default CategoryDataSlice.reducer