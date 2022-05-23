import axios from "axios";

const oneProduct = async (id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/products/${id}`
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const SingleProduct = (id) => ({
    type: "GET_ONE_PRODUCT",
    payload: oneProduct(id),
});
