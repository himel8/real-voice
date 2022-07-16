import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="py-8 relative w-[97%] mx-auto flex justify-center">
      <a
        href="#!"
        className="text-orange font-primary text-2xl capitalize font-medium absolute right-0 top-3"
      >
        jobs
      </a>
      <div className="flex items-center lg:items-end flex-col">
        <img src={Logo} alt="logo" className="w-[80%] lg:w-full" />

        <p className="uppercase text-2xl sm:text-3xl text-orange mr-6">
          career center
        </p>
      </div>
    </header>
  );
};

export default Header;
