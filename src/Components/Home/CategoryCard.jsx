import React from "react";
import { BsCalculator, BsHandbagFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

const CategoryCard = ({ data }) => {
  const { name, number, link, icon } = data;

  return (
    <a href={link}>
      <div className="flex justify-center items-center gap-4 bg-white w-[21rem] h-[18rem] rounded category-card transform transition-all duration-700 ease-in-out">
        <div className="flex flex-col items-center gap-7">
          {icon === "bag" && <BsHandbagFill className="text-5xl text-orange" />}

          {icon === "car" && <IoCarSport className="text-5xl text-orange" />}
          {icon === "worker" && (
            <FaUserSecret className="text-5xl text-orange" />
          )}
          {icon === "calculator" && (
            <BsCalculator className="text-5xl text-orange" />
          )}
          <h2 className="text-xl text-title capitalize font-semibold">
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
