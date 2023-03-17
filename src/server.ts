import express from "express";

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is runnint on port ${PORT}`);
});
