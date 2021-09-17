import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentCryptoContext = createContext();

export const CurrentCryptoProvider = ({ children }) => {
  const [cryptoID, setCryptoID] = useState("");
  const [actualCrypto, setActualCrypto] = useState();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${cryptoID}`)
      .then((response) => setActualCrypto(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <CurrentCryptoContext.Provider value={{ setCryptoID, actualCrypto }}>
      {children}
    </CurrentCryptoContext.Provider>
  );
};

export const useCurrentCrypto = () => useContext(CurrentCryptoContext);
