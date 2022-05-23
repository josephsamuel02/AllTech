import "./Cart.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateCart, DeleteCart, CartSumTotal } from "../../store/actions/Cart";

const CartItems = () => {
    const cartItems = useSelector((state) => state.GetCart);
    const cartSum = useSelector((state) => state.CartSumTotal[0]);
    const userId = useSelector((state) => state.LogIn._id);

    const dispatch = useDispatch();

    const handlechange = (e, id) => {
        const q = e.target.value;
        dispatch(UpdateCart(q, id));
        setTimeout(() => {
            window.location.replace("/cart");
        }, 200);
    };

    useEffect(() => {
        userId && dispatch(CartSumTotal(userId));
    }, [dispatch, CartSumTotal]);

    return (
        <div>
            {cartItems.map((i) => (
                <div className="cartCard" key={i._id}>
                    <div className="productimage">
                        <img src={i.image} alt="laptop" />
                    </div>
                    <div className="itemdetails">
                        <h3 className="productname">{i.title}</h3>
                        <p className="productprice">
                            Unite Price: <span>NGN</span> {i.price}
                        </p>

                        <h3 className="quantity">
                            <select
                                defaultValue={i.quantity}
                                onChange={(e) => {
                                    handlechange(e, i._id);
                                }}
                            >
                                <option value={1}>1 </option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                        </h3>

                        <p className="productprice">
                            Sum: <span>NGN</span>
                            {i.quantity * i.price}
                        </p>
                    </div>
                    <button
                        id="removeItem"
                        onClick={() => {
                            dispatch(DeleteCart(i._id));
                            window.location.replace("/cart");
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <br />
            {cartSum && (
                <h3 id="sumtotal">
                    Total: <span id="naira">NGN </span>
                    <span id="sumtotalunit">{cartSum.total}</span>
                </h3>
            )}
            <br />
        </div>
    );
};

export default CartItems;
