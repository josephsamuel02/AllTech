import "./HomePageProducts.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { HomeProducts } from "../../store/actions/HomeProducts";
import { AddToCart, GetCart } from "../../store/actions/Cart";
import { useDispatch, useSelector } from "react-redux";

const HomePageProducts = () => {
    const theProducts = useSelector((state) => state.HomeProducts.products);
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.LogIn._id);

    const addtocart = (productId, title, image, price, quantity) => {
        const prod = {
            userId: userId,
            productId: productId,
            title: title,
            image: image,
            price: price,
            quantity: quantity,
        };
        dispatch(AddToCart(prod));
        setTimeout(() => userId && dispatch(GetCart(userId)), 500);
    };

    useEffect(() => {
        dispatch(HomeProducts({}, 1, 10));
        userId && dispatch(GetCart(userId));
    }, [dispatch]);

    // GET MORE
    // const getmore = () => {
    //     let page = theProducts.page + 1;

    //     dispatch(Products(theProducts, page, 4));
    // };

    return (
        <div id="products">
            {theProducts
                ? theProducts.map((item) => (
                      <div className="productsCard" key={item._id}>
                          <Link to={`/product/${item._id}`}>
                              <img src={item.image} alt="" />
                              <div className="detail">
                                  <h5 className="pname">{item.title}</h5>
                                  <span>more..</span>
                                  <p className="pprice">
                                      <span>NGN </span>
                                      {item.price
                                          .toFixed(2)
                                          .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                                  </p>
                              </div>
                          </Link>
                          {userId && (
                              <button
                                  onClick={() =>
                                      addtocart(
                                          item._id,
                                          item.title,
                                          item.image,
                                          item.price,
                                          1
                                      )
                                  }
                              >
                                  ADD TO CART
                              </button>
                          )}
                      </div>
                  ))
                : null}
        </div>
    );
};

export default HomePageProducts;
