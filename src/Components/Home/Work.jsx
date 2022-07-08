import Title from "./Title";
import WorkCard from "./WorkCard";

const data = [
  {
    id: 1,
    title: "Create an account",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor",
    icon: "create",
  },
  {
    id: 2,
    title: "Complete your profile",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor",
    icon: "support",
  },
  {
    id: 3,
    title: "Search your job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor",
    icon: "search",
  },
  {
    id: 4,
    title: "Apply for job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor",
    icon: "apply",
  },
];
const Work = () => {
  return (
    <section className="py-20">
      <Title
        title={"How It Works?"}
        subTitle={
          "The right resources to help you achieve your career goals or find"
        }
      />
      <div className="mt-6 flex justify-center items-center flex-wrap gap-8">
        {data.map((data, index) => (
          <WorkCard key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Work;
