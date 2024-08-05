/** @format */
import {
	useEffect,
	useState,
} from "react";
import PokePagination from "../components/PokePagination";
import ListItemCard from "../components/ListItemCard";
import "./PokemonList.css";
import Typography from "@mui/material/Typography";

const BASE_URL =
	"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8";

type Pokemon = {
	name: string;
	url: string;
};

type PokemonResult = {
	count: number;
	next: string;
	previous: string;
	results: Pokemon[];
};

const PokemonList = () => {
	const [pokemons, setPokemons] =
		useState<Pokemon[]>([]);
	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await fetch(
				`${BASE_URL}`
			);
			const pokemons =
				(await response.json()) as PokemonResult;

			console.log(pokemons);
			setPokemons(pokemons.results);
		};

		fetchPokemons();
	}, []);

	return (
		<div className="Screen">
			<div className="Sitename">
				<Typography variant="h5">
					Pokemon Explorer
				</Typography>
			</div>

			<div className="Wrapper">
				{pokemons.map((item) => (
					<div
						key={item.name}
						className="component-container">
						<ListItemCard
							name={item.name}
							url={item.url}
						/>
					</div>
				))}

				<PokePagination />
			</div>
		</div>
	);
};
export default PokemonList;
