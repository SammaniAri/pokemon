/** @format */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { PokemonContext } from "../context/PokemonContext";

type Pokemon = {
  name: string;
  url: string;
};

const ListItemCard = (props: Pokemon) => {
  const navigate = useNavigate();
  const pokemonContext = useContext(PokemonContext);
  const navigateToDetail = (selectedName: string, selectedUrl: string) => {
    navigate(`/pokemondetail/${selectedName}`);
  };
  return (
    <Box style={{ width: 400 }}>
      <Card
        sx={{
          maxWidth: 345,
          margin: 1,
          backgroundColor: "#fbffea",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={() => navigateToDetail(props.name, props.url)}
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default ListItemCard;
