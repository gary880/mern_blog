import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPost } from "@/services/post";
import { stringToArray } from "@/services/functions/stringToArray";
import { useNavigate } from "react-router-dom";

export default function Editor() {
    const tagsRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);
    const coverImageRef = useRef<HTMLInputElement>(null);
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleProcedureContentChange = (content: any) => {
        setCode(content);
    };
    
    const handleSubmit = async () => {
        await createPost({
            title: titleRef.current?.value as string,
            summary: summaryRef.current?.value as string,
            content: code,
            tags: stringToArray(tagsRef.current?.value as string),
            image: coverImageRef.current?.value as string,
        }).then((response) => {
            if (response.status === 201) {
                navigate("/");
            }
        })

    }

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

            <Button className="mt-4" onClick={handleSubmit} >Submit</Button>
        </>
    );
}
