/** @format */

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
	Button,
	CardActionArea,
	CardActions,
} from "@mui/material";

type Props = {};

const ListItemCard = (props: Props) => {
	return (
		<div style={{ width: 400 }}>
			<Card
				sx={{ maxWidth: 345 }}
				style={{ margin: 8 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="/static/images/cards/contemplative-reptile.jpg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div">
							Name
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="small"
						color="primary">
						See More Button
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};
export default ListItemCard;
