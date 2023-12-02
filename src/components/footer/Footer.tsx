import { Box } from "@mui/system";

import "./Footer.scss";

const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <img src="virtuo-mart_logo.png" alt="VirtuoMart-icon" width={100}></img>
      </Box>
      <p className="footer-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod unde
        vitae labore.
      </p>
    </Box>
  );
};

export default Footer;
