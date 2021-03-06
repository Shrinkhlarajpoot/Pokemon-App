import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useGoogleAuth } from './authContext';
const ListContext = createContext();
export const ListProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredArr, setFilteredArr] = useState([...pokemons]);
  const [page, setPage] = useState(50);
  const [savedPokemon, setSavedPokemon] = useState([]);
  const { token } = useGoogleAuth();


  useEffect(() => {
    (async () => {
      try {
        const response =await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
        );
        function pokemonDetailsFunc(result) {
          result?.forEach(async (pokemon) => {
            const response = await axios.get(
              ` https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
          setPokemons((currentList) => [...currentList, response?.data]);
          });
        }
        pokemonDetailsFunc(response?.data?.results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  useEffect(() => {
    !token && setSavedPokemon([]);
  }, [token]);
  return (
    <ListContext.Provider
      value={{
        pokemons,
        setPokemons,
        filteredArr,
        setFilteredArr,
        search,
        setSearch,
        page,
        setPage,
        savedPokemon,
        setSavedPokemon,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const usePokemonList = () => useContext(ListContext);