import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Trailer } from "./components/Trailer";
import { GameOverview } from "./components/GameOverview";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { Download } from "./components/Download";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#070f08",
        minHeight: "100vh",
        fontFamily: "'VT323', monospace",
      }}
    >
      <Navbar />
      <Hero />
      <Trailer />
      <GameOverview />
      <Story />
      <Gallery />
      <Download />
      <Footer />
    </div>
  );
}
