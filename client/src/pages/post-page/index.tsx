import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "@/services/post";
import { PostInterface } from "@/services/post";
import ReactQuill from "react-quill";
import { convertDate } from "@/services/functions/dateFromating";


const PostPage = () => {
    const [post, setPost] = useState<PostInterface>({} as PostInterface);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
            const response = await getPost(id);
            setPost(response.data);
        }
        fetchPost();
    }, [])
    return (
        <>
            <div>
                <img src={post.image} alt="cover image" className=" object-cover w-full mb-4 max-h-52 md:max-h-80"/>
                <div className="flex justify-end">
                    {post?.tags?.map((tag, index) => (
                        <span key={index} className=" bg-gray-400 text-gray-100 text-xs p-1 mx-1 rounded-sm" >{tag}</span>
                    ))}
                </div>

                <h2 className=" font-bold text-2xl">{post.title}</h2>
                <time className=" text-gray-400">{convertDate(post.createdAt)}</time>

                <ReactQuill
                    value={post.content}
                    readOnly={true}
                    theme="bubble"
                />
            </div>
        </>
    );
};
export default PostPage;