import React from 'react';
import { usePokemonList } from '../context/pokemonlistContext';
import SavedDetails from '../components/SavedDetails';
import { v4 } from 'uuid';

const SavedPokemon = () => {
  const { savedPokemon } = usePokemonList();
  return (
    <>
      <h1>{savedPokemon?.length ? "Saved Pokemons":null}</h1>
      {savedPokemon?.length > 0 ? (
        <div className='saved-pokemon-container'>
          {savedPokemon?.map((pokemon) => {
            return (
              <div key={v4()} className='pokemon-container'>
                <SavedDetails
                  id={pokemon?.id}
                  name={pokemon?.name}
                  image={pokemon?.image}
                  type={pokemon?.type ? pokemon?.type : undefined}
                  stats={pokemon?.stats}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className='empty-container'>
         No Saved Pokemons..
        </div>
      )}
    </>
  );
};

export default SavedPokemon;