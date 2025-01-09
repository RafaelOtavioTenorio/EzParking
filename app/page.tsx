import Image from "next/image";
import Header from "./components/Header";
import CurrentReg from "./components/CurrentReg";
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import Vehicles from "./components/Vehicles";

export default function Home() {
  
  return (
    <main>
      <Header />
      <CurrentReg />
      <SearchBar />
      <Favorites />
      <Vehicles />

    </main>
  );
}
