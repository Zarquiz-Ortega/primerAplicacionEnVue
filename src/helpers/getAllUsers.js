import axios from "axios";

const API_URL = 'https://randomuser.me/api/?results=40'

export const getApiUsers = () => axios.get(API_URL)
