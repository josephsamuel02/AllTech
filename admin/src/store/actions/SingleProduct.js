import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_URL;
const oneProduct = async (id) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/products/${id}`);

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const SingleProduct = (id) => ({
    type: "GET_ONE_PRODUCT",
    payload: oneProduct(id),
});
