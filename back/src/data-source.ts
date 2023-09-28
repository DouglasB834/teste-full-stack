import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
// import { User } from "./entities";
// import { Users } from "./entities/usersEntity";
export const setDataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbURL: string | undefined = process.env.DATABASE_URL;
  console.log(dbURL, "nadaaaaa");
  // if (nodeEnv === "production") {
  //   return {
  //     type: "postgres",
  //     url: process.env.DATABASE_URL,
  //     entities: [],
  //     migrations: [],
  //   };
  // }

  // if (nodeEnv === "test") {
  //   return {
  //     type: "sqlite",
  //     database: ":memory:",
  //     synchronize: true,
  //     entities: [],
  //   };
  // }
  if (!dbURL) {
    throw new Error("Missing env var: DATABASE_URL");
  }

  return {
    type: "postgres",
    // host: process.env.PGHOST,
    // port: parseInt(process.env.PGPORT!),
    // username: process.env.PGUSER,
    // password: process.env.PGPASSWORD,
    // database: process.env.PGDATABASE,
    url: dbURL,
    logging: true,
    synchronize: true, //tda vez que reiniciar perde informações deixa false final
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const config = setDataSourceConfig();
export const AppDataSource = new DataSource(config);
