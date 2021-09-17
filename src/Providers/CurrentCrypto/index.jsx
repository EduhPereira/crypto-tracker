import { createContext, useContext, useState } from "react";

export const CurrentCryptoContext = createContext();

export const CurrentCryptoProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cryptoID, setCryptoID] = useState("bitcoin");

  return (
    <CurrentCryptoContext.Provider
      value={{
        isVisible,
        setIsVisible,
        cryptoID,
        setCryptoID,
      }}
    >
      {children}
    </CurrentCryptoContext.Provider>
  );
};

export const useCurrentCrypto = () => useContext(CurrentCryptoContext);
