import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
  }, []);

  const updateCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <CoinsContext.Provider value={{ coins, setCoins, updateCoins }}>
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => useContext(CoinsContext);
