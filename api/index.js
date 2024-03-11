import express, { response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/posts", postRoutes);

const CONNECT_URI = "mongodb+srv://dylan:dylan@cluster0.g91jroa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`DB connected and Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


app.get('/', (req, res) => {
    res.write('<h1 style="text-align: center" >Dylan Blog API Is Running</h1>');
    res.end();
});