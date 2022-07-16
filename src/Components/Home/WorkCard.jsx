import JobApplySvg from "../../assets/svg/jobApply";
import ResumeSvg from "../../assets/svg/resumeSvg";
import SearchSvg from "../../assets/svg/searchSvg";
import SupportSvg from "../../assets/svg/supportSvg";

const WorkCard = ({ data }) => {
  const { id, title, desc, icon } = data;

  return (
    <div className="flex flex-col items-center gap-2 work-icon-box ">
      <div className="w-[13.5rem] h-[13.5rem] bg-white flex justify-center items-center rounded-full shadow-work">
        <div className="w-[12rem] h-[12rem] bg-white flex justify-center items-center rounded-full border-4 border-orange work-icon transform transition-colors duration-200">
          {icon === "create" && <ResumeSvg width={100} />}
          {icon === "support" && <SupportSvg width={100} />}
          {icon === "search" && <SearchSvg width={100} />}
          {icon === "apply" && <JobApplySvg width={100} />}
        </div>
      </div>
      <h3 className="text-2xl font-medium text-title mt-10 uppercase">
        {`${id}. ${title}`}
      </h3>
      <p className="text-lg text-normal w-[22rem] text-center">{desc}</p>
    </div>
  );
};

export default WorkCard;
