import { FC } from "react";
import CommonLink from "next/link";
import { LinkProps } from "./link.interfaces";

export const Link: FC<LinkProps> = ({ id, href, onClick, enabled, text }) => {
  return (
    <CommonLink
      key={`link-${id}`}
      href={href}
      onClick={onClick}
      className={`text-18 font-bold leading-[100.023%] uppercase opacity-${
        !enabled ? 40 : 100
      }`}
    >
      {text}
    </CommonLink>
  );
};
