import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmI2ZWFkMGQ5Y2E4MmYxMzJmZWI0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDk4Njc1MCwiZXhwIjoxNjYxMjQ1OTUwfQ.SQQyjnXBNzpW7JjZEKg48S8Z-QQZk-I1pH8F_X2pyhk"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})
