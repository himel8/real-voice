import Boy from "../../assets/images/boy.png";
const Banner = () => {
  return (
    <section className="py-32 md:py-52 2xl:h-[80vh] px-6 bg-[#98ddee] ">
      <div className="flex justify-center items-center gap-16 flex-wrap-reverse md:w-[90%] mx-auto">
        <div className="flex flex-col items-center custom:items-start gap-8  custom:w-[47%] mx-auto w-full custom:text-left text-center">
          <h2 className="text-[2.5rem] leading-[2.9rem] font-semibold text-orange">
            A no-bullshit job alert.
            <br /> Delivered straight to your inbox
          </h2>
          <p className="text-lg w-full">
            Perfect job can help you find the best jobs, employerd and career
            advice. Connecting outstanding people with the world's most
            innovative companies
          </p>
          <button className="bg-button py-4 px-8 rounded-full text-white text-lg font-medium hover:bg-orange transform transition-colors ease-in-out duration-300">
            Upload Resume
          </button>
        </div>
        <div className="flex justify-center items-center custom:w-[47%] mx-auto w-full">
          <img src={Boy} alt="boy" className="w-full md:w-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
