import React from "react";

function useWindowSize() {
  const [screenSize, setScreenSize] = React.useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  React.useEffect(() => {
    window.addEventListener("orientationchange", handleResize);

    return () => window.removeEventListener("orientationchange", handleResize);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, setScreenSize };
}
export default useWindowSize;
