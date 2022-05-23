export const incomeStats = (state = [], action) => {
    switch (action.type) {
        case "INCOME_STATS":
            return action.payload;

        default:
            return state;
    }
};
