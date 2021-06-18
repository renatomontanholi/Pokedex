import { render, screen } from '@testing-library/react';
import PokeInfo from './PokeInfo';

const pokemon = {
  abilities: [
      {
          ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/"
          },
          is_hidden: false,
          slot: 1
      },
      {
          ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/"
          },
          is_hidden: true,
          slot: 3
      }
  ],
  height: 0.7,
  id: 1,
  name: "bulbasaur",
  types: [
      "grass",
      "poison"
  ],
  weight: 6.9,
  sprites: {
    back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  }
}

test('renders without pokemon data', () => {
  render(<PokeInfo pokemon={undefined}/>);
  const pokemonName = screen.queryByText(/Bulbasaur/i);
  expect(pokemonName).toBe(null)
});
test('renders with pokemon data', () => {
  render(<PokeInfo pokemon={pokemon}/>);
  const pokemonName = screen.queryByText(/Bulbasaur/i);
  expect(pokemonName).toBeInTheDocument();
});
