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
	Box,
} from "@mui/material";
import {
	Ability,
	PokemonDetail,
} from "../context/Domain";

const PokemonDetailComponent = () => {
	const pokemonContext = useContext(
		PokemonContext
	);
	const selectedPokemon =
		pokemonContext?.selectedPokemon;

	const [
		pokemonDetail,
		setPokemonDetail,
	] = useState<PokemonDetail | null>();

	useEffect(() => {
		setPokemonDetail(
			pokemonContext?.pokemonDetail
		);
	}, [pokemonContext?.pokemonDetail]);
	return (
		<div className="DetailScreen">
			<Card
				sx={{ maxWidth: 345 }}
				style={{
					margin: 8,
					backgroundColor: "#fbffea",
				}}>
				<CardActionArea>
					<Box
						display="flex"
						justifyContent="right"
						alignItems="center"
						height={200}>
						<CardMedia
							component="img"
							style={{
								height: 200,
								width: 200,
							}}
							image={
								pokemonDetail?.sprites
									?.front_default
							}
							alt="green iguana"
						/>
					</Box>

					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{selectedPokemon
								? selectedPokemon
								: "Name"}
						</Typography>

						<div>
							<Typography
								variant="body2"
								color="text.secondary"
								width="400px">
								LIST OF ABILITIES
							</Typography>
							{pokemonDetail?.abilities.map(
								(item: Ability) => (
									<Typography
										variant="body2"
										color="text.secondary"
										key={
											item.ability.name
										}>
										{item.ability.name}
									</Typography>
								)
							)}
						</div>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<NavLink to="/">
						<Button
							size="small"
							color="primary"
							variant="outlined">
							Go Back
						</Button>
					</NavLink>
				</CardActions>
			</Card>
		</div>
	);
};
export default PokemonDetailComponent;
