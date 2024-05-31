export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  image: string;
  types: PokemonType[];
}

export interface PokemonDetailsResponse {
  name: string;
  height: number;
  weight: number;
  image: string;
  sprites: { front_default: string };
  types: PokemonType[];
}

export interface PokemonType {
 type: { name: string } ;
}


