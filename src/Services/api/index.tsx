import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

const API = axios.create({
    baseURL,
});

export default API;
