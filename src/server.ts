import express from "express";
import bodyParser from "body-parser"
import { categoriesRoutes } from "./routes/category.routes";

const app = express();

app.use(bodyParser.json());
app.use("/categories", categoriesRoutes);

app.listen(3333, () => { console.log("Server is running!") })
