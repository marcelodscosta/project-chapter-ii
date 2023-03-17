import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());


app.use(categoriesRoutes);




app.listen(PORT, () => {
    console.log(`Server is runnint on port ${PORT}`);
});
