import axios from "axios";

const API_URL='https://sds2poc.herokuapp.com'; // const API_URL='http://192.168.1.21:8080';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}
