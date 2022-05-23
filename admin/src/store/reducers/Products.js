export const Products = (state = [], action) => {
    switch (action.type) {
        case "PRODUCS_LIST":
            return action.payload;

        default:
            return state;
    }
};

export const CreateProduct = (state = [], action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return action.payload;

        default:
            return state;
    }
};
