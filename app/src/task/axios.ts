import axios from "axios";
import {BASE_ENDPOINT} from "./endpoints";

export const axiosRequest = axios.create({
    baseURL: BASE_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
});
