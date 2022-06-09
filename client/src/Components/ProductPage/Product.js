import "./Product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetCart } from "../../store/actions/Cart";
import { SingleProduct } from "../../store/actions/SingleProduct";

const Product = () => {
    const theProducts = useSelector((state) => state.SingleProduct);
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();

    // const theCount = useSelector((state) => state.GetCart.length);
    const changeAlart = useSelector((state) => state.AddToCart);

    const [quantity, setQuantity] = useState(1);
    const inquan = (add) => {
        quantity + add < 1 ? setQuantity(1) : setQuantity(quantity + add);
    };
    const product = {
        userId: userId,
        productId: theProducts._id,
        title: theProducts.title,
        image: theProducts.image,
        price: theProducts.price,
        quantity: quantity,
    };

    const [totalcout, settotalcout] = useState(0);
    const addtocart = () => {
        dispatch(AddToCart(product));
        setTimeout(() => userId && dispatch(GetCart(userId)), 500);
    };

    const { id } = useParams();

    useEffect(() => {
        dispatch(SingleProduct(id));
        userId && dispatch(GetCart(userId));
    }, [dispatch, id]);

    return (
        <div id="productpage">
            {theProducts ? (
                <div className="productCard" key={theProducts._id}>
                    <div className="imageBox">
                        <img src={theProducts.image} alt="" />
                    </div>
                    <div className="detail">
                        <h3 className="name">{theProducts.title}</h3>
                        <div className="description">
                            <p>{theProducts.desc}</p>
                        </div>
                        <h5 className="price">
                            <span>NGN</span>
                            {theProducts.price
                                ? theProducts.price
                                      .toFixed(2)
                                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                                : null}
                        </h5>
                        {userId && (
                            <div className="quantity">
                                <button onClick={() => inquan(-1)}>-</button>
                                {quantity}
                                <button onClick={() => inquan(1)}>+</button>
                                <button onClick={addtocart}>Add to cart</button>
                            </div>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Product;
