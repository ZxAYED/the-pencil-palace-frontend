import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const SocialSection = () => {
  const data = [
    {
      icon: <Facebook />,
      color: "#1877F2",
      label: "Facebook",
      followers: "25K",
    },
    {
      icon: <Twitter />,
      color: "#1DA1F2",
      label: "Twitter",
      followers: "18K",
    },
    {
      icon: <LinkedIn />,
      color: "#0A66C2",
      label: "LinkedIn",
      followers: "12K",
    },
    {
      icon: <Instagram />,
      color: "#E4405F",
      label: "Instagram",
      followers: "30K",
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#F3F4F6", borderRadius: "8px", px: 3, mt: 8 }}>
      <Typography variant="h4" fontWeight="bold" color="#424242" my={4}>
        Pencil Palace Followers
      </Typography>
      <Box
        textAlign="center"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: 4,
        }}
        container
        spacing={{ xs: 2, md: 4 }}
      >
        {data.map((social, index) => (
          <Box item key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: {
                  xs: "350px",
                  sm: "650px",
                  md: "750px",
                  lg: "250px",
                  xl: "360px",
                },

                height: 200,
                backgroundColor: social.color,
                color: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <Box sx={{ scale: "2" }}>{social.icon}</Box>
              <Typography mt={2} variant="h6" fontWeight="bold">
                {social.label}
              </Typography>
              <Typography variant="body1">
                {social.followers} Followers
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SocialSection;
