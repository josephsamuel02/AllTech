import "./OrdersList.css";
import React, { useState, useEffect } from "react";

import { IconContext } from "react-icons";
import { BsCart4, BsCartCheck, BsMinecartLoaded } from "react-icons/bs";
import NewOrders from "./NewOrders";
import Processing from "./Processing";
import Completed from "./Completed";

const OrdersList = () => {
    const [btnColor, setbtncolor] = useState("rgb(253, 193, 28)");
    const [orderBox, setOrderBox] = useState("new");
    return (
        <div className="orderslist">
            <IconContext.Provider
                value={{
                    color: `rgb(228, 24, 24)`,
                    size: "20px",
                }}
            >
                <h1 className="orderheader">All Orders</h1>

                {/* TOGLE BTN*/}
                <div className="orderbtns">
                    <button
                        style={{
                            backgroundColor:
                                btnColor == "rgb(253, 193, 28)" && btnColor,
                            color: btnColor == "rgb(253, 193, 28)" && "white",
                        }}
                        onClick={() => {
                            setOrderBox("new");
                            setbtncolor("rgb(253, 193, 28)");
                        }}
                    >
                        <p>
                            <BsMinecartLoaded />
                        </p>
                        <p> New Orders</p>
                    </button>
                    <button
                        style={{
                            color: btnColor == "rgb(128, 0, 255)" && "white",
                            backgroundColor:
                                btnColor == "rgb(128, 0, 255)" && btnColor,
                        }}
                        onClick={() => {
                            setOrderBox("processing");
                            setbtncolor("rgb(128, 0, 255)");
                        }}
                    >
                        <p>
                            <BsCart4 />
                        </p>
                        <p> Processing</p>
                    </button>
                    <button
                        style={{
                            color: btnColor == "rgb(82, 188, 11)" && "white",
                            backgroundColor:
                                btnColor == "rgb(82, 188, 11)" && btnColor,
                        }}
                        onClick={() => {
                            setOrderBox("completed");
                            setbtncolor("rgb(82, 188, 11)");
                        }}
                    >
                        <p>
                            <BsCartCheck />
                        </p>

                        <p> Completed</p>
                    </button>
                </div>
                {/* NEW ORDERS */}
                {orderBox == "new" && <NewOrders />}
                {/* PROCESSING*/}
                {orderBox == "processing" && <Processing />}
                {/* COMPLETED */}
                {orderBox == "completed" && <Completed />}
            </IconContext.Provider>
        </div>
    );
};

export default OrdersList;
