"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import { Bside } from "@/app/types";
import { useCallback, useState } from "react";
import ProfilesList from "../Profiles/ProfilesList";

const LoadMoreBsides = () => {
  const { getBsides } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreBsides = useCallback(async () => {
    const nextPage = page + 1;
    const { results } = (await getBsides(nextPage)) ?? [];

    setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...results]);
    setPage(nextPage);
  }, [getBsides, page]);

  return (
    <div className="mt-[61px]">
      <ProfilesList firstPageOfProfiles={bsides} />
      <button onClick={loadMoreBsides}>Load More</button>
    </div>
  );
};

export default LoadMoreBsides;
