import { AddOutlined, RemoveOutlined, ShoppingCart } from "@mui/icons-material";
import "./Cart.scss";
import { Box, Button, IconButton, Stack } from "@mui/material";

const ItemQuantity = ({ value, handleAdd, handleDelete, isReadOnly }: any) => {
  if (isReadOnly) {
    return (
      <Stack direction="row" alignItems="center">
        <Box padding="0.5rem" data-testid="item-qty">
          Qty: {value}
        </Box>
      </Stack>
    );
  }

  return (
    <Stack direction="row" alignItems="center">
      <IconButton size="small" color="primary" onClick={handleDelete}>
        <RemoveOutlined />
      </IconButton>
      <Box padding="0.5rem" data-testid="item-qty">
        {value}
      </Box>
      <IconButton size="small" color="primary" onClick={handleAdd}>
        <AddOutlined />
      </IconButton>
    </Stack>
  );
};

export default function Cart() {
  let cartItems: any = [];
  return (
    <Box className="cart">
      {cartItems.map((item: any) => (
        <Box
          key={item._id}
          display="flex"
          alignItems="flex-start"
          padding="1rem"
        >
          <Box className="image-container">
            <img src={item.image} alt={item.name} width="100%" height="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="6rem"
            paddingX="1rem"
          >
            <div>{item.name}</div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ItemQuantity
                value={item.qty}
                handleAdd={() => {}}
                handleDelete={() => {}}
                isReadOnly={false}
              />
              <Box padding="0.5rem" fontWeight="700">
                ${item.cost}
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box
        padding="1rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box color="#3C3C3C" alignSelf="center">
          Order total
        </Box>
        <Box
          color="#3C3C3C"
          fontWeight="700"
          fontSize="1.5rem"
          alignSelf="center"
          data-testid="cart-total"
        >
          ₹{"0"}
        </Box>
      </Box>

      <Box display="flex" justifyContent="flex-end" className="cart-footer">
        <Button
          color="primary"
          variant="contained"
          startIcon={<ShoppingCart />}
          className="checkout-btn"
          onClick={() => {}}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
