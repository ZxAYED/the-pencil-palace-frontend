import { Box } from "@mui/material";
import img from "../../../assets/hero(1).png";
import { Parallax } from "react-scroll-parallax";
// import img from "../../../assets/hero.png";
const Hero = () => {
  return (
    <Box className="!my-[120px] h-[50vh]  ">
      <Parallax speed={-10}>
        <img src={img} alt="" className="w-full h-[50vh] object-full" />
      </Parallax>
    </Box>
  );
};

export default Hero;
