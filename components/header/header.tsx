"use client";
import * as React from "react";
import Image from "next/image";

import { Link } from "@/components/common/link";
import { Banner } from "../common/banner";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = React.useCallback<
    React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  >(
    (event) => {
      setIsOpen(!isOpen);
    },
    [isOpen]
  );

  const links = [
    { id: "link1", href: "/page-1", text: "lorem ipsum", enabled: true },
    { id: "link2", href: "/page-2", text: "lorem ipsum", enabled: true },
    { id: "link3", href: "/page-3", text: "lorem ipsum", enabled: true },
    { id: "link4", href: "/page-4", text: "lorem ipsum", enabled: true },
    { id: "link5", href: "/page-5", text: "lorem ipsum", enabled: true },
    { id: "link6", href: "#", text: "lorem ipsum", enabled: false },
  ];

  return (
    <header>
      <div className="flex h-[48px] pt-[12px] pl-[35px] pr-[35px] pb-[12px] items-center">
        <Image
          src={require("@/helpers/icons/logo.svg")}
          alt="logo"
          height={17.8}
          width={30}
        />
        <p className="text-center text-base font-medium leading-loose ml-[16px]">
          {isOpen ? "Menu" : "Lorem"}
        </p>

        <div className="relative ml-[auto] sm:hidden">
          <button
            className="block hover:text-gray-300 focus:outline-none m-[auto 0]"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <Image
                src={require("@/helpers/icons/close.svg")}
                alt="logo"
                height={24}
                width={24}
              />
            ) : (
              <Image
                src={require("@/helpers/icons/menu.svg")}
                alt="logo"
                height={24}
                width={24}
              />
            )}
          </button>
          {isOpen && (
            <div className="absolute z-10 top-0 right-[-35px] mt-[42px] w-[100vw] h-[100vh] bg-black shadow-lg">
              <div className="flex flex-col justify-center gap-y-[24px] px-[12px] h-[calc(100%-100px)]">
                {links.map(({ text, href, id, enabled }) => (
                  <div key={id} className="flex justify-between">
                    <Link
                      id={`link-${id}`}
                      href={href}
                      text={text}
                      onClick={toggleMenu}
                      enabled={enabled}
                    />

                    {!enabled && (
                      <p className="text-18 font-bold leading-[100.023%] uppercase opacity-40">
                        Coming Soon
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <Banner repeatCount={12} text={"lorem ipsum"} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
