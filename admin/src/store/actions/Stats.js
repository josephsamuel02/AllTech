import axios from "axios";

const incomestats = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8000/order/income",

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

export const incomeStats = () => ({
    type: "INCOME_STATS",
    payload: incomestats(),
});
