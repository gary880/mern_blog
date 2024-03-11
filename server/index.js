import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/posts", postRoutes);

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_LINK } = process.env;
const CONNECT_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_LINK}/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`DB connected and Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


app.get('/', (req, res) => {
    res.write('<h1 style="text-align: center" >Dylan Blog API Is Running</h1>');
    res.end();
});
