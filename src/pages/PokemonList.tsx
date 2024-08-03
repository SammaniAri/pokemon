/** @format */

import PokePagination from "../components/PokePagination";
import ListItemCard from "../components/ListItemCard";

import "./PokemonList.css";
import Typography from "@mui/material/Typography";

/** @format */
type Props = {};

const PokemonList = (props: Props) => {
	return (
		<div className="Screen">
			<Typography>
				Pokemon Explorer
			</Typography>
			<ListItemCard />
			<PokePagination />
		</div>
	);
};
export default PokemonList;
