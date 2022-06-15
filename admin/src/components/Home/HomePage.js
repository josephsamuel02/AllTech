import "./HomePage.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrders } from "../../store/actions/Order";
import { format } from "timeago.js";

import Chart from "./Chart";
import MobileSideNav from "../Nav/MobileSideNav";
import { MdOutlineNavigateNext } from "react-icons/md";

const HomePage = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const Orders = useSelector((state) => state.GetOrders);
    const dispatch = useDispatch();

    const [showSideNav, setShowSideNav] = useState(false);

    useEffect(() => dispatch(GetOrders(userId)), [dispatch]);
    return (
        <div className="homepage">
            <h1 className="header">Quick View</h1>

            <div className="chart">
                <Chart />
            </div>
            <div id="ordersbox">
                <div className="newOrders">
                    <h5>New Orders</h5>
                    <ul>
                        {Orders &&
                            Orders.map((i) => (
                                <t key={i._id}>
                                    {i.status == "pending" && (
                                        <li>
                                            <p>{i.username}</p>
                                            <p>{format(i.createdAt)}</p>
                                            <p>{i.status}</p>
                                        </li>
                                    )}
                                </t>
                            ))}
                    </ul>
                </div>

                <div className="procesingOrders">
                    <h5> Waiting Delevery</h5>
                    <ul>
                        {Orders &&
                            Orders.map((i) => (
                                <div key={i._id}>
                                    {i.status != "pending" && (
                                        <li>
                                            <p>{i.username}</p>
                                            <p>{format(i.createdAt)}</p>
                                            <p>{i.status}</p>
                                        </li>
                                    )}
                                </div>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
