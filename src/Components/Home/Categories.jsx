import React from "react";
import CategoryCard from "./CategoryCard";
import Title from "./Title";

const data = [
  { name: "sales", number: 4, link: "#!", icon: "bag" },
  { name: "automotive", number: 3, link: "#!", icon: "car" },
  { name: "construction", number: 3, link: "#!", icon: "worker" },
  { name: "accounting", number: 2, link: "#!", icon: "calculator" },
];

const Categories = () => {
  return (
    <section className="bg-section py-20">
      <div className="w-[97%] lg:w-[90%] mx-auto">
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
    </section>
  );
};

export default Categories;
