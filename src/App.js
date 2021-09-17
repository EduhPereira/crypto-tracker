import GlobalStyle from "./Styles/global";
import { Coin } from "./Components/Coin";
import { useCoins } from "./Providers/Coins";
import { Search } from "./Components/Search";
import { CryptoModal } from "./Components/CryptoModal";
import "./App.css";
import { useCurrentCrypto } from "./Providers/CurrentCrypto";

function App() {
  const { updateCoins, filteredCoins } = useCoins();
  const { isVisible } = useCurrentCrypto();

  return (
    <div className="App">
      <GlobalStyle />
      {isVisible && <CryptoModal />}
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
