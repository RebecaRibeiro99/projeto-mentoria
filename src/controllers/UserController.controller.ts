import { Request, Response, Router } from "express";
import { ProductsRepository } from "../infra/repositories/products/products.repository";
import { ListProductUsecase } from "../usecases/list-product/list-product.usecase";

const productRouter = Router();
const repository = new ProductsRepository();

productRouter.get("/", async (_req: Request, res: Response): Promise<any> => {
  const products = await ListProductUsecase.create(repository).execute();
  return res.status(200).json(products);
});

export default productRouter;
