import "./ProductsList.css";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Products } from "../../store/actions/Procucts";

import { HomeProducts } from "../../store/actions/HomeProducts";
import { useDispatch, useSelector } from "react-redux";

const ProductsList = () => {
    // const theProducts = useSelector((state) => state.HomeProducts.products);
    const theProducts = useSelector((state) => state.Products.products);

    const dispatch = useDispatch();
    const page = useSelector((state) => state.HomeProducts.page);

    const userId = useSelector((state) => state.LogIn._id);

    const search = useLocation().search;
    const category = new URLSearchParams(search).get("category");

    const [filterdObj, setFilterdObj] = useState("newest");
    const handleFilter = (e) => {
        setFilterdObj(e.target.value);
    };

    // GET CATEGORIES PRODUCTS
    useEffect(() => {
        dispatch(Products({}, 1, 5, category, filterdObj));
    }, [dispatch, category, filterdObj]);

    // GET MORE
    const getmore = () => {
        let nextpage = Number(page) + 1;
        console.log(nextpage);
        dispatch(Products(theProducts, nextpage, 5, category, filterdObj));
    };

    // GET ALL PRODUCTS
    // useEffect(() => {
    //     dispatch(HomeProducts({}, 1, 5));
    // }, [dispatch]);
    // console.log(page);

    return (
        <div className="productslist">
            <h2>Products </h2>

            <h3>{category}</h3>

            <div className="filterBox">
                <h4>Sort Products:</h4>

                <select
                    name="filter"
                    defaultValue={"options"}
                    id="filter"
                    onChange={handleFilter}
                >
                    <option disabled>Options</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="lowestPrice">Lowest Price</option>
                    <option value="highestPrice">Highest Price</option>
                </select>
            </div>

            <div className="listcategorybox">
                {theProducts &&
                    theProducts.map((i) => (
                        <Link key={i._id} to={"/product"}>
                            <div className="listcategorycard">
                                <img src={i.image} alt="" />
                                <div className="detail">
                                    <h4>{i.title} </h4>
                                    <p>
                                        Staus:
                                        {i.inStock == true ? (
                                            <span> instock</span>
                                        ) : (
                                            <span style={{ color: "red" }}>
                                                out of stuck
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                <button onClick={() => getmore()}>Load more</button>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                {/* <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus:
                                <span style={{ color: "red" }}>
                                    out of stuck
                                </span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={"/product"}>
                    <div className="listcategorycard">
                        <img src="https://picsum.photos/250" alt="" />
                        <div className="detail">
                            <h4>Product name </h4>
                            <p>
                                Staus: <span>instock</span>
                            </p>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default ProductsList;
