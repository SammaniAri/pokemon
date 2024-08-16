/** @format */
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { Ability } from "../context/Domain";

const PokemonDetailComponent = () => {
  const { name } = useParams();
  const pokemonContext = useContext(PokemonContext);

  useEffect(() => {
    if (name && pokemonContext?.pokemonResult) {
      const selectedPokemon = pokemonContext.pokemonResult.results.find(
        (pokemon) => pokemon.name === name
      );
      if (selectedPokemon) {
        pokemonContext.loadDetail(selectedPokemon.url);
      }
    }
  }, [name, pokemonContext]);

  // Access the loaded pokemon detail
  const pokemonDetail = pokemonContext?.pokemonDetail;

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#f3feb8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          margin: 1,
          backgroundColor: "#fbffea",
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              height: 200,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              image={pokemonDetail?.sprites?.front_default}
              alt={name}
            />
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name ? name : "Name"}
            </Typography>

            <Box>
              <Typography variant="body2" color="text.secondary" width="400px">
                LIST OF ABILITIES
              </Typography>
              {pokemonDetail?.abilities.map((item: Ability) => (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  key={item.ability.name}
                >
                  {item.ability.name}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to="/">
            <Button size="small" color="primary" variant="outlined">
              Go Back
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
};
export default PokemonDetailComponent;
