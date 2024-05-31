import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/pokemon/List/List';
import PokemonDetails from './pages/pokemon/details/Details';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
