/** @format */
import { useContext, useEffect, useState } from "react";
import PokePagination from "../components/PokePagination";
import ListItemCard from "../components/ListItemCard";
//import "./PokemonList.css";
import Typography from "@mui/material/Typography";
import { PokemonContext } from "../context/PokemonContext";
import { Pokemon } from "../context/Domain";
import { Box } from "@mui/material";

const PokemonList = () => {
  const pokemonContext = useContext(PokemonContext);

  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>();
  useEffect(() => {
    const list = pokemonContext?.pokemonResult?.results;
    setPokemonsList(list);
  }, [pokemonContext?.pokemonResult]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f3feb8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="pikachu"
        sx={{
          height: 200,
          width: 200,
        }}
      ></Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <Typography variant="h5">Pokemon Explorer</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemonsList?.map((item) => (
          <Box key={item.name} className="component-container">
            <ListItemCard name={item.name} url={item.url} />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "24px",
        }}
      >
        <PokePagination />
      </Box>
    </Box>
  );
};
export default PokemonList;
