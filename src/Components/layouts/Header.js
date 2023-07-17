import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { fetchSearchProducts } from "../../Redux/slice/SearchProductSlice";
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [inputValue,setInputValue]=useState("")
  return (
    <>
      <header>
        {/* Jumbotron */}
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">
              {/* Left elements */}
              <div className="col-lg-2 col-sm-4 col-4">
                <Link to={"#"} className="float-start">
                  <img src="" height={35} />
                </Link>
              </div>
              {/* Left elements */}
              {/* Center elements */}
              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex float-end">
                  <Link
                    to={"/signUp"}
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                  >
                    {" "}
                    <i className="fas fa-user-alt m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">Sign in</p>{" "}
                  </Link>
                  <Link
                    to={"/wishList"}
                    className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                  >
                    {" "}
                    <i className="fas fa-heart m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">Wishlist</p>{" "}
                  </Link>
                  <Link
                    to={"/myCart"}
                    className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                  >
                    {" "}
                    <i className="fas fa-shopping-cart m-1 me-md-2" />
                    <p className="d-none d-md-block mb-0">My cart</p>{" "}
                  </Link>
                </div>
              </div>
              {/* Center elements */}
              {/* Right elements */}
              <div className="col-lg-5 col-md-12 col-12">
                <div className="input-group float-center">
                  <div className="form-outline">
                    <input type="search" id="form1" className="form-control" onChange={(e)=>setInputValue(e.target.value)}/>
                    <label className="form-label" htmlFor="form1">
                      Search
                    </label>
                  </div>
                  <button type="button" className="btn btn-primary shadow-0" onClick={()=>dispatch(fetchSearchProducts(inputValue),navigate("/searchItemPage") )}>
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
              {/* Right elements */}
            </div>
          </div>
        </div>
        {/* Jumbotron */}
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          {/* Container wrapper */}
          <div className="container justify-content-center justify-content-md-between">
            {/* Toggle button */}
            <button
              className="navbar-toggler border py-2 text-dark"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarLeftAlignExample"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div
              className="collapse navbar-collapse"
              id="navbarLeftAlignExample"
            >
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"/category"}>
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"#"}>
                    Hot offers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"#"}>
                    Gift boxes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"#"}>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"#"}>
                    Menu item
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to={"#"}>
                    Menu name
                  </Link>
                </li>
                {/* Navbar dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-dark"
                    to={"#"}
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </Link>
                  {/* Dropdown menu */}
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to={"#"}>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"#"}>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"#"}>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Left links */}
            </div>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
    </>
  );
};

export default Header;
