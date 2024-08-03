/** @format */

import Pagination from "../components/Pagination";
import PokemonCard from "../components/PokemonCard";

/** @format */
type Props = {};

const PokemonList = (props: Props) => {
	return (
		<div>
			<PokemonCard />
			<Pagination />
		</div>
	);
};
export default PokemonList;
