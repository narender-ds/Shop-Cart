import "../src/Assets/css/css/mdb.dark.min.css";
import "../src/Assets/css/css/mdb.dark.min.css.map";
import "../src/Assets/css/css/mdb.dark.rtl.min.css";
import "../src/Assets/css/css/mdb.dark.rtl.min.css.map";
import "../src/Assets/css/css/mdb.min.css";
import "../src/Assets/css/css/mdb.rtl.min.css.map";
import Header from "../src/Components/layouts/Header";
import Footer from "../src/Components/layouts/Footer";
import HomePage from "./Pages/HomePage";
import Category from "../src/Components/commons/Category";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import WishList from "./Pages/WishList";
import MyCart from "./Pages/MyCart";
import ProductDetail from "./Components/commons/ProductDetail";
import BreadCrumbs from "./Components/commons/BreadCrumbs";
import Login from "./Auth/Login";
import ProductGridPage from "./Pages/ProductGridPage";
import SearchItemPage from "./Pages/SearchItemPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrumbs/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/productDetail" element={<ProductDetail/>} /> 
        <Route path="/productGrid" element={<ProductGridPage/>} /> 
        <Route path="/searchItemPage" element={<SearchItemPage/>} /> 



      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
