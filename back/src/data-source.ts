import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
export const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbURL: string | undefined = process.env.DATABASE_URL;

  if (dbURL === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  if (dbURL === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }
  if (!dbURL) {
    throw new Error("Missing env var: DATABASE_URL");
  }

  return {
    type: "postgres",

    url: dbURL,
    logging: true,
    synchronize: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const config = setDataSourceConfig();
export const AppDataSource = new DataSource(config);
