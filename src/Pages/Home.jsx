import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import Features from "../Components/Home/Features";
import NavBar from "../Components/Home/NavBar";
import SearchForm from "../Components/Home/SearchForm";
import Work from "../Components/Home/Work";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <SearchForm />
      <Work />
      <Categories />
      <Features />
    </div>
  );
};

export default Home;
