import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';


import { gapi } from 'gapi-script';
import { PrivateRoute } from './PrivateRoute';

import { useGoogleAuth } from './context/GoogleAuthContext';

import { usePokemonList } from './context/ListContext';
import { Fragment } from 'react';
import PokemonsList from './pages/PokemonsList';
import LogoutButton from './pages/Logout';
import LoginButton from './pages/Login';
import { Searchbar } from './pages/Searchbar';
import SavedPokemon from './pages/SavedPokemon';
function App() {
  const { token, name, email } = useGoogleAuth();
  const { savedPokemon } = usePokemonList();
  return (
    <div className='App'>
      {token && (
        <nav className='nav-bar'>
          <div className='left-container'>
            {token && (
              <NavLink
                to='/list'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'red' : 'white',
                  };
                }}
              >
                Home
              </NavLink>
            )}
            {token && (
              <NavLink
                to='/saved'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'red' : 'white',
                  };
                }}
              >
                <Fragment className='saved-icon-container'>
                  Saved Pokemons
                </Fragment>
                <span className='saved-pokemon-count'>
                  {savedPokemon?.length}
                </span>
              </NavLink>
            )}
          </div>
          <div className='search-bar'>{token && <Searchbar/>}</div>
          <div className='right-container'>{token && <LogoutButton/>}</div>
        </nav>
      )}
      {token && (
        <div className='user-info'>
          <p className='user-name'>Name - {name ? name : 'Loading...'}</p>
          <p>Email - {email ? email : 'Loading...'}</p>
        </div>
      )}
      <Routes>
        <Route path='/' element={<LoginButton/>} />
        <Route
          path='/list'
          element={
            <PrivateRoute>
            <PokemonsList/>
            </PrivateRoute>
          }
        />
        <Route
          path='/saved'
          element={
            <PrivateRoute>
            <SavedPokemon/>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

