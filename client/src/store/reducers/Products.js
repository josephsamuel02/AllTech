export const Products = (state = [], action) => {
    switch (action.type) {
        case "PRODUCS_LIST":
            return action.payload;

        default:
            return state;
    }
};
