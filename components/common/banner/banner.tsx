import banner from "@/helpers/images/banner.png";
import { useMemo } from "react";

interface BannerProps {
  text: string;
  repeatCount?: number;
  styles?: {
    containerStyles?: string;
    wrapperTextStyles?: string;
    textStyles?: string;
  };
}

export const Banner: React.FC<BannerProps> = ({
  repeatCount = 1,
  text,
  styles,
}) => {
  const repeatedElements = useMemo(
    () => Array(repeatCount).fill(text),
    [repeatCount, text]
  );

  return (
    <div
      className={`h-[46px] max-w-[100vw] truncate ${styles?.containerStyles}`}
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div
        className={`flex flex-nowrap items-center h-full translate-x-[-66px] ${styles?.wrapperTextStyles}`}
      >
        {repeatedElements.map((text, index) => (
          <p
            key={index}
            className="text-2xl font-montserrat font-semibold uppercase whitespace-nowrap mr-[53px]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
