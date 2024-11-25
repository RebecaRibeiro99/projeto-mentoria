import { Request, Response, Router } from "express";
import ProductRepository from "../repositories/ProductRepository.repository";

const productRouter = Router();

productRouter.get("/", async (_req: Request, res: Response): Promise<any> => {
  const products = await ProductRepository.getProducts();
  return res.status(200).json(products);
});

export default productRouter;
