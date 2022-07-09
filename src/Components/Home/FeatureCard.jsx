import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
const FeatureCard = ({ data }) => {
  const { location, title, desc, tag, img } = data;
  return (
    <div className="w-[22rem] h-full">
      <div className="bg-featureBg object-cover bg-no-repeat text-center bg-center bg-cover">
        <img src={img} alt={title} className="inline w-full" />
      </div>
      <div className="flex flex-col gap-6 py-12 px-8 border border-[#d5d9da] rounded-br-sm rounded-bl-sm">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex justify-start items-center text-blue-700 gap-2 text-lg capitalize">
              <MdLocationOn />
              <span>{location}</span>
            </div>
            <h3 className="text-[1.7rem] text-[#414141] font-medium capitalize">
              {title}
            </h3>
          </div>
          <AiOutlineHeart className="w-[2.8rem] h-[2.8rem] bg-[#c4c4c4] text-white rounded-full p-[6px] hover:bg-orange transform transition-colors duration-500 ease-in-out" />
        </div>
        <p className="text-[1.1rem] text-normal">{desc}</p>
        <p className="text-[1.2rem] text-normal capitalize mt-6">{tag}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
