import { Img } from "react-image";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../../assets/Cinematic Flat Lay of iPhone and Artistic Supplies.png";
import img4 from "../../../assets/IPhone Surrounded By Artistic Supplies In A Creative Setup.png";
import img1 from "../../../assets/pencil palace banner.webp";
import img3 from "../../../assets/Serene Flat Lay of Artistic Supplies with iPhone Display.png";
const Banner = () => {
  return (
    <Swiper
      style={{ height: "calc(80vh)" }}
      className="w-full "
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      <SwiperSlide>
        <Img src={img1} alt="banner 1" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src={img2} alt="banner 2" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src={img3} alt="banner 3" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src={img4} alt="banner 4" className="object-fill w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
