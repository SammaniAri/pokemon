/** @format */
import { useContext } from "react";
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
type Props = {};

const PokemonDetail = (
	props: Props
) => {
	const pokemonContext = useContext(
		PokemonContext
	);
	console.log(
		pokemonContext?.selectedPokemon
	);
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
							Name
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary">
							<strong>
								LIST OF ABILITIES
							</strong>
							are a widespread group of
							squamate reptiles, with
							over 6,000 species,
							ranging across all
							continents except
							Antarctica
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
