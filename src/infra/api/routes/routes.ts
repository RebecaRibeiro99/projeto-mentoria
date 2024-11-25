import { Router } from "express";
import productRouter from "../../../controllers/UserController.controller";

const routers = Router();

routers.use("/products", productRouter);

export { routers };
