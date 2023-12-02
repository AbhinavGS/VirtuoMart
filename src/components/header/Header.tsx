import { ArrowBackSharp, Search } from "@mui/icons-material";
import {
  Avatar,
  Button,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";

import "./Header.scss";

const Header = ({ hasHiddenAuthButtons, showUserDetails }: any) => {
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="virtuo-mart_logo.png" alt="VirtuoMart-icon" width={80}></img>
      </Box>
      <TextField
        style={{ marginLeft: "25%", marginRight: "25%" }}
        fullWidth
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
      {hasHiddenAuthButtons ? (
        showUserDetails ? (
          <Stack
            direction="row"
            spacing={2}
            className="header-username-container"
          >
            <Avatar
              alt={localStorage.getItem("username") || ""}
              src="avatar.png"
            />
            <div className="logged-user">
              {localStorage.getItem("username")}
            </div>
            <Button onClick={() => console.log("Logged out")}>LOGOUT</Button>
          </Stack>
        ) : (
          <Button
            onClick={() => console.log("Go to home page")}
            className="explore-button"
            startIcon={<ArrowBackSharp />}
            variant="text"
          >
            Back to explore
          </Button>
        )
      ) : (
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => console.log("Go to login")}
            className="login-button"
          >
            Login
          </Button>
          <Button
            onClick={() => console.log("Go to register")}
            className="register-button"
          >
            Register
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
