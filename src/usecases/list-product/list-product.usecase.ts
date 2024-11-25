import { Product } from "../../domain/product/dto/product.dto";
import { ProductGateway } from "../../domain/product/gateway/product.gateway";
import { Usecase } from "../usecase";

export type ListProductInputDto = void;

export type ListProductOutputDto = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}[];

export class ListProductUsecase
  implements Usecase<ListProductInputDto, ListProductOutputDto>
{
  private constructor(private readonly productGateway: ProductGateway) {}

  public static create(productGateway: ProductGateway) {
    return new ListProductUsecase(productGateway);
  }

  public async execute(): Promise<ListProductOutputDto> {
    const aProducts = await this.productGateway.getProducts();

    const output = this.presentOutput(aProducts);

    return output;
  }

  private presentOutput(products: Product[]): ListProductOutputDto {
    return products.map((p) => {
      return {
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: p.quantity,
      };
    });
  }
}
