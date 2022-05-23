export const VerifyPayment = (state = [], action) => {
    switch (action.type) {
        case "VERIFY_PAYMENT":
            return action.payload;

        default:
            return state;
    }
};
