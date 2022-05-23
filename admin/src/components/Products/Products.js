import "./Products.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { BsArrowDownUp } from "react-icons/bs";
import { useState, useEff } from "react";
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
                        <h2>Products Categories</h2>
                        <div className="ctegorylist">
                            <span>Find by: </span>

                            <select
                                name="filter"
                                id="category"
                                defaultValue={"categories"}
                            >
                                <option disabled>Categories</option>
                                <option value="food stuffs">
                                    Food Ftuffs{" "}
                                </option>
                                <option value="vegitsblesandspices">
                                    Vegitsbles and Spices
                                </option>
                                <option value="grosery">Groceries</option>
                                <option value="computers">Computers</option>
                                <option value="accessories">Accessories</option>
                                <option value="fashion">
                                    Fashion & Clothing
                                </option>
                                <option value="pets">Pets</option>
                            </select>
                        </div>
                        <div className="categorybox">
                            <Link to={"/productslist?category=food stuffs"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Food Stuffs</h4>
                                </div>
                            </Link>

                            <Link to={"/productslist?category=grosery"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Groseries</h4>
                                </div>
                            </Link>
                            <Link
                                to={"/productslist?category=sport and fitness"}
                            >
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4> Sports & Fitness</h4>
                                </div>
                            </Link>
                            <Link
                                to={
                                    "/productslist?category=mobile and accessories"
                                }
                            >
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Mobile & Accesories</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=gift items"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Gift Items</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=electronics"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Electronics</h4>
                                </div>
                            </Link>

                            <Link to={"/productslist?category=computers"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Computers</h4>
                                </div>
                            </Link>

                            <Link to={"/productslist?category=cusmetics"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Beauty & Cusmetics</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=health"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Health</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=fashion"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Fashion & Clothing</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=pets"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Pets</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=music"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Music</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=kitchen"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Kitchen</h4>
                                </div>
                            </Link>
                            <Link
                                to={"/productslist?category=baby kits and toys"}
                            >
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Baby Kits & Toys</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=books and media"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Books & Media Library</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=drinks"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Drinks & Beverage</h4>
                                </div>
                            </Link>
                            <Link to={"/productslist?category=gaming"}>
                                <div className="categorycard">
                                    <img
                                        src="https://picsum.photos/250"
                                        alt=""
                                    />

                                    <h4>Gaming</h4>
                                </div>
                            </Link>
                        </div>{" "}
                    </>
                )}

                {hide == "addProducts" && <AddProduct />}
            </IconContext.Provider>{" "}
        </div>
    );
};

export default Products;
