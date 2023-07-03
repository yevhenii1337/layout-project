"use client";

import React, { useState, FC, useCallback } from "react";
import Image from "next/image";
import minus from "@/helpers/icons/minus.svg";
import plus from "@/helpers/icons/plus.svg";
import useWindowSize from "@/hooks/useWindowSize";
import banner from "@/helpers/images/banner.png";
import { AcordionProps } from "./acardion.interfaces";

export const Accordion: FC<AcordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { screenSize } = useWindowSize();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderItems = useCallback(
    () =>
      items.map((item, index) => {
        const active = index === activeIndex ? "block" : "hidden";

        return (
          <div key={index}>
            <button
              className="w-full h-[46px] flex justify-between items-center bg-gray-200 hover:bg-gray-300"
              onClick={() => handleClick(index)}
              style={{
                backgroundImage:
                  index === activeIndex && screenSize.width > 576
                    ? `url(${banner.src})`
                    : "unset",
              }}
            >
              <span className="flex justify-between text-start max-w-[1290px] w-full mx-auto text-18 sm:text-2xl font-semibold uppercase whitespace-nowrap px-[12px] sm:px-[0px]">
                {item.title}
                {index === activeIndex ? (
                  <Image src={minus} alt={"minus"} />
                ) : (
                  <Image src={plus} alt={"plus"} />
                )}
              </span>
            </button>
            <div
              className={`text-start max-w-[1290px] px-[12px] sm:px-[0px] mx-auto text-18 font-montserrat font-normal leading-[168%] tracking-[0.212px] pt-[24px] pb-[24px] bg-gray-100 opacity-70 ${active}`}
            >
              {item.content}
            </div>
          </div>
        );
      }),
    [activeIndex, items, screenSize.width]
  );

  return <div className="accordion">{renderItems()}</div>;
};
