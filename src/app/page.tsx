import HeroSection from "./components/HeroSection";
import LatestShowsFixedHeight from "./components/LatestShows/LatestShowsFixedHeight";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <LatestShowsFixedHeight />
    </main>
  );
}
