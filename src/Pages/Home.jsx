import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import Footer from "../Components/Home/Footer";
import FooterBanner from "../Components/Home/FooterBanner";
import Header from "../Components/Home/Header";
import Social from "../Components/Home/Social";
import Work from "../Components/Home/Work";

const Home = () => {
  return (
    <div className="relative">
      {/* <NavBar /> */}
      <Social />
      <Header />
      <Banner />
      {/* <SearchForm /> */}
      <Work />
      <Categories />
      {/* <Features /> */}
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Home;
