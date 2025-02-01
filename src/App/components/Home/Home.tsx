import Banner from "./Banner";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
const Home = () => {
  return (
    <div>
      <div className="">
        <Banner />
        <FeaturedProducts />
        <Categories />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
