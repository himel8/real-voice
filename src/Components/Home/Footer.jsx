import React from "react";
import { BsEnvelopeFill, BsGlobe, BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center gap-4 bg-[#e6eaec]">
      <div className="flex justify-center items-center gap-10">
        <a href="https://www.realvoice.com" target="_blank" rel="noreferrer">
          <BsGlobe className="text-2xl text-orange" />
        </a>
        <a href="tel:901-609-300">
          <BsTelephoneFill className="text-2xl text-orange" />
        </a>
        <a href="mailto:hr@realvoice.com">
          <BsEnvelopeFill className="text-2xl text-orange" />
        </a>
      </div>
      <p className="text-sm px-4 text-center">
        Real voice © 2022, All Right Reserved - by{" "}
        <span className=" font-medium text-orange">Real voice</span>
      </p>
    </footer>
  );
};

export default Footer;
