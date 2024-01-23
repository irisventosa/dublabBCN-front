import { useEffect, useState } from "react";

const useMobileComponent = () => {
  const [mobileComponent, setMobileComponent] = useState(false);

  useEffect(() => {
    const mobileBreakPoint = 640;
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

    setMobileComponent(isMobile);
  }, []);

  return mobileComponent;
};

export default useMobileComponent;
