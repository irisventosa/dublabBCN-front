import PrivacyDisclaimer from "./components/PrivacyDisclaimer/PrivacyDisclaimer";
import TextBackgorund from "./components/TextBackground/TextBackground";

export default function Home() {
  return (
    <main className="h-screen">
      <TextBackgorund />
      <PrivacyDisclaimer />
    </main>
  );
}
