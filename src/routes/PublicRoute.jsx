import { Routes, Route} from 'react-router-dom';
import { gapi } from 'gapi-script';
import { PrivateRoute } from './PrivateRoute';
import PokemonsList from '../pages/PokemonsList';
import SavedPokemon from '../pages/SavedPokemon';
import LoginButton from '../pages/Login';
export const PublicRoute = ()=>{
  return(
    
      <div>
    
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
    )
}