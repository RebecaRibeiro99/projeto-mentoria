import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import dotenv from "dotenv";
import { routers } from "./infra/api/routes/routes";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);

const PORT = process.env.PORT ?? 3000;

AppDataSource.initialize().then(async () => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log("Server running on port 3000");
  });
});
