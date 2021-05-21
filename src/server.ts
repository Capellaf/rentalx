import express from "express";
import swaggerUi from "swagger-ui-express"
import bodyParser from "body-parser"
import { router } from "./routes";

const swaggerFile = require("./swagger.json");

const app = express();

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);

app.listen(3333, () => { console.log("Server is running!") })
