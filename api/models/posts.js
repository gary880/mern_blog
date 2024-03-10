import mongoose from "mongoose";


const postSchema = mongoose.Schema({
    title: String,
    summary: String,
    content: String,
    image: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Post = mongoose.model("Post", postSchema);

export default Post;