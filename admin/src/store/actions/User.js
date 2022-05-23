import axios from "axios";

export const userId = "Guest";

const login = async (userin) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/auth/login",
            userin
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const LogIn = (userin) => ({
    type: "GET_USER",
    payload: login(userin),
});

const register = async (user) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/auth/register",
            user
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const RegisterUser = (user) => ({
    type: "REGISTER_USER",
    payload: register(user),
});

const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/user`, {
            headers: {
                token: `Bearer ${
                    JSON.parse(
                        JSON.parse(localStorage.getItem("persist:root")).LogIn
                    ).accesstoken
                }`,
            },
        });

        return response.data;
    } catch (err) {
        throw err;
    }
};

export const GetUsers = () => ({
    type: "GET_USERS",
    payload: getUsers(userId),
});
