import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
class ProductDB {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("varchar", { length: 255, nullable: false })
  name!: string;

  @Column("decimal", { precision: 4, scale: 2 })
  price!: number;

  @Column("int")
  quantity!: number;
}

export default ProductDB;
