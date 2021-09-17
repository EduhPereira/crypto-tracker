import React from "react";
import { useCurrentCrypto } from "../../Providers/CurrentCrypto";
import { Card } from "./styles";

export const Coin = ({ coin }) => {
  const { setIsVisible, setCryptoID } = useCurrentCrypto();
  return (
    <Card
      key={coin.id}
      onClick={() => {
        setIsVisible(true);
        setCryptoID(`${coin.id}`);
      }}
    >
      <img src={coin.image} alt="" />
      <h3>{coin.name}</h3>
      <span>{coin.symbol}</span>
      <div>Current Price: R${coin.current_price}</div>
    </Card>
  );
};
