import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface CardProps {
  height: string; // Tailwind CSS height class
  width: string;  // Tailwind CSS width class
  title: string;
  content: string;
  image: string;
  imgH: number;  // Image height
  imgW: number;  // Image width
}

const Card: React.FC<CardProps> = ({
  height,
  width,
  title,
  content,
  image,
  imgH,
  imgW,
}) => {
  return (
    <CardContainer className={`inter-var ${width} ${height} text-black`}>
      <CardBody
        className={`bg-gray-50 relative group/card shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-black/[0.1] ${width} ${height} rounded-xl p-6 border flex flex-col justify-between`}
      >
        <CardItem translateZ="100" className="w-full mt-4 flex">
          <Image
            src={image}
            height={imgH}
            width={imgW}
            className="group-hover/card:shadow-xl object-contain"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col gap-4">
          <CardItem
            translateZ={40}
            as="h3"
            className="text-2xl font-semibold"
          >
            {title}
          </CardItem>
          <CardItem translateZ={20} as="p" className="text-xs">
            {content}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
