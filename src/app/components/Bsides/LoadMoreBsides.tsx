"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Bside } from "@/app/types";
import { useCallback, useEffect, useState } from "react";
import ProfilesList from "../Profiles/ProfilesList";
import { useInView } from "react-intersection-observer";

const LoadMoreBsides = () => {
  const { getBsides } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreBsides = useCallback(async () => {
    const nextPage = page + 1;
    const { results } = (await getBsides(nextPage)) ?? [];

    setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...results]);
    setPage(nextPage);
  }, [getBsides, page]);

  useEffect(() => {
    if (inView) {
      loadMoreBsides();
    }
  }, [inView, loadMoreBsides]);

  return (
    <div className="mt-[61px] max-w-[100vw] ">
      <ProfilesList firstPageOfProfiles={bsides} />
      <div ref={ref}></div>
    </div>
  );
};

export default LoadMoreBsides;
