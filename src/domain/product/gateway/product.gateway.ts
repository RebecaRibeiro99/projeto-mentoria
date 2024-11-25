import { Product } from "../dto/product.dto";

export interface ProductGateway {
  save(product: Product): Promise<void>;
  getProducts(): Promise<Product[]>;
}
