import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { PokemonData } from "../../types";
import PokeInfo from "./components/PokeInfo";

const Pokemon = () => {
  const { pokeId } : any = useParams();
  const history = useHistory();
  const [pokemon, setPokemon] = useState<PokemonData>()

  useEffect(()=>{
    async function fetchPokemon() {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
      data.height = data.height/10;
      data.weight = data.weight/10;
      data.types = data.types.map((type:any)=> type.type.name)
      console.log(data)
      setPokemon(data)
    }
    fetchPokemon()
  },[pokeId])
  return (
    <div>
      <PokeInfo pokemon={pokemon} />
      <div className="show-more">
        <button onClick={()=>history.replace('/')}> Back to list </button>
      </div>
    </div>
  );
}

export default Pokemon;