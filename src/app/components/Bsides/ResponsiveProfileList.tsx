// ResponsiveProfilesList.js

"use client";
import useMobileComponent from "@/app/lib/hooks/useMobileComponent";
import { ApiBsidesList, ApiProfilesList } from "@/app/types";
import { usePathname } from "next/navigation";
import ProfilesList from "../Profiles/ProfilesList";
import ProfilesListMobile from "../Profiles/ProfilesListMobile";
import LoadMoreBsides from "./LoadMoreBsides";
import { useSlideOver } from "@/app/contexts/useContexts";

interface ResponsiveMobileProfileList {
  podcastsList: ApiBsidesList | ApiProfilesList;
}

const ResponsiveProfilesList = ({
  podcastsList,
}: ResponsiveMobileProfileList) => {
  const pathname = usePathname();
  const isBsides = pathname === "/b-sides";
  const mobileComponent = useMobileComponent();
  const { isOpen } = useSlideOver();

  return (
    <section>
      {!isOpen && (
        <>
          {mobileComponent ? (
            <ProfilesListMobile seasonProfiles={podcastsList!.results} />
          ) : (
            <ProfilesList firstPageOfProfiles={podcastsList!.results} />
          )}
          {isBsides && <LoadMoreBsides isMobile={mobileComponent} />}
        </>
      )}
    </section>
  );
};

export default ResponsiveProfilesList;
