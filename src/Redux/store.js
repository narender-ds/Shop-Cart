import {configureStore} from "@reduxjs/toolkit"
import ProductSlice from "./slice/FetchProductsSlice"
import ProductDetailSlice from "./slice/ProductDetailSlice"
import GetCartProductSlice from "./slice/GetCartProductSlice"
import AddToCartSlice from "./slice/CartSlice/AddToCartSlice"
import SignUpSlice from "./slice/AuthSlice/SignUpSlice"
import CategorySlice from "./slice/CartSlice/CategorySlice"
import FetchCategoryData from "./slice/CartSlice/FetchCategoryData"
import DeleteCartSlice from "./slice/CartSlice/DeleteCartSlice"
import SearchProductSlice from "./slice/SearchProductSlice"

export const store =configureStore({
    reducer:{
        users:SignUpSlice,
        allProducts:ProductSlice,
        productDetail:ProductDetailSlice,
        addProducts:AddToCartSlice,
        cartProduct:GetCartProductSlice,
        category:CategorySlice,
        categoryData:FetchCategoryData,
        deleteCart:DeleteCartSlice,
        searchProduct:SearchProductSlice
    }
})