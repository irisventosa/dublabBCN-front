import HeroSection from "./components/HeroSection";
import LatestShowsFixedHeight from "./components/LatestShows/LatestShowsFixedHeight";
import { getLatestShowsData } from "./lib/radioDataFetching";

const Home = async () => {
  const { results } = await getLatestShowsData();

  const latestShows = results.slice(0, 7);

  return (
    <>
      <script
        src="//widget.mixcloud.com/media/js/widgetApi.js"
        type="text/javascript"
      />
      <main className="flex flex-col">
        <HeroSection />
        <LatestShowsFixedHeight latestShows={latestShows} />
      </main>
    </>
  );
};

export default Home;
