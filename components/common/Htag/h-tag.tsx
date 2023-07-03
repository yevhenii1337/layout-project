import { HtagProps } from "./Htag.interfaces";

export const Htag = ({ tag, children, styles }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1
          className={
            `leading-[92%] text-[40px] sm:text-[120px] font-semibold uppercase ${styles}`
          }
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={
            `text-5xl font-semibold leading-tight uppercase ${styles}`
          }
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={
            `text-2xl font-semibold tracking-wide leading-normal uppercase ${styles}`
          }
        >
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};
