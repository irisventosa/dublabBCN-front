import LatestShowsVariableHeight from "../components/LatestShows/LatestShowsVariableHeight";
import LoadMoreLatest from "../components/LatestShows/LoadMoreLatest";
import useDublabApi from "../lib/hooks/useDublabApi";
import mergeBsidesWithShows from "../lib/mergeBsidesWithShows";
import { getLatestShowsData } from "../lib/radioDataFetching";

const Latest = async () => {
  const pageToGet = 1;
  const { getBsides } = useDublabApi();

  const { results: latestShows } = await getLatestShowsData(pageToGet);
  const { results: bSides } = await getBsides(pageToGet);

  const latestPodcasts = mergeBsidesWithShows(latestShows, bSides);

  return (
    <main className="flex flex-col">
      <LatestShowsVariableHeight
        paddingTop="206px"
        latestPodcasts={latestPodcasts}
      />
      <LoadMoreLatest />
    </main>
  );
};

export default Latest;
