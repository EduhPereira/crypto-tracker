import GlobalStyle from "./Styles/global";
import { useState } from "react";
import { Coin } from "./Components/Coin";
import { useCoins } from "./Providers/Coins";
import { Search } from "./Components/Search";
import "./App.css";

function App() {
  const { updateCoins, filteredCoins } = useCoins();

  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      <div className="coinsList">
        {filteredCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
