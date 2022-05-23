export const HomeProducts = (state = [], action) => {
    switch (action.type) {
        case "HOME_PRODUCS_LIST":
            return action.payload;

        default:
            return state;
    }
};
