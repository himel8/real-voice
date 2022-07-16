const Title = ({ title, subTitle, showBullet }) => {
  return (
    <div className="text-center py-8 px-6">
      <h2 className="capitalize text-[2rem] sm:text-5xl font-medium text-title mb-2">
        {title}
      </h2>
      <p className="text-lg sm:text-xl text-normal mb-4">{subTitle}</p>
      {showBullet && (
        <div className="flex justify-center items-center gap-[6px]">
          <div className="w-[14px] h-[14px] rounded-full bg-orange"></div>
          <div className="w-[14px] h-[14px] rounded-full bg-normal"></div>
        </div>
      )}
    </div>
  );
};

export default Title;
