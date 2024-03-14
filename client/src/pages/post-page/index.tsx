import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "@/services/post";
import { PostInterface } from "@/services/post";
import ReactQuill from "react-quill";
import { convertDate } from "@/services/functions/dateFromating";
import { AsyncImage } from "loadable-image";

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
    }, [id])
    return (
        <>
            <div>
                <AsyncImage src={post.image} alt="cover image" className=" object-cover w-full mb-4 h-52 md:h-80" />
            
                <h2 className=" font-bold text-2xl mb-3">{post.title}</h2>
                <div className="flex mb-2 ">
                    {post?.tags?.map((tag, index) => (
                        <span key={index} className=" bg-black text-gray-100 text-xs p-1 mr-1 rounded-sm" >{tag}</span>
                    ))}
                </div>
                <time className=" text-gray-400">{convertDate(post?.createdAt)}</time>



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