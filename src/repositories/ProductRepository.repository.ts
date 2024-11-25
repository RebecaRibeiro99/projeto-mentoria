import { AppDataSource } from "../database/data-source";
import Product from "../domain/product/entity/product1.entity";

const productRepository = AppDataSource.getRepository(Product);

//tipo iProduct
const getProducts = (): Promise<any[]> => {
  return productRepository.find();
};

export default { getProducts };
