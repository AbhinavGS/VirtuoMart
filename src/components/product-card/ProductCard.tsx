import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

import "./ProductCard.scss";

const ProductCard = (props: any) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${props.cost}
        </Typography>
        <Rating name="read-only" value={props.rating} readOnly />
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          onClick={() =>
            props.onAddToCart(
              props.token,
              props.items,
              props.products,
              props.productId,
              props.qty
            )
          }
        >
          <AddShoppingCartOutlined />
          <Typography style={{ color: "white" }}>
            &nbsp; ADD TO CART{" "}
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
