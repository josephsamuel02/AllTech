import React, { useState } from "react";
import "./Nav2.css";
import { MdSearch, MdMenu } from "react-icons/md";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";
import SideNav from "../SidNav/SideNav";

const Nav2 = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();
    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    const [togleNav, setTogleNav] = useState(false);

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

    const selectValues = [
        { value: "computer", label: "Computers" },
        { value: "laptop", label: "Laptops" },
        { value: "accesories", label: "Accesories" },
        { value: "officetech", label: "Office Tech" },
        { value: "phone", label: "Smart Phones" },
        { value: "battry", label: "Battries" },
        { value: "cctv", label: "CCTV" },
        { value: "gameconsoles", label: "Game Consoles" },
    ];
    const selectedValue = (value) => {
        let itemList = value.value;
        window.location.replace(`/categoryList?category=${itemList}`);
    };
    return (
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
                    />

                    <button className="searchBtn">
                        <MdSearch color="white" size="22px" />
                    </button>
                </div>
                <div className="ctegorylist">
                    <Select
                        className="select"
                        styles={customStyles}
                        options={selectValues}
                        placeholder={"Categories"}
                        onChange={selectedValue}
                    />

                    <h3
                        id="menuicon"
                        onClick={() =>
                            togleNav ? setTogleNav(false) : setTogleNav(true)
                        }
                    >
                        <MdMenu color="rgb(102, 100, 100)" size="22px" />
                    </h3>
                </div>
            </IconContext.Provider>
            <SideNav togle={{ togleNav, setTogleNav }} />
        </div>
    );
};

export default Nav2;
