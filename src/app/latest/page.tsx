import LatestShowsVariableHeight from "../components/LatestShows/LatestShowsVariableHeight";
import LoadMoreLatest from "../components/LatestShows/LoadMoreLatest";
import useDublabApi from "../lib/hooks/useDublabApi";
import mergeBsidesWithShows from "../lib/mergeBsidesWithShows";

const Latest = async () => {
  const pageToGet = 1;
  const { getBsides, getLatestsShowsData } = useDublabApi();

  const { results: latestShows } = await getLatestsShowsData(pageToGet);
  const { results: bSides } = await getBsides(pageToGet);

  const latestPodcasts = mergeBsidesWithShows(latestShows, bSides);

  return (
    <main className="flex flex-col pt-[219px] ">
      <LatestShowsVariableHeight
        paddingTop="206px"
        latestPodcasts={latestPodcasts}
      />
      <LoadMoreLatest />
    </main>
  );
};

export default Latest;
