import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#5C7787",
        py: 5,
        color: "#FFF8E1",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ mb: 3 }}
        >
          <Box sx={{ textAlign: "center", flex: "1 1 22%" }}>
            <Typography variant="body1">
              <Link href="#" underline="hover" sx={{ color: "#FFF8E1" }}>
                About us
              </Link>
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", flex: "1 1 22%" }}>
            <Typography variant="body1">
              <Link href="#" underline="hover" sx={{ color: "#FFF8E1" }}>
                Contact
              </Link>
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", flex: "1 1 22%" }}>
            <Typography variant="body1">
              <Link href="#" underline="hover" sx={{ color: "#FFF8E1" }}>
                Shop
              </Link>
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", flex: "1 1 22%" }}>
            <Typography variant="body1">
              <Link href="#" underline="hover" sx={{ color: "#FFF8E1" }}>
                Terms & Conditions
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ mt: 3, mb: 3 }}
        >
          <IconButton sx={{ color: "#29b6f6" }} href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton sx={{ color: "#29b6f6" }} href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: "#29b6f6" }} href="https://instagram.com">
            <Instagram />
          </IconButton>
        </Box>

        <Divider sx={{ backgroundColor: "#FFF8E1", my: 3 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#FFF8E1" }}>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            <Typography className="!font-[600]"> ZxAYED</Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
