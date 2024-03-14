

import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updatePost } from "@/services/post";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "@/services/post";
import { stringToArray } from "@/services/functions/stringToArray";

export default function EditPost() {
    const tagsRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);
    const coverImageRef = useRef<HTMLInputElement>(null);
    const [code, setCode] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const handleProcedureContentChange = (content: string) => {
        setCode(content);
    };

    const handleSubmit = async () => {
        if (!id) return;
        await updatePost(id, {
            title: titleRef.current?.value as string,
            summary: summaryRef.current?.value as string,
            content: code,
            tags: stringToArray(tagsRef.current?.value as string),
            image: coverImageRef.current?.value as string,
        }).then((response) => {
            if (response.status === 200) {
                navigate("/");
            }
        })
    }

    useEffect(() => {
        if (!id) return;
        const fetchPost = async () => {
            const response = await getPost(id);
            setCode(response.data.content);
            if (titleRef.current) titleRef.current.value = response.data.title;
            if (summaryRef.current) summaryRef.current.value = response.data.summary;
            if (coverImageRef.current) coverImageRef.current.value = response.data.image;
            if (tagsRef.current) tagsRef.current.value = response.data.tags.join(",");
        }
        fetchPost();
    }, [id])



    const myColors = [
        "purple",
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "black",
        "white",
    ];
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["code-block"],
            ["clean"],
            ["link", "image"],
            [{ color: myColors }],
            [{ background: myColors }],

        ]
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "code-block",
        "clean"
    ];
    return (
        <>

            <Input className="mt-4" placeholder="title" ref={titleRef} />
            <Input className="mt-4" placeholder="summary" ref={summaryRef} />
            <Input className="my-4" placeholder="cover image" ref={coverImageRef} />
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={code}
                placeholder="content..."
                onChange={handleProcedureContentChange}
            />
            <Input className="mt-4" placeholder="tags" ref={tagsRef} />

            <Button className="my-4" onClick={handleSubmit} >Submit</Button>
        </>
    );
}
