"use client";
import { useSpinner } from "@/app/contexts/useContexts";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile, Bside } from "@/app/types";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ProfilesListMobile from "../Profiles/ProfilesListMobile";
import Spinner from "../ui/Spinner";
import ProfilesListArchive from "./ProfilesListArchive";

interface LoadMoreArchivedProfilesProps {
  isMobile: boolean;
}

const LoadMoreArchivedProfiles = ({
  isMobile,
}: LoadMoreArchivedProfilesProps) => {
  const pathname = usePathname();
  const { isLoading, setIsLoading } = useSpinner();
  const { getBsides, getArchivedProfiles } = useDublabApi();
  const [page, setPage] = useState(1);
  const [profilesLoaded, setLoadedProfiles] = useState(false);
  const [allPagesLoaded, setAllPagesLoaded] = useState(false);
  const [bsidesOrArchive, setBsidesOrArchive] = useState<
    Bside[] | ApiProfile[]
  >([]);

  const threshold = 1;
  const { ref, inView } = useInView({ threshold });

  const getterFunctionToPass = pathname.includes("/b-sides")
    ? getBsides
    : getArchivedProfiles;

  const loadMoreBsides = useCallback(async () => {
    try {
      await setIsLoading(true);

      const nextPage = page + 1;

      await new Promise((resolve) => setTimeout(resolve, 500));

      const { results: firstResults } =
        (await getterFunctionToPass(nextPage)) ?? [];

      const hasMore = nextPage < 17;

      if (!hasMore) {
        setAllPagesLoaded(true);
      }

      const updatedBsidesOrArchive = [...bsidesOrArchive, ...firstResults] as
        | Bside[]
        | ApiProfile[];

      setBsidesOrArchive(updatedBsidesOrArchive);

      setPage(nextPage);
      setIsLoading(false);
      setLoadedProfiles(true);
    } catch (error: unknown) {
      throw new Error();
    }
  }, [bsidesOrArchive, getterFunctionToPass, page, setIsLoading]);

  useEffect(() => {
    if (inView && !isLoading && !profilesLoaded && !allPagesLoaded) {
      loadMoreBsides();
      setTimeout(() => {
        setLoadedProfiles(false);
      }, 1000);
    }
  }, [allPagesLoaded, profilesLoaded, inView, isLoading, loadMoreBsides, page]);

  return (
    <div className="max-w-[100vw] ">
      {isMobile ? (
        <ProfilesListMobile seasonProfiles={bsidesOrArchive} />
      ) : (
        <ProfilesListArchive profilesOrBsides={bsidesOrArchive} />
      )}
      <div ref={ref}> {isLoading && <Spinner />}</div>
    </div>
  );
};

export default LoadMoreArchivedProfiles;
