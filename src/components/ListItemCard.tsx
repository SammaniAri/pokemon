/** @format */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
	Button,
	CardActionArea,
	CardActions,
} from "@mui/material";
import "../assets/data.json";
import { PokemonContext } from "../context/PokemonContext";

type Pokemon = {
	name: string;
	url: string;
};

const ListItemCard = (
	props: Pokemon
) => {
	const navigate = useNavigate();
	const pokemonContext = useContext(
		PokemonContext
	);
	const navigateToDetail = (
		selectedName: string,
		selectedUrl: string
	) => {
		pokemonContext?.setSelectedPokemon({
			name: selectedName,
			url: selectedUrl,
		});
		navigate("/pokemondetail");
	};
	return (
		<div style={{ width: 400 }}>
			<Card
				sx={{ maxWidth: 345 }}
				style={{ margin: 8 }}>
				<CardActionArea>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							{props.name}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="small"
						color="primary"
						onClick={() =>
							navigateToDetail(
								props.name,
								props.url
							)
						}>
						See More Button
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};
export default ListItemCard;
