import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import "./checkout.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CreditCard, Delete } from "@mui/icons-material";

export default function Checkout() {
  let isLoggedIn = true;
  let addresses = [
    {
      _id: "PpiYcnfpYRDWjCLLnQ57s",
      address:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam, quis quod",
    },
    {
      _id: "xu9ywlCl_iqGY0eVKQ36J",
      address:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam, quis quod",
    },
    {
      _id: "M-_taXhdyeHxfan6YmLaL",
      address:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam, quis quod",
    },
  ];
  return (
    <>
      <Header hasHiddenAuthButtons={isLoggedIn} showUserDetails={isLoggedIn} />
      <Grid container>
        <Grid item xs={12} md={9}>
          <Box className="shipping-container" minHeight="100vh">
            <Typography color="#3C3C3C" variant="h4" my="1rem">
              Shipping
            </Typography>
            <Typography color="#3C3C3C" my="1rem">
              Manage all the shipping addresses you want. This way you won't
              have to enter the shipping address manually with every order.
              Select the address you want to get your order delivered.
            </Typography>
            <Divider />
            <Box>
              {addresses ? (
                addresses.map((item) => (
                  <Box
                    key={item._id}
                    onClick={() => {}}
                    sx={{ border: 1, borderColor: "grey.500" }}
                    className={true ? `selected address-item` : `address-item`}
                  >
                    {item.address}
                    <Button variant="text" onClick={() => {}}>
                      <Delete /> &nbsp; DELETE
                    </Button>
                  </Box>
                ))
              ) : (
                <Typography my="1rem">
                  No addresses found for this account. Please add one to proceed
                </Typography>
              )}
            </Box>

            <Typography color="#3C3C3C" variant="h4" my="1rem">
              Payment
            </Typography>

            <Typography color="#3C3C3C" my="1rem">
              Payment Method
            </Typography>
            <Divider />

            <Box my="1rem">
              <Typography>Wallet</Typography>
              <Typography>
                Pay ₹0 of available ₹{localStorage.getItem("balance")}
              </Typography>
            </Box>

            <Button
              onClick={() => {}}
              startIcon={<CreditCard />}
              variant="contained"
            >
              PLACE ORDER
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} bgcolor="#E9F5E1"></Grid>
      </Grid>
      <Footer />
    </>
  );
}
