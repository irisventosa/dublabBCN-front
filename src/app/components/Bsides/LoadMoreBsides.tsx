"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Bside } from "@/app/types";
import { useCallback, useEffect, useState } from "react";
import ProfilesList from "../Profiles/ProfilesList";
import { useInView } from "react-intersection-observer";
import { useSpinner } from "@/app/contexts/useContexts";
import Spinner from "../ui/Spinner";
import ProfilesListMobile from "../Profiles/ProfilesListMobile";

interface LoadMoreBsidesProps {
  isMobile: boolean;
}

const LoadMoreBsides = ({ isMobile }: LoadMoreBsidesProps) => {
  const { getBsides } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);

  const [page, setPage] = useState(1);
  const { ref, inView } = useInView();

  const { isLoading, setIsLoading } = useSpinner();

  const loadMoreBsides = useCallback(async () => {
    try {
      setIsLoading(true);

      const nextPage = page + 1;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const { results: firstResults } = (await getBsides(nextPage)) ?? [];

      setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...firstResults]);

      setPage(nextPage);
    } catch (error: unknown) {
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  }, [getBsides, page, setIsLoading]);

  useEffect(() => {
    if (inView && !isLoading) {
      loadMoreBsides();
    }
  }, [inView, isLoading, loadMoreBsides]);

  return (
    <div className="mt-[61px] max-w-[100vw] ">
      {isMobile ? (
        <ProfilesListMobile seasonProfiles={bsides} />
      ) : (
        <ProfilesList firstPageOfProfiles={bsides} />
      )}
      <div ref={ref}></div>
      {isLoading && <Spinner />}
    </div>
  );
};

export default LoadMoreBsides;
