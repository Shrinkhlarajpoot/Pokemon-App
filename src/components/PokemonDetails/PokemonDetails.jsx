import React, { useState } from 'react';
import PokemonStats from '../PokemonStats';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { usePokemonList } from '../../context/pokemonlistContext';
import "./PokemonDetails.css"
const PokemonDetails = ({ image, name, id, type, stats }) => {
  const style = type + ' thumb-container';
  const { savedPokemon, setSavedPokemon } = usePokemonList();
  const saveHandler = () => {
    setSavedPokemon((currentList) => [
      ...currentList,
      { image, name, id, type, stats },
    ]);
  };
  const PokemonIsSavedAlready = savedPokemon?.some((pokemon) => pokemon.id === id);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <>
      <div className='pokemon-card'
        onMouseEnter={() => setShowDetails(false)}
        onMouseLeave={() => setShowDetails(true)}
      >
        {showDetails ? (
          <div className={style}>
            <LazyLoadImage alt={name} src={image} effect='blur' />
           <div className='number'>
              <small>#{id}</small>
            </div>

            <div className='detail-wrapper'>
              <h3>{name}</h3>
              <small>Type: {type}</small>
            </div>
          </div>
        ) : (
          <div>
            <PokemonStats stats={stats} />
          </div>
        )}
      </div>

      <button
        className='save-btn'
        onClick={saveHandler}
        disabled={PokemonIsSavedAlready}
      >
       {PokemonIsSavedAlready?"Saved":"Save"}
      </button>
    </>
  );
};

export default PokemonDetails;