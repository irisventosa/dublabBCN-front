import { cookies } from "next/headers";
import HeroSection from "./components/HeroSection";
import LatestShowsFixedHeight from "./components/LatestShows/LatestShowsFixedHeight";
import PrivacyDisclaimer from "./components/PrivacyDisclaimer";
import useDublabApi from "./lib/hooks/useDublabApi";
import mergeBsidesWithShows from "./lib/mergeBsidesWithShows";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "", default: "dublab BCN" },
  description: "Pagina web de la radio comunitaria dublab BCN",
};

const Home = async () => {
  const pageToGet = 1;
  const { getBsides, getLatestsShowsData } = useDublabApi();

  const { results: latestShows } = await getLatestsShowsData(pageToGet);
  const { results: bSides } = await getBsides(pageToGet);

  const latestPodcasts = mergeBsidesWithShows(latestShows, bSides);
  const trimmedShows = latestPodcasts.slice(0, 8);
  const cookiesStore = cookies();
  const disclaimerClosed = cookiesStore.get("disclaimerClosed");

  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        {!disclaimerClosed && <PrivacyDisclaimer />}
        <LatestShowsFixedHeight latestShows={trimmedShows} />
      </main>
    </>
  );
};

export default Home;
