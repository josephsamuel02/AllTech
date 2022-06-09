import "./Orderspage.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrders } from "../../store/actions/Order";

const Orderspage = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const Orders = useSelector((state) => state.GetOrders);
    const dispatch = useDispatch();
    useEffect(() => dispatch(GetOrders(userId)), [dispatch]);
    // useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    return (
        <div id="orderspage">
            <div id="orderslistbox">
                {!Orders.message &&
                    Orders.map((item) => (
                        <div className="orderslist" key={item._id}>
                            <h4 className="date">{item.createdAt}</h4>
                            <div className="productinfo">
                                {item.products.map((i) => (
                                    <div key={i._id}>
                                        <img src={i.image} image alt="" />
                                        <div className="itemdetail">
                                            <p>Item: {i.title}</p>
                                            <p>
                                                Price:
                                                <span
                                                    style={{
                                                        color: "green",
                                                        paddingLeft: " 4px",
                                                    }}
                                                >
                                                    NGN
                                                </span>
                                                {i.price
                                                    .toFixed(2)
                                                    .replace(
                                                        /\d(?=(\d{3})+\.)/g,
                                                        "$&,"
                                                    )}
                                            </p>
                                            <p>Quantity: {i.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <h6>
                                <span>Total </span>: NGN
                                {item.amount
                                    .toFixed(2)
                                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                            </h6>

                            <h4>Delevery information</h4>
                            <h6>
                                <span>Receiver </span>:{item.receiversInfo.name}
                            </h6>
                            <h6>
                                <span>Delevery Address </span>:
                                {item.receiversInfo.deleveryAddress}
                            </h6>
                            <h6>
                                <span>Phone </span>: {item.receiversInfo.phone}
                            </h6>
                        </div>
                    ))}
            </div>
            {Orders.message && (
                <h1 style={{ textAlign: "center" }}>No Order history</h1>
            )}
            <Link to={"/cart"}>
                <button id="cartbtn">Go to Cart</button>
            </Link>
        </div>
    );
};

export default Orderspage;
