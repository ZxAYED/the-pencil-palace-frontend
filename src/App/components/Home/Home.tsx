import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  console.log("home component");
  return (
    <div>
      <div className="">
        <Banner />
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
