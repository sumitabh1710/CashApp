import React from "react";
export default () => {
  const [dimensions, setDimensions] = React.useState({
    height: null,
    width: null,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window?.innerHeight || null,
        width: window?.innerWidth || null,
      });
    }
    if (dimensions.width === null) handleResize();
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return [dimensions.width, dimensions.height];
};
