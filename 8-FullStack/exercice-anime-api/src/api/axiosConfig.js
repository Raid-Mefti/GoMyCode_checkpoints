import axios from "axios";

export const myAPIConfig = axios.create({
    baseURL: "http://narutodb.xyz/api",
    headers: {
        Accept: "application/json",
    },
});
