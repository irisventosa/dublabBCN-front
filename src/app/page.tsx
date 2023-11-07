import HeroSection from "./components/HeroSection";
import LatestShows from "./components/LatestShows/LatestShows";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <LatestShows />
    </main>
  );
}
