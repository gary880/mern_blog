import axios from "axios"

const BaseUrl = `${import.meta.env.VITE_BASE_URL}/user`;


export const signin = async (email: string, password: string) => {
    const response = await axios.post(`${BaseUrl}/signin`, {
        email,
        password
    });
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
};


export const signup = async (email: string, username: string, password: string, confirmPassword: string) => {
    const response = await axios.post(`${BaseUrl}/signup`, {
        email,
        username,
        password,
        confirmPassword
    })
    return response.data
}

export interface User {
    email: string;
    username: string;
    password: string;
}