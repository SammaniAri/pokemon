/** @format */
import Pagination from "@mui/material/Pagination";
type Props = {};

const PokePagination = (
	props: Props
) => {
	return (
		<div style={{ margin: 8 }}>
			<Pagination
				count={10}
				variant="outlined"
				shape="rounded"
			/>
		</div>
	);
};
export default PokePagination;
