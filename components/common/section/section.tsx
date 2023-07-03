import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { Htag } from "@/components/common/Htag";

interface SectionProps {
  title: string;
  description: string;
  image?: StaticImageData;
  icon?: StaticImageData;
  styles?: {
    container?: string;
    image?: string;
    icon?: string;
  };
}

const _Section: React.FC<SectionProps> = ({
  title,
  description,
  image,
  styles,
  icon,
}) => {
  return (
    <div className={`max-w-[410px] mb-[80px] sm:mb-[0px] ${styles?.container}`}>
      {image && (
        <Image src={image} alt={title} className={`mb-[40px] ${styles?.image}`} />
      )}
      <div>
        <Htag tag="h3" styles="mb-[8px]">{title}</Htag>
        <p className="opacity-70">{description}</p>
        {icon && (
        <Image src={icon} alt={title} className={`mt-[32px] ${styles?.icon}`} />
      )}
      </div>
      
    </div>
  );
};

export const Section = React.memo(_Section);
