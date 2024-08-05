/** @format */
import {
	useContext,
	useState,
	useEffect,
} from "react";
import { PokemonContext } from "../context/PokemonContext";
import "./PokemonDetail.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import {
	Button,
	CardActionArea,
	CardActions,
} from "@mui/material";

type PokemonDetail = {
	abilities: Ability[];
	sprites: Sprite;
};
type Ability = {
	ability: AbilityNameAndUrl;
	is_hidden: boolean;
	slot: number;
};

type AbilityNameAndUrl = {
	name: string;
	url: string;
};

type Sprite = {
	back_default: string;
};
const PokemonDetail = () => {
	const pokemonContext = useContext(
		PokemonContext
	);
	console.log(
		pokemonContext?.selectedPokemon
	);
	const selectedPokemon =
		pokemonContext?.selectedPokemon;

	const BASE_URL = selectedPokemon?.url;
	const [
		pokemonDetail,
		setPokemonDetail,
	] = useState<PokemonDetail>();

	useEffect(() => {
		const fetchAbilities = async () => {
			const response = await fetch(
				`${BASE_URL}`
			);
			const pokemonDetails =
				(await response.json()) as PokemonDetail;
			console.log(pokemonDetails);
			setPokemonDetail(pokemonDetails);
		};
		fetchAbilities();
	}, []);
	return (
		<div className="DetailScreen">
			<Card
				sx={{ maxWidth: 345 }}
				style={{ margin: 8 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="/logo512.png"
						alt="green iguana"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{selectedPokemon
								? selectedPokemon.name
								: "Name"}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							width="400px">
							<strong>
								LIST OF ABILITIES
							</strong>
							{pokemonDetail?.abilities.map(
								(item) => (
									<p
										key={
											item.ability.url
										}>
										{item.ability.name}
									</p>
								)
							)}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<NavLink to="/">
						<Button
							size="small"
							color="primary">
							Go Back Button
						</Button>
					</NavLink>
				</CardActions>
			</Card>
		</div>
	);
};
export default PokemonDetail;
