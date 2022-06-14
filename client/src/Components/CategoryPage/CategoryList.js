import "./CategoryList.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomePostersSlide, HomePostersSlide2 } from "../Adds/HomePostersSlide";
import { useEffect, useState } from "react";
import { Products } from "../../store/actions/Procucts";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetCart } from "../../store/actions/Cart";

const CategoryList = () => {
    const theProducts = useSelector((state) => state.Products.products);
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();

    const search = useLocation().search;
    const category = new URLSearchParams(search).get("category");

    //GET MORE PRODUCTS PROFILES
    // const getmore = () => {
    //     let page = theProducts.page + 1;
    //     dispatch(Products(theProducts, page, 4, category));
    // };

    const [filterdObj, setFilterdObj] = useState("newest");
    const handleFilter = (e) => {
        setFilterdObj(e.value);
    };

    const [quantity, setQuantity] = useState(1);

    const handlechange = (e) => {
        const q = e.target.value;
        setQuantity(q);
    };

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

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            margin: "0px",
            padding: "6px",
            borderBottom: "1px dotted silver",
            color: state.isSelected ? "white" : "black",
            backgroundColor: state.isSelected
                ? "rgba(245, 13, 13, 0.241)"
                : "white",
        }),

        control: (base) => ({
            ...base,
            margin: " 4px",
            border: "solid 1px silver",
            boxShadow: "none",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 0.8;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    const sortValues = [
        { value: "newest", label: "Newest" },
        { value: "oldest", label: "Oldest" },
        { value: "lowestPrice", label: "Lowest Price" },
        { value: "highestPrice", label: "Highest Price" },
    ];

    useEffect(() => {
        userId && dispatch(GetCart(userId));
        setTimeout(() => {
            dispatch(Products({}, 1, 10, category, filterdObj));
        }, 500);
    }, [dispatch, category, filterdObj]);

    return (
        <div className=" CategoryList">
            <div className="filterBox">
                <h3 id="categoryname">{category}</h3>
                <Select
                    className="select"
                    styles={customStyles}
                    options={sortValues}
                    placeholder={"Sort"}
                    onChange={handleFilter}
                />
            </div>
            <div className="CstegoryBox">
                {theProducts
                    ? theProducts.map((item) => (
                          <div className="categoryCard" key={item._id}>
                              <Link to={`/product/${item._id}`}>
                                  <img src={item.image} alt="laptop" />
                                  <div className="Details">
                                      <h2>{item.title}</h2>
                                      <p>
                                          <span>NGN</span>
                                          {item.price
                                              .toFixed(2)
                                              .replace(
                                                  /\d(?=(\d{3})+\.)/g,
                                                  "$&,"
                                              )}
                                      </p>
                                  </div>
                              </Link>

                              {userId && (
                                  <div className="actions">
                                      <div className="quantity">
                                          <select
                                              defaultValue={item.quantity}
                                              onChange={(e) => handlechange(e)}
                                          >
                                              <option value={1}>1 </option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>10</option>
                                          </select>
                                      </div>

                                      {item.inStock <= 0 ? (
                                          <button
                                              style={{
                                                  backgroundColor: "white",
                                                  color: "red",
                                                  border: "solid 1px red",
                                              }}
                                          >
                                              Out of Stock
                                          </button>
                                      ) : (
                                          <button
                                              onClick={() => {
                                                  addtocart(
                                                      item._id,
                                                      item.title,
                                                      item.image,
                                                      item.price,
                                                      quantity
                                                  );

                                                  setQuantity(1);
                                              }}
                                          >
                                              Add to cart
                                          </button>
                                      )}
                                  </div>
                              )}
                          </div>
                      ))
                    : null}
                <HomePostersSlide />

                {theProducts
                    ? theProducts.map((item) => (
                          <div className="categoryCard" key={item._id}>
                              <Link to={`/product/${item._id}`}>
                                  <img src={item.image} alt="laptop" />
                                  <div className="Details">
                                      <h2>{item.title}</h2>
                                      <p>
                                          <span>NGN</span>
                                          {item.price
                                              .toFixed(2)
                                              .replace(
                                                  /\d(?=(\d{3})+\.)/g,
                                                  "$&,"
                                              )}
                                      </p>
                                  </div>
                              </Link>

                              {userId && (
                                  <div className="actions">
                                      <div className="quantity">
                                          <select
                                              defaultValue={item.quantity}
                                              onChange={(e) => handlechange(e)}
                                          >
                                              <option value={1}>1 </option>
                                              <option value={2}>2</option>
                                              <option value={3}>3</option>
                                              <option value={4}>4</option>
                                              <option value={5}>5</option>
                                              <option value={6}>6</option>
                                              <option value={7}>7</option>
                                              <option value={8}>8</option>
                                              <option value={9}>9</option>
                                              <option value={10}>10</option>
                                          </select>
                                      </div>

                                      {item.inStock <= 0 ? (
                                          <button
                                              style={{
                                                  backgroundColor: "white",
                                                  color: "red",
                                                  border: "solid 1px red",
                                              }}
                                          >
                                              Out of Stock
                                          </button>
                                      ) : (
                                          <button
                                              onClick={() => {
                                                  addtocart(
                                                      item._id,
                                                      item.title,
                                                      item.image,
                                                      item.price,
                                                      quantity
                                                  );

                                                  setQuantity(1);
                                              }}
                                          >
                                              Add to cart
                                          </button>
                                      )}
                                  </div>
                              )}
                          </div>
                      ))
                    : null}

                <HomePostersSlide2 />
            </div>
        </div>
    );
};

export default CategoryList;
