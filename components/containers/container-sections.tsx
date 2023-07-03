import { FC } from "react";
import { ContainerProps } from "./containers.interfaces";

export const ContainerSections: FC<ContainerProps> = ({ children }) => {
  return <div className="flex px-[12px] pt-[60px] pb-[80px] sm:px-[75px] sm:pt-[80px] sm:pb-[140px]">{children}</div>;
};
