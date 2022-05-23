import React, { useState } from "react";
import "./SideNav.css";
import { MdLogout, MdPerson } from "react-icons/md";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";

const SideNav = ({ togle }) => {
    const userId = useSelector((state) => state.LogIn._id);

    const dispatch = useDispatch();

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    const logUserOut = () => {
        localStorage.removeItem("persist:root");
        window.location.replace("/login");
    };

    return (
        <div
            className="sidenav"
            style={{ width: togle.togleNav ? "40vw" : "0vw" }}
        >
            <IconContext.Provider
                value={{
                    color: "black",
                    size: "17px",
                }}
            >
                <ul id="navcontainer">
                    <p>
                        <MdPerson /> Account Settings
                    </p>
                    {userId && (
                        <p id="logOut" onClick={() => logUserOut()}>
                            <MdLogout /> LogOut
                        </p>
                    )}
                </ul>
            </IconContext.Provider>
        </div>
    );
};

export default SideNav;
