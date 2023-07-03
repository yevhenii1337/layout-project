import * as React from "react";
import Image from "next/image";
import studio from "@/helpers/images/studio.png";
import { Htag } from "@/components/common/Htag";

export const AboutAs: React.FC = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto sm:max-w-screen-lg mb-[120px] mt-[120px] sm:mb-[80px] sm:mt-[117px] px-[12px] sm:px-[0px]">
      <div className="sm:absolute top-[83px] left-[75px] z-[12] w-[575px]">
        <Htag tag="h1">{"About us"}</Htag>
        <p className="text-base font-normal leading-[1.68] tracking-wider opacity-70 mt-[22px] sm:mt-[0]">
          Instagram
        </p>
        <p
          className={
            "text-base font-normal leading-[1.68]tracking-wider opacity-70 mb-[60px] sm:mb-[0]"
          }
        >
          LinkedIn
        </p>
      </div>
      <div className="sm:absolute top-[179px] right-[75px] z-10 sm:w-[575px] opacity-70">
        <p className="text-base font-normal tracking-wide leading-[1.68]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="hidden sm:block"
        style={{
          position: "absolute",
          top: "179px",
          left: "277px",
          width: "373px",
          height: "373px",
          borderRadius: "50%",
          boxShadow: "0 0 9999px 9999px black",
        }}
      />

      <Image src={studio} alt="studio" className="hidden sm:block" />
    </div>
  );
};
