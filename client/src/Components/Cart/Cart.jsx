import "./Cart.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../store/actions/Cart";
import CartItems from "./CartItems";
import HomeDeleveryForm from "./HomeDeleveryForm";
import PickUpForm from "./PickUpForm";

const Cart = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();
    const [displayOrder, setDisplayOrder] = useState(false);
    const [displayOrderForm, setDisplayOrderForm] = useState(false);
    const [pickuplocation, setPickuplocation] = useState(false);
    const [btnstyle, setBtnstyle] = useState({ backgroundColor: "white" });
    const [btnstyle2, setBtnstyle2] = useState({ backgroundColor: "white" });

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    return (
        <div id="cartpage">
            <CartItems />
            <button
                id="coninuetoorder"
                onClick={() => {
                    setDisplayOrder(true);
                }}
            >
                Proceed to Place Order
            </button>
            <br /> <br />
            {displayOrder && (
                <div id="deleverymodebox">
                    <div id="deleverymodebtnbox">
                        <button
                            className="deleverymode"
                            onClick={() => {
                                setPickuplocation(true);
                                setDisplayOrderForm(false);
                                setBtnstyle(null);

                                setBtnstyle2({
                                    backgroundColor: "red",
                                    color: "white",
                                    border: " solid 2px red",
                                });
                            }}
                            style={btnstyle2}
                        >
                            Pick Up Location
                        </button>

                        <button
                            className="deleverymode"
                            onClick={() => {
                                setDisplayOrderForm(true);
                                setPickuplocation(false);
                                setBtnstyle2(null);
                                setBtnstyle({
                                    backgroundColor: "red",
                                    color: "white",
                                    border: " solid 2px red",
                                });
                            }}
                            style={btnstyle}
                        >
                            Home Delevery
                        </button>
                    </div>
                    {pickuplocation && <PickUpForm />}
                    {displayOrderForm && <HomeDeleveryForm />}
                </div>
            )}
            <Link to={"/orders"}>
                <button id="orderhistory"> Orders History </button>
            </Link>
        </div>
    );
};

export default Cart;
