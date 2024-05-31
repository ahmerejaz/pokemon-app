import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {PokieCard } from '../components/PokieCard';
import { PokemonDetails } from '../types';

const mockPokemon: PokemonDetails = {
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  name: 'Bulbasaur',
  types: [
    { type: { name: 'Grass' } },
    { type: { name: 'Poison' } }
  ],
  height: 12,
  weight: 12,
};

const setup = () => {render(<PokieCard pokemon={mockPokemon} />)}
describe('PokieCard Component', () => {
  it('displays the Pokemon image with correct src and alt text', () => {
    setup();
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockPokemon.image);
    expect(image).toHaveAttribute('alt', mockPokemon.name);
  });

  it('displays the correct weight and height', () => {
    setup();
    const weightDisplay = screen.getByText(`weight: ${mockPokemon.weight}`);
    const heightDisplay = screen.getByText(`height: ${mockPokemon.height}`);
    expect(weightDisplay).toBeInTheDocument();
    expect(heightDisplay).toBeInTheDocument();
  });

  it('renders all Pokemon types correctly', () => {
    setup();
    mockPokemon.types.forEach(type => {
      expect(screen.getByText(type.type.name)).toBeInTheDocument();
    });
  });

  it('displays the Pokemon name in the footer', () => {
    setup();
    const nameDisplay = screen.getByText(mockPokemon.name);
    expect(nameDisplay).toBeInTheDocument();
  });

  it('has accessible image alt text', () => {
    setup();
    const image = screen.getByRole('img');
    expect(image).toHaveAccessibleName(mockPokemon.name);
  });

});
