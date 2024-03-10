import axios from "axios"

const BaseUrl = "http://localhost:5000/user/"

export const signin = async (email: string, password: string) => {
    const response = await axios.post(BaseUrl + "signin", {
        email,
        password
    })
    return response.data

}


export const signup = async (email: string, username: string, password: string, confirmPassword: string) => {
    const response = await axios.post(BaseUrl + "signup", {
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