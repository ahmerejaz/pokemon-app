import { Link } from 'react-router-dom';
import { retrieveID } from '../pages/pokemon/helper';
import { Pokemon } from '../types';

type Props = {
  pokemons: Pokemon[];
};

const Table = ({ pokemons }: Props) => {
  return (
    <table className='table'>
      <thead className='bg-dark text-light'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col' className='float-end'>
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <tr key={index}>
            <th scope='row'>{index + 1}</th>
            <td>{pokemon.name}</td>
            <td className='float-end'>
              <Link
                className='btn btn-outline-success'
                to={`pokemon/${retrieveID(pokemon.url)}`}
              >
                view
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
