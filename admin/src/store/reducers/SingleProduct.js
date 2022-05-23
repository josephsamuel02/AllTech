export const SingleProduct = (state = [], action) => {
    switch (action.type) {
        case "GET_ONE_PRODUCT":
            return action.payload;

        default:
            return state;
    }
};
