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
};

export const PokemonContext =
	createContext<PokemonProps | null>(
		null
	);
const BASE_URL =
	"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8";

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

	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await fetch(
				`${BASE_URL}`
			);
			const pokemons =
				(await response.json()) as PokemonResult;

			console.log(pokemons);
			setPokemonResult(pokemons);
		};

		fetchPokemons();
	}, []);
	return (
		<PokemonContext.Provider
			value={{
				selectedPokemon,
				setSelectedPokemon,
				pokemonResult,
			}}>
			{children}
		</PokemonContext.Provider>
	);
};
