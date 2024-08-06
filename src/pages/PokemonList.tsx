/** @format */
import {
	useContext,
	useEffect,
	useState,
} from "react";
import PokePagination from "../components/PokePagination";
import ListItemCard from "../components/ListItemCard";
import "./PokemonList.css";
import Typography from "@mui/material/Typography";
import { Pokemon } from "../context/PokemonContext";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
	const pokemonContext = useContext(
		PokemonContext
	);

	const [
		pokemonsList,
		setPokemonsList,
	] = useState<Pokemon[]>();
	useEffect(() => {
		const list =
			pokemonContext?.pokemonResult
				?.results;
		setPokemonsList(list);
	}, [pokemonContext?.pokemonResult]);

	return (
		<div className="Screen">
			<img
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
				alt="pikachu"
				style={{
					height: 200,
					width: 200,
				}}
			/>
			<div className="Sitename">
				<Typography variant="h5">
					Pokemon Explorer
				</Typography>
			</div>

			<div className="Wrapper">
				{pokemonsList?.map((item) => (
					<div
						key={item.name}
						className="component-container">
						<ListItemCard
							name={item.name}
							url={item.url}
						/>
					</div>
				))}
			</div>

			<div className="Pagi">
				<PokePagination />
			</div>
		</div>
	);
};
export default PokemonList;
