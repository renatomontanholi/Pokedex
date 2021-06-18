import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

interface PokemonListItem  {
  pokeId:number,
  name :string,
  url: string,
  img:string,
  types: string[],
}

export default function List() {
  const history = useHistory();
  const [offset, setOffset] = useState(0);
  const [pokeList, setPokelist] = useState<any>([])

  useEffect(()=>{
    async function fetchPokemon() {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`,{params: {limit: 25, offset}})
      const pokemons = data.results;

      for (const pokemon of pokemons) {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        pokemon.img = data?.sprites?.front_default;
        pokemon.pokeId = data.id;
        pokemon.types = data.types.map((type:any)=> type.type.name)
      }

      if(offset > 0) {
        setPokelist([...pokeList,...data.results])
      } else {
        setPokelist(data.results)
      }
    }
    fetchPokemon();
  }, [offset]);

  const handleClick = (pokeId: number) => {
    history.replace('/pokemon/'+pokeId);
  }

  return (
    <div>
      <ul>
        {pokeList.map((item:PokemonListItem, index:number)=> (
          <li key={index} onClick={()=>handleClick(item.pokeId)}>
            <img src={item.img} alt=''/>
            <span className='pokeId'>#{item.pokeId}</span>
            <span className='name'>{item.name}</span>
            <span className='types'>
              {item.types.map((type, indexType)=>(
                <span key={type+indexType} className={type}>{type}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <div className="show-more">
        <button onClick={()=>setOffset(offset+25)}> Show more </button>
      </div>
    </div>
  );
}
