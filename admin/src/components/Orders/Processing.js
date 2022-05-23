import "./OrdersList.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrders } from "../../store/actions/Order";
import { format } from "timeago.js";

const Processing = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const Orders = useSelector((state) => state.GetOrders);
    const dispatch = useDispatch();
    useEffect(() => dispatch(GetOrders(userId)), [dispatch]);

    return (
        <div className="processing">
            <div className="procbtn">
                <button
                    style={{
                        backgroundColor: "rgb(140, 46, 234)",
                        color: "white",
                    }}
                >
                    Fetching Items
                </button>
                <button
                    style={{
                        backgroundColor: "rgb(17, 124, 238)",
                        color: "white",
                    }}
                >
                    Ready for Delevry
                </button>
            </div>

            <div className="orderbox">
                <div className="proclevelwrap">
                    <div
                        style={{
                            borderRight: "solid 1px rgba(83, 82, 82, 0.356)",
                        }}
                        className="proclevel"
                    >
                        {Orders &&
                            Orders.map((item) => (
                                <span key={item._id}>
                                    {item.status == "Processing" && (
                                        <div className="ordercard">
                                            <div className="detail">
                                                <h5 className="username">
                                                    {item.receiversInfo.name}
                                                </h5>

                                                <ul>
                                                    <li>
                                                        <b>Name : </b>
                                                        {
                                                            item.receiversInfo
                                                                .name
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Email : </b>
                                                        {
                                                            item.receiversInfo
                                                                .email
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Phone : </b>
                                                        {
                                                            item.receiversInfo
                                                                .phone
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Adress : </b>{" "}
                                                        {
                                                            item.receiversInfo
                                                                .deleveryAddress
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Reff Id : </b>
                                                        {
                                                            item.receiversInfo
                                                                .reference
                                                        }
                                                    </li>
                                                </ul>

                                                <span> .</span>
                                                <div className="stats">
                                                    <p>
                                                        {format(item.createdAt)}
                                                    </p>
                                                    <p
                                                        style={{
                                                            color: "rgb(140, 46, 234)",
                                                        }}
                                                    >
                                                        {item.status}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </span>
                            ))}
                    </div>

                    <div className="proclevel">
                        {Orders &&
                            Orders.map((item) => (
                                <span key={item._id}>
                                    {item.status == "Ready for delivery" && (
                                        <div className="ordercard">
                                            <div className="detail">
                                                <h5 className="username">
                                                    {item.receiversInfo.name}
                                                </h5>

                                                <ul>
                                                    <li>
                                                        <b>Name : </b>{" "}
                                                        {
                                                            item.receiversInfo
                                                                .name
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Email : </b>
                                                        {
                                                            item.receiversInfo
                                                                .email
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Phone : </b>
                                                        {
                                                            item.receiversInfo
                                                                .phone
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Adress : </b>{" "}
                                                        {
                                                            item.receiversInfo
                                                                .deleveryAddress
                                                        }
                                                    </li>
                                                    <li>
                                                        <b>Reff Id : </b>
                                                        {
                                                            item.receiversInfo
                                                                .reference
                                                        }
                                                    </li>
                                                </ul>

                                                <span> .</span>
                                                <div className="stats">
                                                    <p>
                                                        {format(item.createdAt)}
                                                    </p>
                                                    <p
                                                        style={{
                                                            color: "rgb(17, 124, 238)",
                                                        }}
                                                    >
                                                        {item.status}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Processing;
