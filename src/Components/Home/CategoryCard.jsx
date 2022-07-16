import React from "react";
import Img from "../../assets/images/boy.png";

const CategoryCard = ({ data }) => {
  const { name, number, link, icon } = data;

  return (
    <a href={link}>
      <div className="flex justify-center items-center gap-4 bg-white w-[21rem] h-[18rem] rounded category-card transform transition-all duration-700 ease-in-out">
        <div className="flex flex-col items-center gap-7">
          <div className="flex justify-center">
            <img src={Img} alt="" className="w-[50%]" />
          </div>

          <h2 className="text-[1.5rem] font-secondary text-title uppercase font-semibold -mt-24 text-center">
            {name}
          </h2>
          <p className="text-lg inline py-1 px-6 bg-orange text-white rounded-lg">
            {number}
          </p>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
