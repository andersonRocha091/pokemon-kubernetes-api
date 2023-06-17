import Express from "express";
import Pokemon from "./routes/Pokemon.js";

const app = Express();
const pokemon = new Pokemon();

app.use("/", pokemon.getApiRoutes());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}, http://localhost:${port}`);
});
