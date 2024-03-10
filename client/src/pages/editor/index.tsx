import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";

export default function Editor() {
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

    const [code, setCode] = useState("");
    const handleProcedureContentChange = (content: any) => {
        setCode(content);
    };
    return (
        <>
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={code}

                onChange={handleProcedureContentChange}
            />
            <Button className="mt-4" >Submit</Button>
        </>
    );
}
