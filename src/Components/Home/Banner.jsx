import SearchForm from "./SearchForm";

const Banner = () => {
  return (
    <section className="pt-10 pb-6 bg-[#7f7f7f]">
      <div className="w-[98%] sm:w-[90%] mx-auto">
        <h2 className="text-5xl sm:text-[55px] md:text-[65px] text-white font-primary uppercase font-[300] text-center leading-[65px]">
          one voice, your voice
        </h2>

        <div className="flex justify-center items-center mt-16 mb-6 gap-8 flex-wrap">
          <div className="text-center lg:text-left">
            <h3 className="text-[2.3rem] sm:text-[44px] md:text-[52px] leading-[52px] text-white font-primary uppercase font-[300] pb-3 tracking-wide ">
              Interview today
            </h3>
            <h6 className="text-2xl sm:text-[30px] md:text-[35px] leading-[35px] text-white font-primary uppercase font-[300] tracking-wide">
              start tomorrow !
            </h6>
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-white leading-8 font-primary">
              We've got a really great place to work! RealVoice offers vacation
              rentals and hotel reservation call center jobs and remote call
              center jobs. Headquartered in Memphis, Tennesseee, RealVoice is
              dedicated to providing its customers with not just a call center,
              but a customer engagement center. We have real people who interact
              with customers by all means of communication. We are looking for
              driven, personable, goal focused incoming calls sales
              professionals.
            </p>
          </div>
        </div>

        {/* input */}
        <SearchForm />

        <h2 className="font font-secondary text-[2.35rem] sm:text-[56px] uppercase text-[#e8813b] font-semibold text-center mt-10 leading-[2.35rem] sm:leading-[56px] py-4">
          interview instantly !
        </h2>
      </div>
    </section>
  );
};

export default Banner;
