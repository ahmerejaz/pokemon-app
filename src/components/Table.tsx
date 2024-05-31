import { Link } from 'react-router-dom';
import { Pokemon } from '../types';
import './styles/Table.css';

type Props = {
  pokemons: Pokemon[];
};

const TableRow = ({ pokemon, index }: { pokemon: Pokemon; index: number }) => {
  return (
    <tr className='col'>
      <th scope='row'>{index + 1}</th>
      <td className='uppercase'>{pokemon.name}</td>
      <td>
        <Link
          className='button'
          to={`pokemon/${pokemon.url.split('/').splice(-2, 1)[0]}`}
        >
          View
        </Link>
      </td>
    </tr>
  );
};

const Table = ({ pokemons }: Props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon, index) => (
          <TableRow key={index} pokemon={pokemon} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
