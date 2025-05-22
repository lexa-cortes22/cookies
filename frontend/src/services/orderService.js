import axios from "axios";
const API = "http://localhost:5000/api/orders";
export const getOrders = () => axios.get(API).then(res => res.data);