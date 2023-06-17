import Express from "express";
import PokemonController from "../Controllers/Pokemom.controller.js";
const a = 90;
export default class Pokemon {
  constructor(){
    this.router = Express.Router();
  }
  test = () => {
    console.log(a + a);
  };
  getApiRoutes = () => {
    const pokemonController = new PokemonController();
    this.router.get('/pokemon', pokemonController.getPokemons);
    return this.router;
  }
}
