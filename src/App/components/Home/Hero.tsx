import { Box } from "@mui/material";
import img from "../../../assets/hero(1).png";
import { Parallax } from "react-scroll-parallax";
import FAQAccordion from "./Accordian";
// import img from "../../../assets/hero.png";
const Hero = () => {
  return (
    <Box className="!my-[120px]  max-w-[1280px] !mx-auto ">
      <Parallax speed={-10}>
        <img
          src={img}
          alt=""
          className="w-full h-[50vh] object-full rounded-[10px]"
        />
      </Parallax>
      <FAQAccordion />
    </Box>
  );
};

export default Hero;
