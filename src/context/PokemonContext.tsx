/** @format */
import React, { createContext, useState, useEffect } from "react";
import { PokemonDetail, PokemonResult } from "./Domain";

type PokemonProps = {
  selectedPokemon: string | null;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<string | null>>;
  pokemonResult: PokemonResult | null;
  pageCount: number;
  loadPaginationData: (page: number) => void;
  pokemonDetail: PokemonDetail | null;
  loadDetail: (url: string) => Promise<void>;
};

export const PokemonContext = createContext<PokemonProps | null>(null);
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8";
const ITEMS_PER_PAGE = 8;
export const PokemonProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = React.useState<string | null>(
    null
  );

  const [pokemonResult, setPokemonResult] = useState<PokemonResult | null>(
    null
  );
  const [pageCount, setPageCount] = useState<number>(0);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null
  );
  const fetchData = async (apiUrl: string) => {
    try {
      const response = await fetch(`${apiUrl}`);
      const pokemons = (await response.json()) as PokemonResult;
      const pageCount = Math.ceil(pokemons.count / ITEMS_PER_PAGE);
      setPokemonResult(pokemons);
      setPageCount(pageCount);
    } catch (error) {
      console.error("Error loading pokemon list:", error);
    }
  };
  useEffect(() => {
    fetchData(BASE_URL);
  }, []);

  const loadPaginationData = (page: number) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${ITEMS_PER_PAGE}`;
    fetchData(url);
  };

  const loadDetail = async (url: string) => {
    try {
      const response = await fetch(`${url}`);
      const pokemonDetails = (await response.json()) as PokemonDetail;
      setPokemonDetail(pokemonDetails);
    } catch (error) {
      console.error("Error loading detail result:", error);
    }
  };
  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
        pokemonResult,
        pageCount,
        loadPaginationData,
        pokemonDetail,
        loadDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
