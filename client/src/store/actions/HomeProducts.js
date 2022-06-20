// const axios = require("axios");
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL;

const products = async (prevstate, page = 1, limit) => {
    try {
        const response = await axios.get(
            `${apiBaseUrl}/products?page=${page}&limit=${limit}`
        );
        return {
            products: prevstate.products
                ? [...prevstate.products, ...response.data]
                : response.data,
            page: page,
            limit: limit,
            end: response.data.length === 0 ? true : false,
        };
    } catch (err) {
        throw err;
    }
};

export const HomeProducts = (prevstate, page, limit, end) => ({
    type: "HOME_PRODUCS_LIST",
    payload: products(prevstate, page, limit, end),
});
