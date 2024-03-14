import Post from "@/components/post";
import { getPosts } from "@/services/post";
import { useEffect, useState } from "react";
import { PostInterface } from "@/services/post";
import { Skeleton } from "@/components/ui/skeleton";



const LoadingPosts = () => {
    const count = 4;
    return (
        <div className="flex flex-wrap w-full">
            {Array.from({ length: count }).map((_, index) => {
                return (
                    <div className="flex flex-col w-full p-4 lg:w-1/2" key={index}>
                        <Skeleton className="w-full h-64 animate-in delay-300" />
                    </div>
                )
            })}
        </div>
    )
}


const Posts = () => {

    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPosts = async () => {
        const response = await getPosts();
        if (response.status === 200) {
            setLoading(false);
        }
        setPosts(response.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])


    return (
        <>
            <div className="flex flex-wrap ">
                {loading && <LoadingPosts />}
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