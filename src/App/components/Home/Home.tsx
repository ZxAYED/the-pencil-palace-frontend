import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import HowToUse from "./HowToUse";
const Home = () => {
  return (
    <div>
      <div className="">
        <Banner />
        <FeaturedProducts />
        <Categories />
        <HowToUse />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
