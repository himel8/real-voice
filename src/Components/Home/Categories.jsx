import React from "react";
import CategoryCard from "./CategoryCard";
import Title from "./Title";

const data = [
  { name: "voice agent", number: 4, link: "#!", icon: "bag" },
  { name: "quality assurance", number: 3, link: "#!", icon: "car" },
  { name: "team lead", number: 3, link: "#!", icon: "worker" },
  { name: "managerial", number: 2, link: "#!", icon: "calculator" },
];

const Categories = () => {
  return (
    <section className="">
      <h2 className="font font-secondary text-[35px] sm:text-[45px] md:text-[70px] uppercase text-black font-semibold text-center">
        a new carrer begins here
      </h2>
      <div className="bg-section -mt-12 pb-32">
        <div className="w-[97%] lg:w-[90%] mx-auto pt-16  pb-20">
          <Title
            title="Job Categories"
            subTitle="Start your search by using any of the following job categories"
          />
          <div className="flex justify-center items-center gap-12 mt-6 flex-wrap">
            {data.map((data, index) => (
              <CategoryCard key={index} data={data} />
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="bg-button py-6 px-10 rounded-full text-white text-2xl font-medium hover:bg-orange transform transition-colors ease-in-out duration-300 capitalize border-4 border-white">
              Browse all section
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
