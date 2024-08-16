/** @format */

import Pagination from "@mui/material/Pagination";
import { PokemonContext } from "../context/PokemonContext";
import { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";

const PokePagination = () => {
  const pokemonContext = useContext(PokemonContext);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(0);
  useEffect(() => {
    const numberOfPages = pokemonContext?.pageCount;
    setNumberOfPages(numberOfPages);
  }, [pokemonContext?.pageCount]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    pokemonContext?.loadPaginationData(value);
  };
  return (
    <Box sx={{ margin: 1 }}>
      <Pagination
        count={numberOfPages}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
};
export default PokePagination;
