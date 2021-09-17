import axios from "axios";
import { useEffect, useState } from "react";
import { useCurrentCrypto } from "../../Providers/CurrentCrypto";
import { Container, Card } from "./styles";

export const CryptoModal = () => {
  const { setIsVisible, cryptoID } = useCurrentCrypto();
  const [actualCrypto, setActualCrypto] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${cryptoID}`)
      .then((response) => setActualCrypto(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Card>
        <h1>{actualCrypto.name}</h1>
        <div>Market Cap Rank:{actualCrypto.market_cap_rank}</div>
        <div>Coin Gecko Rank:{actualCrypto.coingecko_rank}</div>
        <div>Developer Score:{actualCrypto.developer_score}</div>
        <div>Comunity Score:{actualCrypto.community_score}</div>
        <button onClick={() => setIsVisible(false)}>X</button>
      </Card>
    </Container>
  );
};
