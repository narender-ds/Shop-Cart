import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./slice/FetchProductsSlice"
import ProductDetailSlice from "./slice/ProductDetailSlice"
import GetCartProductSlice from "./slice/GetCartProductSlice"
import AddToCartSlice from "./slice/CartSlice/AddToCartSlice"
import SignUpSlice from "./slice/AuthSlice/SignUpSlice"

export const store =configureStore({
    reducer:{
        users:SignUpSlice,
        allProducts:ProductSlice,
        productDetail:ProductDetailSlice,
        addProducts:AddToCartSlice,
        cartProduct:GetCartProductSlice
    }
})