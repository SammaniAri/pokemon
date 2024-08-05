/** @format */
import React, {
	createContext,
	useState,
	useEffect,
} from "react";

export type Pokemon = {
	name: string;
	url: string;
};
type PokemonProps = {
	selectedPokemon: Pokemon | null;
	setSelectedPokemon: React.Dispatch<
		React.SetStateAction<Pokemon | null>
	>;
};

export const PokemonContext =
	createContext<PokemonProps | null>(
		null
	);

export const PokemonProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [
		selectedPokemon,
		setSelectedPokemon,
	] = React.useState<Pokemon | null>(
		null
	);
	return (
		<PokemonContext.Provider
			value={{
				selectedPokemon,
				setSelectedPokemon,
			}}>
			{children}
		</PokemonContext.Provider>
	);
};
