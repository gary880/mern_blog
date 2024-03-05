import { useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams();

    const mockResponse = {
        title: "Title",
        date: "12/12/12",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit consequatur a. Accusantium temporibus, nisi quisquam consequatur",
        image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*kGf0FRLkYAWbsqg_7J3AJA.png",
        id: "1"
    }

    return (
        <div>
            <img src={mockResponse.image} alt="placeholder" className=" object-cover w-full mb-4 max-h-52 md:max-h-80" loading="lazy" />
            <h2 className=" font-bold text-2xl">{mockResponse.title}{id}</h2>
            <time className=" text-gray-400">{mockResponse.date}</time>
            <p>{mockResponse.content}</p>

        </div>
    );
};
export default PostPage;