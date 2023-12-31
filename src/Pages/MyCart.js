import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartProducts } from "../Redux/slice/GetCartProductSlice";
import { deleteItem } from "../Redux/slice/CartSlice/DeleteCartSlice";

const MyCart = () => {
  const dispatch = useDispatch();
  const CartData = useSelector((state) => state?.addProducts?.addProducts);
  const cartProduct = useSelector(
    (state) => state.cartProduct?.cartProduct?.carts
  );
  useEffect(() => {
    dispatch(fetchCartProducts(CartData.userId));
  }, []);

  return (
    <>
      <section className="bg-light my-5">
        <div className="container">
          <div className="row">
            {/* cart */}
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {cartProduct?.map((items, index) => {
                    return items?.products?.map((item, index) => {
                      return (
                        <div className="row gy-3 mb-4" key={index}>
                          <div className="col-lg-5">
                            <div className="me-lg-5">
                              <div className="d-flex">
                                <img
                                  src={item}
                                  className="border rounded me-3"
                                  style={{ width: 96, height: 96 }}
                                />
                                <div className="">
                                  <a href="#" className="nav-link">
                                    {item.title}
                                  </a>
                                  <p className="text-muted">Yellow, Jeans</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                            <div className="">
                              <select
                                style={{ width: 100 }}
                                className="form-select me-4"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                            <div className="">
                              <text className="h6">${item.price}</text> <br />
                              <small className="text-muted text-nowrap">
                                {" "}
                                ${item.price} / per item{" "}
                              </small>
                            </div>
                          </div>
                          <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                            <div className="float-md-end">
                              <a
                                href="#!"
                                className="btn btn-light border px-2 icon-hover-primary"
                              >
                                <i className="fas fa-heart fa-lg px-1 text-secondary" />
                              </a>
                              <button
                                className="btn btn-light border text-danger icon-hover-danger"
                                onClick={()=>dispatch(deleteItem(item.id))}
                              >
                                {" "}
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })}
                </div>
                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg" /> Free
                    Delivery within 1-2 weeks
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">$329.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-$60.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">$14.00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">$283.00</p>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-success w-100 shadow-0 mb-2">
                      {" "}
                      Make Purchase{" "}
                    </a>
                    <a href="#" className="btn btn-light w-100 border mt-2">
                      {" "}
                      Back to shop{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* summary */}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCart;
