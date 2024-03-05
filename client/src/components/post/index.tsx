import { useNavigate } from "react-router-dom";

interface PostProps {
    title: string;
    date: string;
    summary: string;
    image: string;
    id: string;
}


const Post = (props: PostProps) => {
    const { title, date, summary, image, id } = props;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div className="flex flex-col w-full p-4 lg:w-1/2">
            <div className="overflow-hidden w-full mb-2 rounded-2xl cursor-pointer" onClick={handleNavigate}>
                <img src={image} alt="placeholder" className="object-cover w-full max-h-52 duration-1000 hover:scale-110" loading="lazy"/>
            </div>

            <h3 className=" font-bold text-2xl">{title}</h3>
            <time className=" text-gray-400">{date}</time>
            <span>{summary}</span>
        </div>
    );
}


export default Post