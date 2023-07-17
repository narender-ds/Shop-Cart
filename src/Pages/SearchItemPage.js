import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetail } from '../Redux/slice/ProductDetailSlice'
import { addToCart } from '../Redux/slice/CartSlice/AddToCartSlice'
import { Link } from 'react-router-dom'

const SearchItemPage = () => {
    const dispatch=useDispatch()
    const SearchItems=useSelector((state)=>state?.searchProduct?.searchProduct)
    console.log('SearchItems', SearchItems)
  return (
    <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>
          <div className="row">
            {SearchItems?.products?.map((productItem, index) => {
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
  )
}

export default SearchItemPage