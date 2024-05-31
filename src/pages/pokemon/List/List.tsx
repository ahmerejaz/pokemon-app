import { useGetPokemonsListQuery } from '../../../api/pokemon';

import Table from '../../../components/Table';
import Loader from '../../../components/Loader';

const List = () => {
  const { data: pokemons, error, isLoading } = useGetPokemonsListQuery('20');

  if (error) return <div>Unable to fetch data!</div>;

  return (
    <div className='container w-50 my-5'>
      <center className='lead fw-bold my-3'> Pokemons for You ❤️‍🔥 </center>
      <hr />
      <div className='pokemon'>
        {isLoading && <Loader />}
        {pokemons && <Table pokemons={pokemons} />}
      </div>
    </div>
  );
};

export default List;
