import { CoinsProvider } from "./Coins/index";
import { CurrentCryptoProvider } from "./CurrentCrypto/index";

export const Providers = ({ children }) => {
  return (
    <CoinsProvider>
      <CurrentCryptoProvider>{children}</CurrentCryptoProvider>
    </CoinsProvider>
  );
};
