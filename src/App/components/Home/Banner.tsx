import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../../assets/pencil palace banner.webp";
import img2 from "../../../assets/Cinematic Flat Lay of iPhone and Artistic Supplies.png";
import img3 from "../../../assets/Serene Flat Lay of Artistic Supplies with iPhone Display.png";
import img4 from "../../../assets/IPhone Surrounded By Artistic Supplies In A Creative Setup.png";
import { Navigation, Pagination, Autoplay } from "swiper";

const Banner = () => {
  return (
    <Swiper
      style={{ height: "calc(70vh)" }}
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
        <img src={img1} alt="banner 1" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="banner 2" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="banner 3" className="object-fill w-full h-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="banner 4" className="object-fill w-full h-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
