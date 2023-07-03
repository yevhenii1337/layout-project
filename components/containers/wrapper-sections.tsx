import * as React from "react";

interface SectionsWrapperProps {
  children: React.ReactNode;
  styles?: string;
}

const _SectionsWrapper: React.FC<SectionsWrapperProps> = ({
  children,
  styles,
}) => {
  return (
    <div
      className={`flex max-w-[1290px] mx-[auto] flex-wrap sm:gap-x-[30px] sm:gap-y-[40px] ${styles}`}
    >
      {children}
    </div>
  );
};

export const SectionsWrapper = React.memo(_SectionsWrapper);
