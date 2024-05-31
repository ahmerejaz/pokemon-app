import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';
import { Pokemon } from '../types';
import { retrieveID } from '../pages/pokemon/helper'; 

const mockPokemons: Pokemon[] = [
  { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' }
];

const setup = () => render(
  <Router>
    <Table pokemons={mockPokemons} />
  </Router>
);

describe('Table Component', () => {
  it('displays table headers correctly', () => {
    setup();
    expect(screen.getByText('#')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('renders all pokemons correctly in the table', () => {
    setup();
    mockPokemons.forEach((pokemon, index) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
    });
  });

  it('has correct links for each pokemon', () => {
    setup();
    const viewLinks = screen.getAllByRole('link', { name: 'View' });
    expect(viewLinks.length).toBe(mockPokemons.length);
  
    mockPokemons.forEach((pokemon, index) => {
      const expectedPath = `/pokemon/${retrieveID(pokemon.url)}`;
      expect(viewLinks[index]).toHaveAttribute('href', expectedPath);
    });
  });
  

  it('displays no rows when there are no pokemons', () => {
    render(<Router><Table pokemons={[]} /></Router>);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('View')).not.toBeInTheDocument();
  });
});
