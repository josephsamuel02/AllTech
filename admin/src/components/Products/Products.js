import "./Products.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsArrowDownUp } from "react-icons/bs";
import { useState, useEffect } from "react";
import AddProduct from "./AddProduct";

const Products = () => {
    const [hide, setHide] = useState("products");
    const changeView = () => {
        hide == "addProducts" ? setHide("products") : setHide("addProducts");
    };
    return (
        <div className="products">
            <IconContext.Provider
                value={{
                    color: `rgb(228, 24, 24)`,
                    size: "16px",
                }}
            >
                <div>
                    {hide == "addProducts" && (
                        <button className="changeBTN" onClick={changeView}>
                            <p>
                                <BsArrowDownUp />
                            </p>
                            <p> View Products</p>
                        </button>
                    )}
                    {hide == "products" && (
                        <button className="changeBTN" onClick={changeView}>
                            <p>
                                <BsArrowDownUp />
                            </p>
                            <p> Add Products</p>
                        </button>
                    )}
                </div>

                {hide == "products" && (
                    <>
                        <h2 id="catheader">Products Categories</h2>
                        <div className="ctegorylist">
                            <span>Find by: </span>

                            <select
                                name="filter"
                                id="category"
                                defaultValue={"categories"}
                            >
                                <option disabled>Categories</option>
                                <option value="computer">Computers</option>
                                <option value="laptop">Laptops</option>
                                <option value="accesory">Accessories</option>
                                <option value="phone">Mobile Phones</option>
                                <option value="accessories">Electronics</option>
                                <option value="battery">Batteries</option>
                                <option value="cctv">CCTV</option>
                            </select>
                        </div>
                        <div className="categorybox">
                            <Link to={"/productslist?category=computer"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/210"
                                        alt=""
                                    />

                                    <h4>Computers</h4>
                                </div>
                            </Link>

                            <Link to={"/productslist?category=laptop"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Laptops</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=phone"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/240"
                                        alt=""
                                    />

                                    <h4> Mobile Phones</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=electronic"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/150"
                                        alt=""
                                    />

                                    <h4>Electronics</h4>
                                </div>
                            </Link>

                            <Link to={"/productslist?category=gaming"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/234"
                                        alt=""
                                    />

                                    <h4>Gaming Consoles</h4>
                                </div>
                            </Link>
                        </div>
                    </>
                )}

                {hide == "addProducts" && <AddProduct />}
            </IconContext.Provider>
        </div>
    );
};

export default Products;
