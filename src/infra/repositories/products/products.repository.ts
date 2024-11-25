import { AppDataSource } from "../../../database/data-source";
import { Product } from "../../../domain/product/dto/product.dto";
import ProductDB from "../../../domain/product/entity/product.entity";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";

export class ProductsRepository implements ProductGateway {
  repository = AppDataSource.getRepository(ProductDB);

  public save(product: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async getProducts(): Promise<Product[]> {
    const response = await this.repository.find();

    return response.map((product) => {
      const item = Product.with(product);
      return item;
    });
  }
}
