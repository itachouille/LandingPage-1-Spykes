import Header from "./components/Header";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Company />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
