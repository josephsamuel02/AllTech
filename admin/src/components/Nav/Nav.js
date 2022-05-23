import "./Nav.css";
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
const Nav = () => {
    return (
        <div className="nav">
            <IconContext.Provider
                value={{
                    color: `rgb(228, 24, 24)`,
                    size: "20px",
                }}
            >
                <h1 className="logo">Amrok</h1>
                <p className="admintitle">Admin Pannel</p>
                <br />
                <div className="navBox">
                    <br />
                    <h5 className="dashboard">Dash Board</h5>
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
                    <Link to={"/logout"}>
                        <div className="navitem">
                            <p>
                                <BsBoxArrowInLeft />
                            </p>
                            <p>Log Out</p>
                        </div>
                    </Link>
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Nav;
