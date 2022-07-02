import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useGoogleAuth } from '../context/authContext';
import { usePokemonList } from '../context/pokemonlistContext';
import LogoutButton from '../pages/Logout';
import "./Navbar.css"
import { Searchbar } from './Searchbar/Searchbar';

export const Navbar = ()=>{
    const { name, email } = useGoogleAuth();
    const { savedPokemon } =usePokemonList();
    return(
        <div>
        <nav className='nav-bar'>
          <div className='left-container'>
          <NavLink
                to='/list'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'blue' : 'white',
                  };
                }}
              >
                HOME
              </NavLink>
             <NavLink
                to='/saved'
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'blue' : 'white',
                  };
                }}
              >
                <Fragment className='saved-icon-container'>
                    {`SAVED POKEMONS (${savedPokemon?.length})`}
                 
               </Fragment>
              </NavLink>
           </div>
          <div className='search-bar'><Searchbar/></div>
          <div className='right-container'><LogoutButton/></div>
        </nav>
        <div className='user-info'>
          <p className='user-name'> Name - {name ? name : 'Name Loading...'}</p>
          <p>Email - {email ? email :'Email Loading...'}</p>
        </div>
   </div>
     
    )
}