import React from "react";
import { BentoGrid, BentoGridItem } from "../utils/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<img src={item.imgSrc} alt={item.title} className="w-full h-auto rounded-xl" />}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    title: "Crave",
    description: "This is my first project about video game 'Crave'.",
    imgSrc: "/assets/pictures/Crave.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Prequel",
    description: "Website for AI photo editor.",
    imgSrc: "/assets/pictures/prequel.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CarePulse",
    description: "Future app for easier appointments.",
    imgSrc: "/assets/pictures/CarePulse.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CarePulse",
    description: "Future app for easier appointments.",
    imgSrc: "/assets/pictures/CarePulse2.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio",
    description: "Portfolio website for Web Designer.",
    imgSrc: "/assets/pictures/Portfolio.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },

];

export default BentoGridDemo;
