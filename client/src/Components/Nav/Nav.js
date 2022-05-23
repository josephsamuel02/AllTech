import "./Nav.css";
import { MdShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetCart } from "../../store/actions/Cart";
const Nav = () => {
    const theCount = useSelector((state) => state.GetCart.length);
    const changeAlart = useSelector((state) => state.AddToCart);
    const userId = useSelector((state) => state.LogIn._id);

    const dispatch = useDispatch();

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    return (
        <div className="nav">
            <IconContext.Provider
                value={{
                    color: "dodgerblue",
                    size: "24px",
                }}
            >
                <Link to="/">
                    <div className="header">AllTech</div>
                </Link>

                <div id="logANDregisterBTN">
                    {!userId && (
                        <Link to="/login">
                            <button id="navlogin" className="userbtn">
                                Login
                            </button>
                        </Link>
                    )}
                    {!userId && (
                        <Link to="/register">
                            <button id="navregister" className="userbtn">
                                Register
                            </button>
                        </Link>
                    )}
                </div>

                {userId && (
                    <Link to="/cart">
                        <h1 id="CartIcon">
                            <MdShoppingCart color="white" />
                            {theCount
                                ? theCount > 0 && <span>{theCount}</span>
                                : null}
                            <span>{theCount}</span>
                        </h1>
                    </Link>
                )}
            </IconContext.Provider>
        </div>
    );
};

export default Nav;
