import { useState } from "react";
import { PokemonData } from "../../../types";

interface PokeInfoProps  {
  pokemon: PokemonData | undefined,
}

const PokeInfo = ({pokemon}:PokeInfoProps) => {
  const [frontBack, setFrontBack] = useState(true)
  if(!pokemon) return (<></>)

  return (
    <div className="pokemon">
      <img 
        alt='' 
        width='250'
        src={frontBack ? pokemon?.sprites.front_default : pokemon?.sprites.back_default} onClick={()=>setFrontBack(!frontBack)} 
      />
      <div className="pokemon-data">
        <div>
          <span className="name">{pokemon?.name}</span>
            {pokemon?.types.map((type: string, indexType: number)=>(
                  <span key={type+indexType} className={'types ' + type}>{type}</span>
                ))}
        </div>
        <div>
          <b>Weight:&nbsp;</b><span>{pokemon?.weight}kg</span>
        </div>
        <div>
          <b>Height:&nbsp;</b><span>{pokemon?.height}m</span>
        </div>
        <div>
          <b>Abilities:&nbsp;</b><span>{pokemon?.weight}kg</span>
        </div>
      </div>
    </div>
  );
}

export default PokeInfo;


