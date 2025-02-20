import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "sonner";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#5C7787",
        color: "#FFF8E1",
        py: 6,
        mt: 10,
      }}
    >
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={4}
          sx={{ mb: 5 }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 25%" },
              minWidth: 250,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.5rem", sm: "1.75rem" },
              }}
            >
              Pencil Palace
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              Your go-to destination for premium stationery. Explore our
              collection and make your writing experience extraordinary.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 20%" },
              minWidth: 200,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Quick Links
            </Typography>
            <Link
              href="#"
              sx={{
                display: "block",
                color: "#FFF8E1",
                mb: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              About Us
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                color: "#FFF8E1",
                mb: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                color: "#FFF8E1",
                mb: 1,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Shop
            </Link>
            <Link
              href="#"
              sx={{
                display: "block",
                color: "#FFF8E1",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              FAQs
            </Link>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 20%" },
              minWidth: 200,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Customer Support
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              📍 Dhaka, Bangladesh
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              📧 support@pencilpalace.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              📞 +8801XXXXXXXXX
            </Typography>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 50%", md: "1 1 25%" },
              minWidth: 250,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Subscribe to Our Newsletter
            </Typography>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              fullWidth
              required
              sx={{
                bgcolor: "#FFF8E1",
                borderRadius: 1,
                "& input": {
                  color: "#424242",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              required
              onClick={() => {
                toast.success("Subscribed successfully");
              }}
              sx={{
                mt: 2,
                bgcolor: "#FF7043",
                "&:hover": { bgcolor: "#F4511E" },
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "#FFF8E1", my: 3 }} />

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <IconButton sx={{ color: "#FFF8E1" }} href="https://facebook.com">
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "#FFF8E1" }} href="https://twitter.com">
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "#FFF8E1" }} href="https://instagram.com">
              <Instagram />
            </IconButton>
            <IconButton sx={{ color: "#FFF8E1" }} href="https://youtube.com">
              <YouTube />
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 100%", sm: "1 1 auto" },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              &copy; {new Date().getFullYear()} Pencil Palace. All rights
              reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              <Link href="#" sx={{ color: "#FFF8E1" }}>
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" sx={{ color: "#FFF8E1" }}>
                Terms & Conditions
              </Link>
            </Typography>
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            Developed by{" "}
            <Link href="#" sx={{ color: "#29B6F6" }}>
              ZxAYED
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
