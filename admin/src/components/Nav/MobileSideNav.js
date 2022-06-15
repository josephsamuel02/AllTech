import "./MobileSideNav.css";

import { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import {
    BsHouse,
    BsGraphUp,
    BsCart,
    BsCollection,
    BsPeople,
    BsShopWindow,
    BsPersonBadge,
    BsBoxArrowInLeft,
} from "react-icons/bs";
import { MdMenu, MdClose } from "react-icons/md";
const MobileSideNav = () => {
    const [openNav, closeNave] = useState(false);
    const logUserOut = () => {
        localStorage.removeItem("persist:root");
        window.location.replace("/login");
    };

    return (
        <>
            <h3 id="opennave" onClick={() => closeNave(!openNav)}>
                <MdMenu />
            </h3>

            {openNav ? (
                <div className="mobilesideNav">
                    <IconContext.Provider
                        value={{
                            color: `rgb(228, 24, 24)`,
                            size: "20px",
                        }}
                    >
                        <h3 id="closenave" onClick={() => closeNave(!openNav)}>
                            <MdClose
                                color="rgba(128, 128, 128, 0.571)"
                                size="20px"
                            />
                        </h3>

                        <h1 className="logo">ALLTECH</h1>
                        <p className="admintitle">Admin Pannel</p>

                        <div className="navBox">
                            <br />
                            <Link to={"/"}>
                                <div className="navitem">
                                    <p>
                                        <BsHouse />
                                    </p>
                                    <p>Home</p>
                                </div>
                            </Link>
                            <Link to={"/analytics"}>
                                <div className="navitem">
                                    <p>
                                        <BsGraphUp />
                                    </p>
                                    <p> Analytics</p>
                                </div>
                            </Link>
                            <br />
                            <Link to={"/orders"}>
                                <div className="navitem">
                                    <p>
                                        <BsCart />
                                    </p>
                                    <p>Orders</p>
                                </div>
                            </Link>
                            <Link to={"/products"}>
                                <div className="navitem">
                                    <p>
                                        <BsCollection />
                                    </p>
                                    <p> Products</p>
                                </div>
                            </Link>
                            <br /> <h5 className="dashboard">Quick Menue</h5>
                            <Link to={"/userslist"}>
                                <div className="navitem">
                                    <p>
                                        <BsPeople />
                                    </p>
                                    <p>Users</p>
                                </div>
                            </Link>
                            <Link to={"/shops"}>
                                <div className="navitem">
                                    <p>
                                        <BsShopWindow />
                                    </p>
                                    <p>Shops</p>
                                </div>
                            </Link>
                            <br />
                            <Link to={"/staffs"}>
                                <div className="navitem">
                                    <p>
                                        <BsPersonBadge />
                                    </p>
                                    <p>Staff</p>
                                </div>
                            </Link>
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() => logUserOut()}
                                className="navitem"
                            >
                                <p>
                                    <BsBoxArrowInLeft />
                                </p>
                                <p>Log Out</p>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            ) : null}
        </>
    );
};

export default MobileSideNav;
