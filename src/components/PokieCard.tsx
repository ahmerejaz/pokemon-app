import { PokemonDetails, PokemonType } from '../types';
import './styles/PokieCard.css';

type Props = {
  pokemon: PokemonDetails;
};

export const PokieCard = ({ pokemon }: Props) => {
  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={pokemon.image}
        alt={`${pokemon.name}`}
      />
      <div className='details'>
        <div>Weight: {pokemon.weight}</div>
        <div>Height: {pokemon.height}</div>
      </div>
      <div className='types'>
        <div>Types:</div>
        <div className='type-list'>
          {pokemon.types.map((type: PokemonType) => (
            <div key={type.type.name} className='type-item'>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
      <div className='name'>{pokemon.name}</div>
    </div>
  );
};
