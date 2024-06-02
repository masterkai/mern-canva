import axios from "axios";

const local_api = "http://localhost:8000";
const production_api = "https://mern-canva-bay.vercel.app";

const token = localStorage.getItem( "canva_token" );
// judge the environment variable of NODE_ENV to determine the api to use in the frontend
// if (process.env.NODE_ENV === "production") {
const api = axios.create( {
    baseURL: process.env.NODE_ENV === "production" ? production_api : local_api,
    headers: {
        Authorization: token ? `Bearar ${ token }` : "",
    },
    withCredentials: true,
} );

export default api;
