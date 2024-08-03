/** @format */

import PokePagination from "../components/PokePagination";
import ListItemCard from "../components/ListItemCard";
import data from "../assets/data.json";
import "./PokemonList.css";
import Typography from "@mui/material/Typography";

/** @format */

const PokemonList = () => {
	return (
		<div className="Screen">
			<div className="Sitename">
				<Typography variant="h5">
					Pokemon Explorer
				</Typography>
			</div>

			<div className="Wrapper">
				{data.map((item) => (
					<div
						key={item.id}
						className="component-container">
						<ListItemCard
							title={item.title}
							content={item.content}
							createdAt={item.createdAt}
						/>
					</div>
				))}

				<PokePagination />
			</div>
		</div>
	);
};
export default PokemonList;
