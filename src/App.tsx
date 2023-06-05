import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import TrendingNFTs from "./components/TrendingNFTs";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white">
      <div className="gradient-bg-one py-10">
        <Header />
        <Hero />
      </div>
      <div className="gradient-bg-two">
        <Companies />
        <TrendingNFTs />
      </div>
      <div className="gradient-bg-three">
        <Instructions />
      </div>
      <div className="gradient-bg-four">
        <Footer />
      </div>
    </div>
  );
};

export default App;
