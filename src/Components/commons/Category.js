import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../Redux/slice/CartSlice/CategorySlice";
import { Link } from "react-router-dom";
import { fetchCategoryData } from "../../Redux/slice/CartSlice/FetchCategoryData";

const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  },[]);
  const CategoryItems = useSelector((state) => state.category);
  return (
    <>
      <section>
        <div className="container pt-5">
          <nav className="row gy-4">
            <div className="col-lg-6 col-md-12">
              <div className="row">
                {CategoryItems?.category.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <Link
                      to={"/productGrid"}
                        className="text-center d-flex flex-column justify-content-center"
                      >
                        <button
                          type="button"
                          className="btn btn-outline-secondary mx-auto p-3 mb-2"
                          data-mdb-ripple-color="dark"
                          onClick={()=>dispatch(fetchCategoryData(item))}
                        >
                          <i className="fas fa-couch fa-xl fa-fw" />
                        </button>
                        <div className="text-dark">{item}</div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Category;
