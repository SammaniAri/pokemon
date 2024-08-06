/** @format */

import Pagination from "@mui/material/Pagination";
import { PokemonContext } from "../context/PokemonContext";
import {
	useContext,
	useState,
	useEffect,
} from "react";
type Props = {};

const PokePagination = (
	props: Props
) => {
	const pokemonContext = useContext(
		PokemonContext
	);
	const [
		numberOfPages,
		setNumberOfPages,
	] = useState<number | undefined>(0);
	useEffect(() => {
		const numberOfPages =
			pokemonContext?.pageCount;
		setNumberOfPages(numberOfPages);
	}, [pokemonContext?.pageCount]);

	const handleChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		pokemonContext?.loadPaginationData(
			value
		);
	};
	return (
		<div style={{ margin: 8 }}>
			<Pagination
				count={numberOfPages}
				variant="outlined"
				shape="rounded"
				onChange={handleChange}
			/>
		</div>
	);
};
export default PokePagination;
