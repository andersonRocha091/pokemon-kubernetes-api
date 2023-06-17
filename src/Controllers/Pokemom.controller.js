export default class PokemonController{
  constructor(){
    this.baseUrl = 'https://pokeapi.co/api/v2';
  }

  getPokemons = async(req,res) => {
    console.log('this is a query:',req.query);
    console.log('URL: ', `${this.baseUrl}/pokemon/${req.query.name}`);
    const api = await fetch(`${this.baseUrl}/pokemon/${req.query.name}`);
    if (api.ok) {
      const data = await api.json();
      try {
        res.json(data)
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
  }

};