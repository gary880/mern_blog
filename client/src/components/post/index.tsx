import { useNavigate } from "react-router-dom";
import { convertDate } from "@/services/functions/dateFromating";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Trash, Edit } from "lucide-react";
import { Button } from "../ui/button";
import { deletePost } from "@/services/post";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


interface PostProps {
    title: string;
    date: string;
    summary: string;
    image: string;
    tags?: string[];
    id: string;
    fetchPosts: () => void;
}


const Post = (props: PostProps) => {
    const { title, date, summary, image, id, fetchPosts } = props;
    const navigate = useNavigate();
    const userAuth = useSelector((state: RootState) => state.user);
    const handleNavigate = () => {
        navigate(`/post/${id}`);
    }

    const handleEdit = () => {
        navigate(`/editor/${id}`);
    }

    const handleDelete = async () => {
        await deletePost(id).then((response) => {
            if (response.status === 200) {
                fetchPosts();
            }
        })
    }

    return (
        <>
            <Dialog>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete Post</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to remove this post?
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button >Cancel</Button>
                        </DialogClose>
                        <Button onClick={handleDelete} className=" bg-red-500 hover:bg-red-400">Delete</Button>
                    </DialogFooter>
                </DialogContent>


                <div className="flex flex-col w-full p-4 lg:w-1/2">
                    <div className="overflow-hidden w-full mb-2 rounded-2xl cursor-pointer" onClick={handleNavigate}>
                        <img src={image} alt="placeholder" className="object-cover w-full max-h-52 duration-1000 hover:scale-110" loading="lazy" />
                    </div>

                    <h2 className=" font-bold text-2xl">{title}</h2>
                    <time className=" text-gray-500">{convertDate(date)}</time>
                    <h3 className="font-blod"><strong>{summary}</strong></h3>

                    <div className="flex justify-end">
                        {props?.tags?.map((tag, index) => (
                            <span key={index} className=" bg-black text-gray-100 text-xs p-1 mx-1 rounded-sm" >{tag}</span>
                        ))}
                    </div>
                    {userAuth.user &&
                        <div className="flex">
                            <DialogTrigger className="rounded-md w-8 h-8 text-white flex justify-center items-center p-1.5 bg-black mr-1">
                                <Trash />
                            </DialogTrigger>
                            <Button className="p-2 rounded-md w-8 h-8" onClick={handleEdit} >
                                <Edit />
                            </Button>
                        </div>
                    }
                </div>

            </Dialog>
        </>

    );
}


export default Post