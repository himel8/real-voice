import React from "react";
import Img1 from "../../assets/images/feature1.png";
import Img2 from "../../assets/images/feature2.png";
import Img3 from "../../assets/images/feature3.png";
import Img4 from "../../assets/images/feature4.png";
import FeatureCard from "./FeatureCard";
import Title from "./Title";

const Features = () => {
  const data = [
    {
      location: "belford",
      title: "need charted",
      desc: "Making it look like readable English. Many desktop publishing packages",
      tag: "freelance",
      img: Img1,
    },
    {
      location: "pangai",
      title: "accountant",
      desc: "Making it look like readable English. Many desktop publishing packages",
      tag: "temporary",
      img: Img2,
    },
    {
      location: "holloway",
      title: "Marketing",
      desc: "Making it look like readable English. Many desktop publishing packages",
      tag: "part time",
      img: Img3,
    },
    {
      location: "dicle",
      title: "Receptionist",
      desc: "Making it look like readable English. Many desktop publishing packages",
      tag: "freelance",
      img: Img4,
    },
  ];
  return (
    <section className="w-[97%] lg:w-[90%] mx-auto py-20">
      <Title
        title="Featured Jobs"
        subTitle="The right resources to help you achieve your career goals or find"
      />

      <div className="flex justify-center items-center flex-wrap gap-8 ">
        {data.map((data, index) => (
          <FeatureCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Features;
