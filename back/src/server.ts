import "dotenv/config";
import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then((): void => {
    console.log("Data source initialize");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, (): void => {
      console.log(`Server running on Port: ${PORT}`);
    });
  })
  .catch((error) => console.log("error during Data source initialize", error));
