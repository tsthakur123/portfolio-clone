import React from "react";
import Card from "./Card";

const ProjectCard = () => {
  const projectCardData = [
    {
      id: 1,
      title: "Web Design",
      content: "AirCalling Landing Page Design",
      image: "/images/project-card-1.svg",
    },
    {
      id: 2,
      title: "Web Design",
      content: "Business Landing Page Design",
      image: "/images/project-card-2.svg",
    },
    {
      id: 3,
      title: "Web Design",
      content: "Ecom Web Page Design",
      image: "/images/project-card-3.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
      {projectCardData.map((data) => (
        <div key={data.id} className="flex flex-col">
          <div className="cardReveal2">
            <Card
              title=''
              content=''
              image={data.image}
              height="h-96"
              width="w-80"
              imgH={384}
              imgW={320}
            />
          </div>
          <h6 className="text-[#FD6F00] mt-4 text-lg reveal5 opacity-0 scale-0">
            {data.title}
          </h6>
          <h3 className="reveal5 opacity-0 scale-0 text-lg font-semibold w-72">
            {data.content}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
