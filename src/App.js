import GlobalStyle from "./Styles/global";
import { useState } from "react";
import { Coin } from "./Components/Coin";
import { useCoins } from "./Providers/Coins";
import { Search } from "./Components/Search";

function App() {
  const { updateCoins, filteredCoins } = useCoins();

  return (
    <div className="App">
      <GlobalStyle />
      <Search />
      {filteredCoins.map((coin) => {
        return <Coin coin={coin} />;
      })}
    </div>
  );
}

export default App;
