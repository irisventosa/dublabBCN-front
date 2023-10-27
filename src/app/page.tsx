import Image from "next/image";
import { text } from "stream/consumers";
import Header from "./components/Header/Header";
import TextBackgorund from "./components/TextBackground/TextBackground";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />
      <TextBackgorund />
    </main>
  );
}
