/** @format */

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
import "../assets/data.json";

type Pokemon = {
	name: string;
	url: string;
};

const ListItemCard = (
	props: Pokemon
) => {
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
					<NavLink to="pokemondetail">
						<Button
							size="small"
							color="primary">
							See More Button
						</Button>
					</NavLink>
				</CardActions>
			</Card>
		</div>
	);
};
export default ListItemCard;
