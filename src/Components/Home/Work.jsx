import Title from "./Title";
import WorkCard from "./WorkCard";

const data = [
  {
    id: 1,
    title: "Search your job",
    desc: "Choose career oppurtunity that is perfect for your talent's",
    icon: "search",
  },
  {
    id: 2,
    title: "video interview",
    desc: "Complete your job interview 100% online right from this webpage. Our one-way vedio interview procees takes about 15 minutes to complete",
    icon: "apply",
  },
  {
    id: 3,
    title: "offer letter",
    desc: "Our team will quickly review your recorded interview questions. Once selected you will receive your digital offer letter via email.",
    icon: "create",
  },
  {
    id: 4,
    title: "start work",
    desc: "After accepting your offer you will instantly have access to our onboarding platfrom to complete your digital new hire docs and begin training from anywhere in the world!",
    icon: "support",
  },
];
const Work = () => {
  return (
    <section className="py-20">
      <Title title={"How It Works?"} subTitle={""} showBullet={false} />
      <div className="mt-6 flex justify-center items-start flex-wrap gap-8">
        {data.map((data, index) => (
          <WorkCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Work;
