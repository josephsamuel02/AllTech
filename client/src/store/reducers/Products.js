export const Products = (state = [], action) => {
    switch (action.type) {
        case "PRODUCS_LIST":
            return action.payload;

        default:
            return state;
    }
};

export const DecrementProducts = (state = [], action) => {
    switch (action.type) {
        case "DECREMENT_PRODUCTS":
            return action.payload;

        default:
            return state;
    }
};
