import GlobalStyle from "./Styles/global";
import { Coin } from "./Components/Coin";
import { useCoins } from "./Providers/Coins";
function App() {
  const { coins, updateCoins } = useCoins();
  return (
    <div className="App">
      <GlobalStyle />
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>
      {coins.map((coin) => {
        return <Coin coin={coin} />;
      })}
    </div>
  );
}

export default App;
