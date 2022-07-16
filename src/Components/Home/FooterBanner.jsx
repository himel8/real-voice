import React from "react";
import Footer from "../../assets/images/FooterLogo.png";

const FooterBanner = () => {
  return (
    <section className="bg-[#575657] p-12 flex justify-center gap-6 lg:w-[65%] md:w-[80%] w-full mx-auto items-center xl:items-start flex-wrap md:flex-nowrap -mt-24">
      <div className=" flex items-center w-full md:w-1/2 justify-center md:justify-end">
        <img src={Footer} alt="" className="w-[28rem]" />
      </div>
      <div className="w-full md:w-1/2 md:text-left text-center border-l-0 md:border-l-4 md:border-white md:pl-6">
        <h6 className="text-xl text-white uppercase font-[200] pb-2">
          contact
        </h6>
        <p className="text-lg text-white font-[200] pb-2">
          Call us at 877-817-REAL (7325)
        </p>
        <p className="text-lg text-white font-[200] pb-2">
          Email: realinfo@realvoice.com
        </p>
        <p className="text-lg text-white font-[200] pb-2">www.realvoice.com</p>
      </div>
    </section>
  );
};

export default FooterBanner;
