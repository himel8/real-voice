import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <div className="absolute left-6 bg-orange py-2 px-2 top-1/2 z-10 translate-y-[-50%]">
      <a href="#!">
        <FaFacebookF className="text-3xl text-white my-9 mx-3" />
      </a>

      <a href="#!">
        <FaLinkedinIn className="text-3xl text-white my-9 mx-3" />
      </a>

      <div className="border-t-4 border-white mb-8"></div>
    </div>
  );
};

export default Social;
