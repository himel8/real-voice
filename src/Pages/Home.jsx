import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import Footer from "../Components/Home/Footer";
import FooterBanner from "../Components/Home/FooterBanner";
import Header from "../Components/Home/Header";
import Work from "../Components/Home/Work";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Work />
      <Categories />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Home;
