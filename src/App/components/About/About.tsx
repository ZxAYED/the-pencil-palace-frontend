import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import img from "../../../assets/logo.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <Box className="py-[24px] px-[16px] bg-[#fff8e1] max-w-[1280px] mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          className=" text-[#424242] font-[900] text-[24px] sm:text-[36px]"
        >
          About Us
        </Typography>
      </motion.div>

      <motion.div
        className="mt-[24px] sm:mt-[48px] max-w-6xl mx-auto "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h6"
          className="text-[#424242] text-[16px] sm:text-[20px] font-[400] mb:text-[24px]"
        >
          Welcome to Pencil Palace! Your one-stop shop for all things
          stationery. We provide high-quality stationery products that are
          perfect for students, professionals, and artists alike.
        </Typography>
        <Typography
          variant="body1"
          className="text-[#424242] text-[14px] sm:text-[16px] font-[400] !my-[24px]"
        >
          Our mission is to inspire creativity and productivity through the best
          tools. We strive to bring you unique and innovative products that meet
          your everyday needs.
        </Typography>
      </motion.div>

      <motion.div
        className="!mt-[32px] sm:!mt-[64px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h5"
          className=" text-[#424242] font-[700] !mb-[16px] text-[20px] sm:text-[28px]"
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
                <Typography className="text-[#424242] text-[16px] sm:text-[20px] !font-[600]">
                  Customer Satisfaction :
                </Typography>

                <Typography className="text-[#424242] text-[12px] sm:text-[14px] font-[400] !my-[16px]">
                  We put our customers first by providing excellent service and
                  the best quality products.
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
                <Typography className="text-[#424242] text-[16px] sm:text-[20px] !font-[600]   !my-[8px]">
                  Innovation :
                </Typography>

                <Typography className="text-[#424242] text-[12px] sm:text-[14px] !font-[400] !my-[16px] ">
                  We continuously innovate to offer products that are unique,
                  creative, and practical.
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
                <Typography className="text-[#424242] text-[16px] sm:text-[20px] !font-[600] !my-[8px]">
                  Sustainability
                </Typography>
                <Typography className="text-[#424242] text-[12px] sm:text-[14px] !font-[400] !my-[16px] ">
                  We are committed to using sustainable materials and supporting
                  eco-friendly initiatives.
                </Typography>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </motion.div>
      <Box className="flex  md:flex-row sm:flex-col justify-between items-center">
        <motion.div
          className="!mt-[32px] sm:!mt-[64px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h5"
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
                  <Typography className="text-[#424242] text-[16px] sm:text-[18px] font-[600] !mt-[16px]">
                    Zayed Iqbal
                  </Typography>
                  <Typography className="text-[#424242] text-[12px] sm:text-[14px] font-[400] !my-[8px]">
                    FullStack Developer
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </motion.div>
        <img src={img} alt="Zayed Iqbal" className="w-[20%] h-[20%] " />
      </Box>
      <motion.div
        className="!mt-[32px] sm:!mt-[48px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link to="/all-products">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="text-white !mt-[-10px] !mb-[16px]"
            style={{ backgroundColor: "#424242" }}
          >
            Explore Our Shop
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
