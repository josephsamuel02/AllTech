export const SendOrder = (state = [], action) => {
    switch (action.type) {
        case "SEND_ORDER":
            return action.payload;

        default:
            return state;
    }
};

export const GetOrders = (state = [], action) => {
    switch (action.type) {
        case "GET_ORDER":
            return action.payload;

        default:
            return state;
    }
};
