import "./OrdersList.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOrders } from "../../store/actions/Order";
import { format } from "timeago.js";

const NewOrders = () => {
    const userId = useSelector((state) => state.LogIn._id);
    const Orders = useSelector((state) => state.GetOrders);
    const dispatch = useDispatch();

    useEffect(() => dispatch(GetOrders(userId)), [dispatch]);

    return (
        <div className="neworders">
            <div className="orderbox">
                {Orders &&
                    Orders.map((item) => (
                        <span key={item._id}>
                            {item.status == "Pending" && (
                                <div className="ordercard">
                                    <div className="detail">
                                        <h5 className="username">
                                            {item.receiversInfo.name}
                                        </h5>

                                        <ul>
                                            <li>
                                                <b>Name : </b>{" "}
                                                {item.receiversInfo.name}
                                            </li>
                                            <li>
                                                <b>Email : </b>
                                                {item.receiversInfo.email}
                                            </li>
                                            <li>
                                                <b>Phone : </b>
                                                {item.receiversInfo.phone}
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
                                                {item.receiversInfo.reference}
                                            </li>
                                        </ul>

                                        <span> .</span>
                                        <div className="stats">
                                            <p>{format(item.createdAt)}</p>
                                            <p
                                                style={{
                                                    color: "orangered",
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
                <br /> <br /> <br />
                <br />
                <br />
                {/* <div className="ordercard">
                    <div className="detail">
                        <h5 className="username">Akin Alabi</h5>
                        <ul>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Gass Cooker</li>
                            <li> Gass Cooker</li>
                            <li> Nigerian Football Jersy</li>
                        </ul>
                        <span>...</span>
                        <div className="stats">
                            <p>Date</p> <p>ID</p> <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="ordercard">
                    <div className="detail">
                        <h5 className="username">Akin Alabi</h5>
                        <ul>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Gass Cooker</li>
                            <li> Gass Cooker</li>
                            <li> Nigerian Football Jersy</li>
                        </ul>
                        <span>...</span>
                        <div className="stats">
                            <p>Date</p> <p>ID</p> <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="ordercard">
                    <div className="detail">
                        <h5 className="username">Akin Alabi</h5>
                        <ul>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Gass Cooker</li>
                            <li> Gass Cooker</li>
                            <li> Nigerian Football Jersy</li>
                        </ul>
                        <span>...</span>
                        <div className="stats">
                            <p>Date</p> <p>ID</p> <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="ordercard">
                    <div className="detail">
                        <h5 className="username">Akin Alabi</h5>
                        <ul>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Full Computer System</li>
                            <li> iPod</li>
                            <li> Gass Cooker</li>
                            <li> Gass Cooker</li>
                            <li> Nigerian Football Jersy</li>
                        </ul>
                        <span>...</span>
                        <div className="stats">
                            <p>Date</p> <p>ID</p> <p>Status</p>
                        </div>
                    </div>
                </div>
 */}
            </div>
        </div>
    );
};

export default NewOrders;
