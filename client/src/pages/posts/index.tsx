import Post from "@/components/post";



const Posts = () => {
    // mock post data
    const posts = [
        {
            title: "Title",
            date: "12/12/12",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit consequatur a. Accusantium temporibus, nisi quisquam consequatur",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kGf0FRLkYAWbsqg_7J3AJA.png",
            id: "1"
        },
        {
            title: "Title",
            date: "12/12/12",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit consequatur a. Accusantium temporibus, nisi quisquam consequatur",
            image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800",
            id: "2"
        },
        {
            title: "Title",
            date: "12/12/12",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit consequatur a. Accusantium temporibus, nisi quisquam consequatur",
            image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*W8KBrJgmsIlYtn24AhHfSQ.jpeg",
            id: "3"
        },
    ]


    return (

        <div className="flex flex-wrap ">
            {posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        title={post.title}
                        date={post.date}
                        summary={post.summary}
                        image={post.image}
                        id={post.id}
                    />
                )
            })}
        </div>

    );
}

export default Posts