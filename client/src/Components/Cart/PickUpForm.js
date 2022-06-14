import "./PickUpForm.css";
import Select from "react-select";
import { usePaystackPayment } from "react-paystack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifyPayment } from "../../store/actions/Paystack";
import { GetCart, DeleteAllCart } from "../../store/actions/Cart";
import { SendOrder } from "../../store/actions/Order";

const PickUpForm = () => {
    const cartItems = useSelector((state) => state.GetCart);
    const cartSum = useSelector((state) => state.CartSumTotal[0].total);
    const userId = useSelector((state) => state.LogIn._id);
    const userinfo = useSelector((state) => state.LogIn);

    const dispatch = useDispatch();

    const [cartSumStr, setCartSumStr] = useState();

    useEffect(() => userId && dispatch(GetCart(userId)), [dispatch]);

    const [delvAdd, setDelvAdd] = useState();
    const [warn, setWarn] = useState(false);

    const settotal = () => {
        cartSum &&
            setTimeout(() => {
                cartSum && setCartSumStr(Number(cartSum));
            }, 5000);
    };
    settotal();

    const config = {
        name: userinfo.username,
        reference: new Date().getTime().toString(),
        email: userinfo.email,
        phone: userinfo.phone,
        amount: cartSum * 100,
        deleveryAddress: delvAdd,
        publicKey: process.env.REACT_APP_PAYSTACK_PUB_KEY,
    };
    // const [orderdelvAdd, setOrderdelvAdd] = useState(config);

    const onSuccess = (reference) => {
        dispatch(VerifyPayment(reference.reference));
        setTimeout(() => {
            dispatch(SendOrder(orderObject));
        }, 400);
        setTimeout(() => {
            dispatch(DeleteAllCart(userId));
        }, 700);
        setTimeout(() => {
            window.location.replace("/orders");
        }, 1000);
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log("closed");
    };

    const initializePayment = usePaystackPayment(config);

    const orderObject = {
        userId: userinfo._id,
        username: userinfo.username,
        products: cartItems,
        amount: cartSumStr,
        receiversInfo: config,
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            margin: "0px",
            borderBottom: "1px dotted silver",
            color: state.isSelected ? "white" : "black",
            padding: "10px 8px",
            backgroundColor: state.isSelected ? " rgb(243, 46, 46)" : "white",
        }),

        control: (base) => ({
            ...base,
            margin: "4px",
            border: "solid 1px rgba(194, 192, 190, 0.827)",
            boxShadow: "none",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 0.8;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    const selectState = [
        { value: "lagos", label: "Lagos Sate" },
        { value: "oyo", label: "Oyo State" },
        { value: "ogun", label: "Ogun State" },
    ];
    const [selectedState, setSelctedState] = useState();

    let selectPickUpLocation;

    if (selectedState === "lagos") {
        selectPickUpLocation = [
            {
                value: "ikeja computer village",
                label: "Ikeja Computer Village : 2, Awolowo House Ikeja Computer Village ",
            },
            {
                value: "ikeja allen avenue",
                label: "Ikeja Allen Avenue : 3, Adefolu Dr Allen Avenue Ikeja ",
            },
        ];
    } else if (selectedState === "oyo") {
        selectPickUpLocation = [
            {
                value: "UNI Ibadan",
                label: "UNI Ibadan Main Gate",
            },
            {
                value: "Bodija",
                label: "Bodija Address",
            },
        ];
    } else if (selectedState === "ogun") {
        selectPickUpLocation = [
            {
                value: "AbeOkuta",
                label: "Abeokuta Address ",
            },
            {
                value: "Ijebu Ode",
                label: "Ijebu Ode Address ",
            },
        ];
    } else {
        selectPickUpLocation = [{ PickUpLocation: "Pick-Up Location" }];
    }

    const State = (value) => {
        setSelctedState(value.value);
    };

    const selectedValue = (value) => {
        setDelvAdd(value.value);
    };
    return (
        <div id="pickUpForm">
            <div id="deleveryinfo">
                <h2>Delevery Details</h2>
                <li> Name : {userinfo.username} </li>
                <li>Email Address: {userinfo.email}</li>
                <li>Phone: {userinfo.phone}</li>
                {cartSum && (
                    <li>
                        Total: NGN
                        {cartSum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </li>
                )}
            </div>

            <Select
                className="select"
                styles={customStyles}
                options={selectState}
                placeholder={"Select State"}
                onChange={State}
            />

            <Select
                className="select"
                styles={customStyles}
                options={selectPickUpLocation}
                placeholder={"Select Pick-Up Locations"}
                onChange={selectedValue}
            />
            <p
                style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "lighter",
                    justifyContent: "center",
                    color: "red",
                    visibility: warn ? "visible" : "hidden",
                }}
            >
                * Please slect your pick-up-location
            </p>

            <button
                id="makepayment"
                onClick={() => {
                    if (delvAdd) {
                        setTimeout(() => {
                            initializePayment(onSuccess, onClose);
                        }, 2000);
                    } else {
                        setWarn(true);
                    }
                }}
            >
                Make Payment
            </button>
        </div>
    );
};

export default PickUpForm;
