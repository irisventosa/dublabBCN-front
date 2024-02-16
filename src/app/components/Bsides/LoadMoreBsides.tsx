"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { ApiProfile, Bside } from "@/app/types";
import { useCallback, useEffect, useState } from "react";
import ProfilesList from "../Profiles/ProfilesList";
import { useInView } from "react-intersection-observer";
import { useSpinner } from "@/app/contexts/useContexts";
import Spinner from "../ui/Spinner";
import ProfilesListMobile from "../Profiles/ProfilesListMobile";
import { usePathname } from "next/navigation";

interface LoadMoreBsidesProps {
  isMobile: boolean;
}

const LoadMoreBsides = ({ isMobile }: LoadMoreBsidesProps) => {
  const { getBsides, getArchivedProfiles } = useDublabApi();
  const [bsidesOrArchive, setBsidesOrArchive] = useState<
    Bside[] | ApiProfile[]
  >([]);
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const getterFunctionToPass = pathname.includes("/b-sides")
    ? getBsides
    : getArchivedProfiles;

  const { isLoading, setIsLoading } = useSpinner();

  const loadMoreBsides = useCallback(async () => {
    try {
      await setIsLoading(true);

      const nextPage = page + 1;

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const { results: firstResults } =
        (await getterFunctionToPass(nextPage)) ?? [];

      const updatedBsidesOrArchive = [...bsidesOrArchive, ...firstResults] as
        | Bside[]
        | ApiProfile[];

      setBsidesOrArchive(updatedBsidesOrArchive);

      setPage(nextPage);
      setIsLoading(false);
    } catch (error: unknown) {
      throw new Error();
    }
  }, [bsidesOrArchive, getterFunctionToPass, page, setIsLoading]);

  useEffect(() => {
    if (inView && !isLoading) {
      loadMoreBsides();
    }
  }, [inView, isLoading, loadMoreBsides, page]);

  return (
    <div className="max-w-[100vw] ">
      {isMobile ? (
        <ProfilesListMobile seasonProfiles={bsidesOrArchive} />
      ) : (
        <ProfilesList firstPageOfProfiles={bsidesOrArchive} />
      )}
      <div ref={ref}></div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default LoadMoreBsides;
