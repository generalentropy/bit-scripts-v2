import CardsWrapper from "./components/CardsWrapper";
import Header from "./components/Header";
import Info from "./components/Info";
import LangageSwitcher from "./components/LangSwitcher";
import GlobalProvider from "../context/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="min-h-screen overflow-x-hidden bg-neutral-800">
        <Header />
        <LangageSwitcher />
        <Info />
        <CardsWrapper />
      </div>
    </GlobalProvider>
  );
}

export default App;
