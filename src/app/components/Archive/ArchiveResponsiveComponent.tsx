"use client";
import { useSlideOver } from "@/app/contexts/useContexts";
import useMobileComponent from "@/app/lib/hooks/useMobileComponent";
import { ApiBsidesList, ApiProfilesList } from "@/app/types";
import { usePathname } from "next/navigation";
import ProfilesListMobile from "../Profiles/ProfilesListMobile";
import LoadMoreArchivedProfiles from "./LoadMoreArchivedProfiles";
import ProfilesListArchive from "./ProfilesListArchive";

interface ResponsiveMobileProfileList {
  podcastsList: ApiBsidesList | ApiProfilesList;
}

const ArchivedResponsiveProfilesList = ({
  podcastsList,
}: ResponsiveMobileProfileList) => {
  const pathname = usePathname();
  const isShows = pathname === "/shows";
  const mobileComponent = useMobileComponent();
  const { isOpen } = useSlideOver();

  return (
    <section>
      {!isOpen && (
        <>
          {mobileComponent ? (
            <ProfilesListMobile seasonProfiles={podcastsList!.results} />
          ) : (
            <ProfilesListArchive profilesOrBsides={podcastsList!.results} />
          )}
          {!isShows && <LoadMoreArchivedProfiles isMobile={mobileComponent} />}
        </>
      )}
    </section>
  );
};

export default ArchivedResponsiveProfilesList;
