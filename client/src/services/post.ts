import axios from "axios";

// set axios header with token

const BaseUrl = "http://localhost:5000/post/";


const getPosts = async () => {
    const response = await axios.get(BaseUrl);
    return response;
}


const createPost = async (data : CreatePost) => {
    const response = await axios.post(BaseUrl, data);
    return response;

}

const getPost = async (id: string) => {
    const response = await axios.get(BaseUrl + id);
    return response;
}

const updatePost = async (id: string, data: CreatePost) => {
    const response = await axios.put(BaseUrl + id, data);
    return response;
}



interface CreatePost {
    title: string;
    summary: string;
    content: string;
    tags: [string];
    image: string;
}