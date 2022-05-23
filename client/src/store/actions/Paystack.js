import axios from "axios";

const verifyPayment = async (id) => {
    try {
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PAYSTACK_SEC_KEY}`,
                },
            }
        );

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const VerifyPayment = (id) => ({
    type: "VERIFY_PAYMENT",
    payload: verifyPayment(id),
});
