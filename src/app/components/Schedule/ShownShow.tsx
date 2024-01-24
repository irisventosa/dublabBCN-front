import { AirtimeShow } from "@/app/types";
import ScheduledBsideMobile from "./ScheduledBsides/ScheduledBsideMobile";
import ScheduledBsideDesktop from "./ScheduledBsides/ScheduledBsideDesktop";
import ScheduledShowMobile from "./ScheduledShows/ScheduledShowMobile";
import ScheduledShowDesktop from "./ScheduledShows/ScheduledShowDesktop";

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

export default ShowComponent;
