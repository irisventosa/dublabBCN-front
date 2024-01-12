"use client";
import useDublabApi from "@/app/lib/hooks/useDublabApi";
import mergeBsidesWithShows from "@/app/lib/mergeBsidesWithShows";

import { Bside, RadioApiShow } from "@/app/types";
import { useCallback, useState } from "react";
import LatestShowsVariableHeight from "./LatestShowsVariableHeight";
import Button from "../Button";

const LoadAndMergeMorePodcasts = () => {
  const { getBsides, getLatestsShowsData } = useDublabApi();
  const [bsides, setBsides] = useState<Bside[]>([]);
  const [shows, setShows] = useState<RadioApiShow[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreContent = useCallback(async () => {
    const nextPage = page + 1;
    const { results: latestBsides } = (await getBsides(nextPage)) ?? [];
    const { results: latestShows } =
      (await getLatestsShowsData(nextPage)) ?? [];

    setPage(nextPage);
    setBsides((prevProfiles: Bside[]) => [...prevProfiles, ...latestBsides]);
    setShows((prevShows: RadioApiShow[]) => [...prevShows, ...latestShows]);
  }, [getBsides, getLatestsShowsData, page]);

  const mergedContent = mergeBsidesWithShows(shows, bsides);

  const isAllDataLoaded = mergedContent.every((apiProfiles) => apiProfiles);

  if (!isAllDataLoaded) return <div>Loading...</div>;

  return (
    <div>
      <LatestShowsVariableHeight
        paddingTop="0px"
        latestPodcasts={mergedContent}
      />
      <div className="flex justify-center py-14 ">
        <Button
          actionOnClick={loadMoreContent}
          className=" bg-black text-white text-sm h-[42px] w-[120px] rounded-md uppercase "
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default LoadAndMergeMorePodcasts;
