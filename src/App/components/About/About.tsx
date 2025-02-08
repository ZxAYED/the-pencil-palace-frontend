import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import img from "../../../assets/logo.webp";
import { Link } from "react-router-dom";
import img2 from "../../../assets/ofc.png";
import bg from "../../../assets/aboutUs2.webp";
import VerifiedIcon from "@mui/icons-material/Verified";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
      }}
    >
      <Box className="backdrop-blur-[20px]">
        <Box
          sx={{
            mx: {
              xs: "10px",
              md: "auto",
            },
          }}
          className="py-[24px] px-[16px]  rounded-[10px] max-w-[1280px] mx-auto "
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{ letterSpacing: "5px", color: "#424242" }}
            >
              About Us
            </Typography>
          </motion.div>

          <motion.div
            className="!mt-[16px]      "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h5"
              className="text-[#424242] text-[16px] sm:text-[20px] font-[400] mb:text-[24px]"
            >
              Welcome to Pencil Palace! Your one-stop shop for all things
              stationery. We provide high-quality stationery products that are
              perfect for students, professionals, and artists alike.
            </Typography>
            <Typography
              sx={{
                color: "#424242",
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                },
                fontWeight: "500",
              }}
              className="  !my-[24px]"
            >
              Our mission is to inspire creativity and productivity through the
              best tools. We strive to bring you unique and innovative products
              that meet your everyday needs.
            </Typography>
          </motion.div>
          <Box
            className="px-[24px] rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },

              gap: "40px",
              width: "100%",
              marginTop: "40px",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",

                  md: "60%",
                },
              }}
            >
              <motion.div
                className="!mt-[32px]  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#424242",
                  }}
                  className="  !mb-[16px] "
                >
                  Our Core Values
                </Typography>
                <Box container spacing={4} justifyContent="center">
                  <Box item xs={12} sm={4}>
                    <Box className="">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Typography variant="h6" sx={{ color: "#424242" }}>
                          Customer Satisfaction :
                        </Typography>

                        <Typography
                          sx={{
                            color: "#424242",
                            fontSize: {
                              xs: "16px",
                              sm: "18px",
                            },
                            fontWeight: "500",
                          }}
                          className="text-[#424242] text-[12px] sm:text-[14px] font-[400] !my-[16px]"
                        >
                          We put our customers first by providing excellent
                          service and the best quality products.
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                  <Box item xs={12} sm={4}>
                    <Box className="">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Typography variant="h6" sx={{ color: "#424242" }}>
                          Innovation :
                        </Typography>

                        <Typography
                          sx={{
                            color: "#424242",
                            fontSize: {
                              xs: "16px",
                              sm: "18px",
                            },
                            fontWeight: "500",
                          }}
                          className=" !my-[16px] "
                        >
                          We continuously innovate to offer products that are
                          unique, creative, and practical.
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                  <Box item xs={12} sm={4}>
                    <Box className="">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: "#424242" }}
                          className=" !my-[8px]"
                        >
                          Sustainability
                        </Typography>
                        <Typography
                          sx={{
                            color: "#424242",
                            fontSize: {
                              xs: "16px",
                              sm: "18px",
                            },
                            fontWeight: "500",
                          }}
                          className="!my-[16px] "
                        >
                          We are committed to using sustainable materials and
                          supporting eco-friendly initiatives.
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "40%",
                },

                display: "flex",
                flexDirection: {
                  sm: "column",
                  md: "row",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={img2}
                className="w-[80%] h-[80%] rounded-[10px]"
                alt="aboutUs"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: "center",

              height: {
                xs: "100%",
                lg: "20dvh",
              },
            }}
            className="gap-[0px] w-[100%] my-[80px]"
          >
            <Box
              variant="h4"
              sx={{
                color: "#424242",
                backgroundColor: "#9575CD",
                width: {
                  xs: "100%",
                  lg: "33%",
                },
                borderTopLeftRadius: {
                  xs: "0px",
                  md: "10px",
                },
                borderBottomLeftRadius: {
                  xs: "0px",
                  md: "10px",
                },
                height: "100%",
                display: "grid",
                placeItems: "center",
                p: {
                  xs: "10px",
                  md: "0px",
                },
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#EEE",
                  fontWeight: "900",
                  fontSize: "24px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#EEE",
                    fontWeight: "900",
                    fontSize: "24px",
                    gap: "8px",
                  }}
                >
                  We have Built the Trust <VerifiedIcon />
                </Typography>
              </Box>
            </Box>

            <Box
              variant="h4"
              sx={{
                p: {
                  xs: "10px",
                  md: "0px",
                },
                textAlign: "center",
                color: "#424242",
                backgroundColor: "#29B6F6",

                height: "100%",
                width: {
                  xs: "100%",
                  lg: "33%",
                },
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#EEE",
                  fontWeight: "900",
                  fontSize: "24px",
                  gap: "8px",
                }}
              >
                Over 100+ Products Sold <VerifiedIcon />
              </Typography>
            </Box>
            <Box
              variant="h4"
              sx={{
                color: "#424242",
                backgroundColor: "#B0BEC5",
                width: {
                  xs: "100%",
                  lg: "33%",
                },
                borderTopRightRadius: {
                  xs: "0px",
                  md: "10px",
                },
                borderBottomRightRadius: {
                  xs: "0px",
                  md: "10px",
                },
                p: {
                  xs: "10px",
                  md: "0px",
                },
                textAlign: "center",
                height: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#EEE",
                  fontWeight: "900",
                  fontSize: "24px",
                  gap: "8px",
                }}
              >
                Satisfied Customers <VerifiedIcon />
              </Typography>
            </Box>
          </Box>

          <Box className="flex  md:flex-row sm:flex-col justify-between items-center">
            <motion.div
              className="!mt-[32px] backdrop-blur-"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h4"
                className=" text-[#424242] font-[700] !mb-[16px] text-[20px] sm:text-[28px]"
              >
                Meet Our Team
              </Typography>
              <Box className="">
                <Box className="">
                  <Box
                    item
                    xs={12}
                    sm={4}
                    md={4}
                    className=" !mb-[24px] md:!mb-[0px]"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        sx={{
                          color: "#424242",
                          fontSize: {
                            xs: "16px",
                            sm: "18px",
                          },
                          fontWeight: "500",
                        }}
                        className=" !mt-[16px]"
                      >
                        Zayed Iqbal
                      </Typography>
                      <Typography
                        sx={{
                          color: "#424242",
                          fontSize: {
                            xs: "16px",
                            sm: "18px",
                          },
                          fontWeight: "500",
                        }}
                        className="!my-[8px]"
                      >
                        FullStack Developer
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </Box>
            </motion.div>
            <Box
              sx={{
                my: {
                  sm: "-24px",
                },
              }}
              className="flex justify-center items-center w-[20%] h-[20%]"
            >
              <img
                src={img}
                alt="Zayed Iqbal"
                className="  drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] w-[100%] h-[100%]"
              />
            </Box>
          </Box>
          <Box
            sx={{
              mb: {
                md: "48px",
              },
            }}
          >
            <motion.div
              className="  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link to="/all-products">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    my: {
                      xs: "20px",
                      md: "-30px",
                    },
                  }}
                  className="text-white "
                  style={{ backgroundColor: "#424242" }}
                >
                  Explore Our Shop
                </Button>
              </Link>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
