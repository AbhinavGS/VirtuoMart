import { Search } from "@mui/icons-material";
import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import Header from "../header/Header";

import "./Home.scss";
import ProductCard from "../product-card/ProductCard";
import Footer from "../footer/Footer";

export default function Home() {
  let isLoggedIn = false;
  const productsList = [
    {
      name: "Test Product 1",
      category: "Fashion",
      cost: 50,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "BW0jAAeDJmlZCF8i",
    },
    {
      name: "Test Product 2",
      category: "Sports",
      cost: 100,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "KCRwjF7lN97HnEaY",
    },
    {
      name: "Test Product 3",
      category: "Fashion",
      cost: 150,
      rating: 4,
      image: "https://placehold.co/600x400",
      _id: "PmInA797xJhMIPti",
    },
    {
      name: "Test Product 4",
      category: "Electronics",
      cost: 60,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "TwMM4OAhmK0VQ93S",
    },
    {
      name: "Test Product 5",
      category: "Home & Kitchen",
      cost: 80,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "a4sLtEcMpzabRyfx",
    },
    {
      name: "Test Product 6",
      category: "Home & Kitchen",
      cost: 80,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "upLK9JbQ4rMhTwt4",
    },
    {
      name: "Test Product 7",
      category: "Home & Kitchen",
      cost: 650,
      rating: 3,
      image: "https://placehold.co/600x400",
      _id: "v4sLtEcMpzabRyf",
    },
    {
      name: "Test Product 8",
      category: "Fashion",
      cost: 1000,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "v4sLtEcMpzabRyfx",
    },
    {
      name: "Test Product 9",
      category: "Electronics",
      cost: 900,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "w4sLtEcMpzabRyfx",
    },
    {
      name: "Test Product 10",
      category: "Electronics",
      cost: 1200,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "x4sLtEcMpzabRyfx",
    },
    {
      name: "Test Product 11",
      category: "Books",
      cost: 15,
      rating: 5,
      image: "https://placehold.co/600x400",
      _id: "y4sLtEcMpzabRyfx",
    },
    {
      name: "Test Product 12",
      category: "Fashion",
      cost: 75,
      rating: 4,
      image: "https://placehold.co/600x400",
      _id: "z4sLtEcMpzabRyfx",
    },
  ];

  return (
    <div>
      <Header hasHiddenAuthButtons={isLoggedIn} showUserDetails={isLoggedIn}>
        <TextField
          style={{ marginLeft: "25%", marginRight: "25%" }}
          fullWidth
          onChange={() => console.log("implement search")}
          className="search-desktop"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Search for items/categories"
          name="search"
        />
      </Header>

      <TextField
        className="search-mobile"
        size="small"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for items/categories"
        name="search"
      />
      <Grid container sx={{ flexDirection: { sm: "column", md: "row" } }}>
        <Grid item md={isLoggedIn ? 9 : 12}>
          <Grid container className="hero-image-grid-container">
            <Grid item className="product-grid">
              <Box className="hero"></Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {productsList.map((product) => {
              const { name, category, cost, rating, image, _id } = product;
              return (
                <Grid item xs={6} md={3} key={_id}>
                  <ProductCard
                    token={localStorage.getItem("token")}
                    items={() => {}}
                    products={productsList}
                    productId={_id}
                    qty={null}
                    name={name}
                    category={category}
                    cost={cost}
                    rating={rating}
                    image={image}
                    onAddToCart={() => {}}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
