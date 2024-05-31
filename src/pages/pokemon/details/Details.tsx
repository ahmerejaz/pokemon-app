import './Details.css';
import { useParams } from 'react-router-dom';
import { useGetPokemonByIdQuery } from '../../../api/pokemon';
import Loader from '../../../components/Loader';
import PokieCard from '../../../components/PokieCard';

const Details = () => {
  const { id } = useParams();
  const { data: pokemon, error, isLoading } = useGetPokemonByIdQuery(id);
  if (error) return <div>Unable to fetch data!</div>;
  console.log(pokemon);
  return (
    <div className='container w-50 my-5'>
      <center className='lead fw-bold my-3'> Pokie Card for You ❤️‍🔥 </center>
      <hr />
      <div className='pokemon'>{isLoading && <Loader />}</div>
      <div className='d-flex justify-content-center'>
        {pokemon && <PokieCard pokemon={pokemon} />}
      </div>
    </div>
  );
};

export default Details;
