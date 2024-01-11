import HeroSection from "./components/HeroSection";
import LatestShowsFixedHeight from "./components/LatestShows/LatestShowsFixedHeight";
import useDublabApi from "./lib/hooks/useDublabApi";
import mergeBsidesWithShows from "./lib/mergeBsidesWithShows";

const Home = async () => {
  const pageToGet = 1;
  const { getBsides, getLatestsShowsData } = useDublabApi();

  const { results: latestShows } = await getLatestsShowsData(pageToGet);
  const { results: bSides } = await getBsides(pageToGet);

  const latestPodcasts = mergeBsidesWithShows(latestShows, bSides);
  const trimmedShows = latestPodcasts.slice(0, 8);

  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <LatestShowsFixedHeight latestShows={trimmedShows} />
      </main>
    </>
  );
};

export default Home;
