import React from "react";
import Card from "./Card";

const ServiceCards = () => {
  const serviceCardData = [
    {
      id: 1,
      title: "UI/UX",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus quo? Voluptatem dignissimos adipisci minima nisi porro, expedita odio rerum?",
      image: "/icons/service-ui.svg",
    },
    {
      id: 2,
      title: "Web Design",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus quo? Voluptatem dignissimos adipisci minima nisi porro, expedita odio rerum?",
      image: "/icons/service-web.svg",
    },
    {
      id: 3,
      title: "App Design",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus quo? Voluptatem dignissimos adipisci minima nisi porro, expedita odio rerum?",
      image: "/icons/service-app.svg",
    },
    {
      id: 4,
      title: "Graphic Design",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus quo? Voluptatem dignissimos adipisci minima nisi porro, expedita odio rerum?",
      image: "/icons/service-graphic.svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {serviceCardData.map((data) => (
        <div key={data.id} className="cardReveal flex justify-center">
          <Card
            title={data.title}
            content={data.content}
            image={data.image}
            height="h-72"
            width="w-72"
            imgH={10}
            imgW={50}
          />
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
