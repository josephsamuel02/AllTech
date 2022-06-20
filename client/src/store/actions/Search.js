import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_URL;
const search = async (searchtext) => {
    try {
        const response = await axios.get(
            `${apiBaseUrl}/search?searchtext=${searchtext}`
        );
        return response.data;
    } catch (err) {
        throw err;
    }
};

export const Search = (searchtext) => ({
    type: "SEARCH",

    payload: search(searchtext),

    // payload: productsItem,
});
