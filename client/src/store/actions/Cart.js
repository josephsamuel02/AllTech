import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL;

// ADD PRODUCTS TO CART
const addtocart = async (product) => {
    try {
        const response = await axios.post(`${apiBaseUrl}/cart`, product, {
            headers: {
                token: `Bearer ${
                    JSON.parse(
                        JSON.parse(localStorage.getItem("persist:root")).LogIn
                    ).accesstoken
                }`,
            },
        });

        return {
            response: response.data,
        };
    } catch (err) {
        throw err;
    }
};

export const AddToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: addtocart(product),
});

// GET ALL CART PRODUCTS

const cartitems = async (userId) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/cart/${userId}`);
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const GetCart = (userId) => ({
    type: "GET_CART",
    payload: cartitems(userId),
});

// UPDATE CART PRODUCT

const updatecart = async (q, productId) => {
    try {
        const response = await axios.put(
            `${apiBaseUrl}/cart/${productId}`,
            {
                quantity: q,
            },
            {
                headers: {
                    token: `Bearer ${
                        JSON.parse(
                            JSON.parse(localStorage.getItem("persist:root"))
                                .LogIn
                        ).accesstoken
                    }`,
                },
            }
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const UpdateCart = (q, productId) => ({
    type: "UPDATE_CART",
    payload: updatecart(q, productId),
});

// GET CART SUMTOTAL

const cartsumTotal = async (userId) => {
    try {
        const response = await axios.get(
            `${apiBaseUrl}/cart/cartsum/${userId}`
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const CartSumTotal = (userId) => ({
    type: "CART_SUM_TOTAL",
    payload: cartsumTotal(userId),
});

//DELETE CART ITEM

const deletecart = async (id) => {
    try {
        const response = await axios.delete(`${apiBaseUrl}/cart/${id}`, {
            headers: {
                token: `Bearer ${
                    JSON.parse(
                        JSON.parse(localStorage.getItem("persist:root")).LogIn
                    ).accesstoken
                }`,
            },
        });

        return { status: "Item has been delete successfuly" };
    } catch (err) {
        throw err;
    }
};

export const DeleteCart = (id) => ({
    type: "DELETE_CART",
    payload: deletecart(id),
});

//DELETE/CLEAR USER'S CART ITEMS

const deleteallcart = async (userId) => {
    try {
        const response = await axios.delete(
            `${apiBaseUrl}/cart/clearcart/${userId}`,
            {
                headers: {
                    token: `Bearer ${
                        JSON.parse(
                            JSON.parse(localStorage.getItem("persist:root"))
                                .LogIn
                        ).accesstoken
                    }`,
                },
            }
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const DeleteAllCart = (userId) => ({
    type: "DELETE_ALL_CART",
    payload: deleteallcart(userId),
});
