"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import mergeBsidesWithShows from "@/app/lib/mergeBsidesWithShows";
import { getLatestShowsData } from "@/app/lib/radioDataFetching";
import { Bside, RadioApiShow } from "@/app/types";
import { useCallback, useState } from "react";
import LatestShowsVariableHeight from "./LatestShowsVariableHeight";

const LoadAndMergeMorePodcasts = () => {
  const { getBsides } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);
  const [shows, setShows] = useState<RadioApiShow[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreContent = useCallback(async () => {
    const nextPage = page + 1;
    const { results: latestBsides } = (await getBsides(nextPage)) ?? [];
    const { results: latestShows } = (await getLatestShowsData(nextPage)) ?? [];

    setPage(nextPage);
    setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...latestBsides]);
    setShows((prevShows: RadioApiShow[]) => [...prevShows, ...latestShows]);
  }, [getBsides, page]);

  const mergedContent = mergeBsidesWithShows(shows, bsides);

  const isAllDataLoaded = mergedContent.every((apiProfiles) => apiProfiles);

  if (!isAllDataLoaded) return <div>Loading...</div>;

  return (
    <div>
      <LatestShowsVariableHeight
        paddingTop="0px"
        latestPodcasts={mergedContent}
      />
      <button onClick={loadMoreContent}>Load More</button>
    </div>
  );
};

export default LoadAndMergeMorePodcasts;
