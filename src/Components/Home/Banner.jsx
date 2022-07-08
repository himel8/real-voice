const Banner = () => {
  return (
    <section className=" py-52 lg:h-[80vh] px-6">
      <div className="flex flex-col items-start gap-8 md:w-[70%] mx-auto">
        <h2 className="text-[2.5rem] leading-[2.9rem] font-semibold text-orange">
          A no-bullshit job alert.
          <br /> Delivered straight to your inbox
        </h2>
        <p className="text-lg w-full md:w-[40rem]">
          Perfect job can help you find the best jobs, employerd and career
          advice. Connecting outstanding people with the world's most innovative
          companies
        </p>
        <button className="bg-button py-4 px-8 rounded-full text-white text-lg font-medium hover:bg-orange transform transition-colors ease-in-out duration-300">
          Upload Resume
        </button>
      </div>
    </section>
  );
};

export default Banner;
