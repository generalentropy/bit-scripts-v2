import { useEffect } from "react";
import { ORGNAME } from "../config/globals";
import { fetchReposData } from "../utils/helpers";
import CardsWrapper from "./components/CardsWrapper";
import Header from "./components/Header";
import Info from "./components/Info";
import LangageSwitcher from "./components/LangSwitcher";

function App() {
  useEffect(() => {
    fetchReposData(ORGNAME);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-800">
      <Header />
      <LangageSwitcher />
      <Info />
      <CardsWrapper />
    </div>
  );
}

export default App;
