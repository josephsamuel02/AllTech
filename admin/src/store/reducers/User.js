export const LogIn = (state = [], action) => {
    switch (action.type) {
        case "GET_USER":
            return action.payload;

        default:
            return state;
    }
};

export const RegisterUser = (state = [], action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return action.payload;

        default:
            return state;
    }
};

export const GetUsers = (state = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.payload;

        default:
            return state;
    }
};
