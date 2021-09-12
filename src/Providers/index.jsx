import { CoinsProvider } from "./Coins/index";

export const Providers = ({ children }) => {
  return <CoinsProvider>{children}</CoinsProvider>;
};
