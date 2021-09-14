import React from "react";
import { Card } from "./styles";

export const Coin = ({ coin }) => {
  return (
    <Card key={coin.id}>
      <img src={coin.image} alt="" />
      <h3>{coin.name}</h3>
      <span>{coin.symbol}</span>
      <div>Current Price: R${coin.current_price}</div>
    </Card>
  );
};
