import React, { useEffect } from "react";
import Features from "./Features";
import BlogPage from "./BlogPage";
import { fetchProducts } from "../Redux/slice/FetchProductsSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../Redux/slice/ProductDetailSlice";
import { addToCart } from "../Redux/slice/CartSlice/AddToCartSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const ProductData = useSelector((state) => state.allProducts.allProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="bg-primary text-white py-5">
        <div className="container py-5">
          <h1>
            Best products &amp; <br />
            brands in our store
          </h1>
          <p>Trendy Products, Factory Prices, Excellent Service</p>
          <button type="button" className="btn btn-outline-light">
            Learn more
          </button>
          <button
            type="button"
            className="btn btn-light shadow-0 text-primary pt-2 border border-white"
          >
            <span className="pt-1">Purchase now</span>
          </button>
        </div>
      </div>
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>
          <div className="row">
            {ProductData?.products?.map((productItem, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                  <div className="card w-100 my-2 shadow-2-strong">
                    <Link onClick={()=>dispatch(fetchProductDetail(productItem.id))} to={"/productdetail"}>
                    <img
                      src={productItem.thumbnail}
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                    </Link>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{productItem.title}</h5>
                      <p className="card-text">${productItem.price}</p>
                      <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                        <button className="btn btn-primary shadow-0 me-1" onClick={()=>dispatch(addToCart(productItem))}>
                          Add to cart
                        </button>
                        <button className="btn btn-light border px-2 pt-2 icon-hover">
                          <i className="fas fa-heart fa-lg text-secondary px-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Features />
      <BlogPage />
    </>
  );
};

export default HomePage;
