import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { CreateProductsTable1732506326359 } from "./migrations/1732506326359-CreateProductsTable";
import ProductDB from "../domain/product/entity/product.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST?.toString(),
  port: parseInt(process.env.DB_PORT ?? "5432", 10),
  username: process.env.DB_USER?.toString(),
  password: process.env.DB_PASSWORD?.toString(),
  database: process.env.DB_NAME?.toString(),
  synchronize: true,
  logging: false,
  entities: [ProductDB],
  migrations: [CreateProductsTable1732506326359],
  subscribers: [],
});
