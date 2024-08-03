/** @format */
import "./PokemonDetail.css";
import PokemonCard from "../components/PokemonCard";
type Props = {};

const PokemonDetail = (
	props: Props
) => {
	return (
		<div className="DetailScreen">
			<PokemonCard />
		</div>
	);
};
export default PokemonDetail;
