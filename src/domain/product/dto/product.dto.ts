export interface IProductProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export class Product {
  private constructor(private readonly props: IProductProps) {
    this.validate();
  }

  public static create(name: string, price: number) {
    return new Product({
      id: 1,
      name,
      price,
      quantity: 0,
    });
  }

  public static with(props: IProductProps) {
    return new Product(props);
  }

  private validate() {
    if (this.props.quantity < 0) {
      throw new Error("Product quantity should be positive");
    }
  }
  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }
  public get price() {
    return this.props.price;
  }
  public get quantity() {
    return this.props.quantity;
  }
  public increaseQuantity(quantity: number) {
    this.props.quantity += quantity;
  }

  public decreaseQuantity(quantity: number) {
    this.props.quantity -= quantity;
  }
}
