/** @format */
import React, {
	createContext,
	useState,
	useEffect,
} from "react";
export type PokemonResult = {
	count: number;
	next: string;
	previous: string;
	results: Pokemon[];
};
export type Pokemon = {
	name: string;
	url: string;
};

type PokemonProps = {
	selectedPokemon: Pokemon | null;
	setSelectedPokemon: React.Dispatch<
		React.SetStateAction<Pokemon | null>
	>;
	pokemonResult: PokemonResult | null;
	pageCount: number;
	loadPaginationData: (
		page: number
	) => void;
};

export const PokemonContext =
	createContext<PokemonProps | null>(
		null
	);
const BASE_URL =
	"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8";
const ITEMS_PER_PAGE = 8;
export const PokemonProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [
		selectedPokemon,
		setSelectedPokemon,
	] = React.useState<Pokemon | null>(
		null
	);

	const [
		pokemonResult,
		setPokemonResult,
	] = useState<PokemonResult | null>(
		null
	);
	const [pageCount, setPageCount] =
		useState<number>(0);

	const fetchData = async (
		apiUrl: string
	) => {
		const response = await fetch(
			`${apiUrl}`
		);
		const pokemons =
			(await response.json()) as PokemonResult;
		const pageCount = Math.ceil(
			pokemons.count / ITEMS_PER_PAGE
		);
		console.log(pokemons);
		setPokemonResult(pokemons);
		setPageCount(pageCount);
	};
	useEffect(() => {
		fetchData(BASE_URL);
	}, []);

	const loadPaginationData = (
		page: number
	) => {
		const offset =
			(page - 1) * ITEMS_PER_PAGE;
		const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${ITEMS_PER_PAGE}`;
		fetchData(url);
	};

	return (
		<PokemonContext.Provider
			value={{
				selectedPokemon,
				setSelectedPokemon,
				pokemonResult,
				pageCount,
				loadPaginationData,
			}}>
			{children}
		</PokemonContext.Provider>
	);
};
