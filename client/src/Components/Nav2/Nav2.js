import React, { useState } from "react";
import "./Nav2.css";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";
import { Search } from "../../store/actions/Search";
import SideNav from "../SidNav/SideNav";

const Nav2 = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const searchsugestions = useSelector((state) => state.Search);
    const dispatch = useDispatch();
    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    const [togleNav, setTogleNav] = useState(false);
    const [querytext, setQueryText] = useState(null);

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
            margin: "auto",
            border: "solid 1px silver",
            boxShadow: "none",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 0.8;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    const queryFunction = (e) => {
        setQueryText(e.target.value);
        if (e.target.value) {
            dispatch(Search(e.target.value));
        }
    };

    const searchFunction = () => {
        if (querytext) {
            dispatch(Search(querytext));
            window.location.replace(`/searchresult?search=${querytext}`);
        }
    };

    const selectValues = [
        { value: "computer", label: "Computers" },
        { value: "laptop", label: "Laptops" },
        { value: "accesory", label: "Accesories" },
        { value: "officetech", label: "Office Tech" },
        { value: "phone", label: "Smart Phones" },
        { value: "battery", label: "Battries" },
        { value: "cctv", label: "CCTV" },
        { value: "gameconsole", label: "Game Consoles" },
    ];
    const selectedValue = (value) => {
        let itemList = value.value;
        window.location.replace(`/categoryList?category=${itemList}`);
    };

    return (
        <>
            <div className="nav2">
                <IconContext.Provider
                    value={{
                        color: "red",
                        size: "24px",
                    }}
                >
                    <div className="search">
                        <input
                            type="text"
                            className="searchInput"
                            placeholder="search"
                            onChange={(e) => queryFunction(e)}
                        />

                        <button className="searchBtn" onClick={searchFunction}>
                            <MdSearch color="white" size="22px" />
                        </button>
                    </div>
                    <div className="ctegorylist">
                        <Select
                            className="select"
                            styles={customStyles}
                            options={selectValues}
                            placeholder={"Categories"}
                            onChange={(e) => selectedValue(e)}
                        />

                        <h3
                            id="menuicon"
                            onClick={() =>
                                togleNav
                                    ? setTogleNav(false)
                                    : setTogleNav(true)
                            }
                        >
                            <MdMenu color="rgb(102, 100, 100)" size="22px" />
                        </h3>
                    </div>
                </IconContext.Provider>
                <SideNav togle={{ togleNav, setTogleNav }} />
            </div>
            {querytext && (
                <div id="searchsugestions">
                    <h3 onClick={() => setQueryText(null)}>
                        <MdClose size={20} color="silver" />
                    </h3>
                    {searchsugestions &&
                        searchsugestions.map((item) => (
                            <Link to={`/searchresult?search=${item.title}`}>
                                <p key={item._id}>{item.title}</p>
                            </Link>
                        ))}
                </div>
            )}
        </>
    );
};

export default Nav2;
