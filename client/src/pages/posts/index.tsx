import Post from "@/components/post";
import { getPosts } from "@/services/post";
import { useEffect, useState } from "react";
import { PostInterface } from "@/services/post";

const Posts = () => {

    const [posts, setPosts] = useState<PostInterface[]>([]);

    const fetchPosts = async () => {
        const response = await getPosts();
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <>
            <div className="flex flex-wrap ">
                {posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            title={post.title}
                            date={post.createdAt}
                            summary={post.summary}
                            image={post.image}
                            tags={post.tags}
                            id={post._id}
                            fetchPosts={fetchPosts}
                        />
                    )
                })}
            </div>

        </>

    );
}

export default Posts