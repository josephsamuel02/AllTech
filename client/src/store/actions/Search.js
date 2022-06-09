import axios from "axios";

const search = async (searchtext) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/search?searchtext=${searchtext}`
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
