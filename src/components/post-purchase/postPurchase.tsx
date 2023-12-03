import { Box, Button } from "@mui/material";
import Header from "../header/Header";
import "./postPurchase.scss";
import Footer from "../footer/Footer";

export default function PostPurchase() {
  return (
    <>
      <Header hasHiddenAuthButtons={true} showUserDetails={true} />
      <Box className="greeting-container">
        <h2>Yay! It's ordered 😃</h2>
        <p>You will receive an invoice for your order shortly.</p>
        <p>Your order will arrive in 7 business days.</p>
        <p id="balance-overline">Wallet Balance</p>
        <p id="balance">₹{localStorage.getItem("balance")} Available</p>
        <Button
          variant="contained"
          size="large"
          id="continue-btn"
          onClick={() => {}}
        >
          Continue Shopping
        </Button>
      </Box>
      <Footer />
    </>
  );
}
