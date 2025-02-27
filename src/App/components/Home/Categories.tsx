import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Img } from "react-image";
import img3 from "../../../assets/art.png";
import img5 from "../../../assets/educational.png";
import img2 from "../../../assets/ofc.png";
import img4 from "../../../assets/technology.png";
import img1 from "../../../assets/writing.png";
const Categories = () => {
  return (
    <Box className="max-w-[1280px] !mx-auto">
      <Box
        sx={{
          px: {
            xs: "20px",
            sm: "20px",
            md: "20px",
          },
        }}
      >
        <Typography
          variant="h4"
          className="text-center !font-[600] !mt-[64px] "
        >
          Categories Section
        </Typography>
        <Typography variant="h6" className="text-center !mt-[24px] !mb-[72px]">
          Explore a world of creativity, innovation, and productivity! From
          premium office essentials and educational tools to cutting-edge
          technology and vibrant art supplies — everything you need to learn,
          create, and excel is right here at Pencil Palace
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            alignItems: "center",
          }}
          className="  !mv[-"
        >
          <Box className=" flex justify-center flex-col  items-center gap-[24px] cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              className=" overflow-hidden"
            >
              <Img
                src={img1}
                className="rounded-[50%] h-[200px] w-[200px]"
                alt="writing"
              />
            </motion.div>

            <Typography variant="h6" className="text-center">
              Writing
            </Typography>
          </Box>
          <Box className=" flex justify-center flex-col items-center gap-[24px] cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              className=" overflow-hidden"
            >
              <Img
                src={img2}
                className="rounded-[50%] h-[200px] w-[200px]"
                alt="office supplies"
              />
            </motion.div>
            <Typography variant="h6" className="text-center">
              Office Supplies
            </Typography>
          </Box>
          <Box className=" flex justify-center flex-col items-center gap-[24px] cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              className=" overflow-hidden"
            >
              <Img
                src={img3}
                className="rounded-[50%] h-[200px] w-[200px]"
                alt="art supplies"
              />
            </motion.div>
            <Typography variant="h6" className="text-center">
              Art Supplies
            </Typography>
          </Box>
          <Box className=" flex justify-center flex-col  items-center gap-[24px] cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              className=" overflow-hidden"
            >
              <Img
                src={img4}
                className="rounded-[50%] h-[200px] w-[200px]"
                alt="technology"
              />
            </motion.div>
            <Typography variant="h6" className="text-center">
              Technology
            </Typography>
          </Box>
          <Box className=" flex justify-center flex-col items-center gap-[24px] cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              className=" overflow-hidden"
            >
              <Img
                src={img5}
                className="rounded-[50%] h-[200px] w-[200px]"
                alt="educational"
              />
            </motion.div>
            <Typography variant="h6" className="text-center">
              Educational
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
