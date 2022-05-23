import axios from "axios";

//get user orders
const getOrders = async (userId) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/order/${userId}`,

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

export const GetOrders = (userId) => ({
    type: "GET_ORDER",
    payload: getOrders(userId),
});
