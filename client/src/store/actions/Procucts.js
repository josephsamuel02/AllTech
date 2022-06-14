// const axios = require("axios");
import axios from "axios";

const products = async (prevstate, page = 1, limit, category, filterdObj) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/products?page=${page}&limit=${limit}&category=${category}&sort=${filterdObj}`
        );
        return {
            products: prevstate.products
                ? [...prevstate.products, ...response.data]
                : response.data,
            page: page,
            limit: limit,
            category: category,
            filterdObj: filterdObj,
            end: response.data.length === 0 ? true : false,
        };
    } catch (err) {
        throw err;
    }
};

export const Products = (
    prevstate,
    page,
    limit,
    category,
    filterdObj,
    end
) => ({
    type: "PRODUCS_LIST",

    payload: products(prevstate, page, limit, category, filterdObj, end),

    // payload: productsItem,
});

//DECREMENT PRODUCTS INSTOCK

const decrementproducts = async (IDs) => {
    try {
        const response = await axios.patch(
            "http://localhost:8000/products/instock",
            IDs,
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

export const DecrementProducts = (IDs) => ({
    type: "DECREMENT_PRODUCTS",
    payload: decrementproducts(IDs),
});
