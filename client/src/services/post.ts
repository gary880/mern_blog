import axios from "axios";
import { store } from "@/app/store";
const BaseUrl = `${import.meta.env.VITE_BASE_URL}/posts`;
const token = store.getState()?.user?.user?.token || "";


const getPosts = async () => {
    const response = await axios.get(BaseUrl);
    return response;
}


const createPost = async (data: CreatePost) => {
    // set token to header
    const response = await axios.post(BaseUrl, data, { headers: { Authorization: `Bearer ${token}` } });
    return response;
}

const getPost = async (id: string) => {
    const response = await axios.get(`${BaseUrl}/${id}`);
    return response;
}

const updatePost = async (id: string, data: CreatePost) => {
    const response = await axios.post(`${BaseUrl}/updatePost/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
    return response;
}


const deletePost = async (id: string) => {
    const response = await axios.post(`${BaseUrl}/delete`, { id: id }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
}



export interface CreatePost {
    title: string;
    summary: string;
    content: string;
    tags: string[];
    image: string;
}

export interface PostInterface {
    title: string;
    summary: string;
    content: string;
    tags: string[];
    image: string;
    createdAt: string;
    _id: string;
}

export {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost
}