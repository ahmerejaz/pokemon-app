import { PokemonDetails, PokemonType } from '../types';

type Props = {
  pokemon: PokemonDetails;
};

const PokieCard = ({ pokemon }: Props) => {
  return (
    <div className='card mx-3 blogs'>
      <img className='card-img-top' src={pokemon.image} alt={pokemon.name} />
      <hr className='m-0' />
      <div className='d-flex p-3 justify-content-between w-100'>
        <div>width: {pokemon.weight}</div>
        <div>height: {pokemon.height}</div>
      </div>
      <div className='d-flex ps-3 justify-content-between w-100 border'>
        <div>Types</div>
        <div className='border-start'>
          {pokemon.types.map((type: PokemonType) => (
            <div>
              <div className='p-4'>{type.type.name}</div>
              <hr className='m-0' />
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex p-3 justify-content-center w-100 bg-success text-light'>
        <div>{pokemon.name}</div>
      </div>
    </div>
  );
};

export default PokieCard;
