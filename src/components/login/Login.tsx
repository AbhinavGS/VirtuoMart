import { Box, Button, Stack, TextField } from "@mui/material";

import "./Login.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Header hasHiddenAuthButtons={true} />
      <Box className="content">
        <Stack spacing={2} className="form">
          <h2 className="title">Login</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            value=""
            onChange={() => {}}
            placeholder="Enter Username"
            fullWidth
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            value=""
            onChange={() => {}}
            placeholder="Enter Password"
            fullWidth
          />
          <Button onClick={() => {}} className="button" variant="contained">
            LOGIN TO QKART
          </Button>

          <p className="secondary-action">
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Register now
            </Link>
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
