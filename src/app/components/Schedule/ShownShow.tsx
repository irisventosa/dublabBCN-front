import { AirtimeShow } from "@/app/types";
import ScheduledBsideMobile from "./ScheduledBsides/ScheduledBsideMobile";
import ScheduledBsideDesktop from "./ScheduledBsides/ScheduledBsideDesktop";
import ScheduledShowMobile from "./ScheduledShows/ScheduledShowMobile";
import ScheduledShowDesktop from "./ScheduledShows/ScheduledShowDesktop";
import { useEffect, useState } from "react";

const ShowComponent = ({
  show,
  listPosition,
  isMobile,
}: {
  show: AirtimeShow;
  listPosition: number;
  isMobile: boolean;
}) => {
  if (show.name.startsWith("b-side")) {
    return isMobile ? (
      <ScheduledBsideMobile airtimeShow={show} listPosition={listPosition} />
    ) : (
      <ScheduledBsideDesktop airtimeShow={show} listPosition={listPosition} />
    );
  }

  return isMobile ? (
    <ScheduledShowMobile airtimeShow={show} listPosition={listPosition} />
  ) : (
    <ScheduledShowDesktop airtimeShow={show} listPosition={listPosition} />
  );
};

export const useMobileComponent = () => {
  const [mobileComponent, setMobileComponent] = useState(false);

  useEffect(() => {
    const mobileBreakPoint = 640;
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < mobileBreakPoint;

    setMobileComponent(isMobile);
  }, []);

  return mobileComponent;
};

export default ShowComponent;
