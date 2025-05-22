import axios from "axios";
const API = "http://localhost:5000/api/clients";
export const getClients = () => axios.get(API).then(res => res.data);