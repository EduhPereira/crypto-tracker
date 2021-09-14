import React from "react";
import { useCoins } from "../../Providers/Coins";
import crypto from "../../Assets/crypto.gif";
import { SearchContainer, Header } from "./styles";

export const Search = () => {
  const { setSearch } = useCoins();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <Header>crypto tracker</Header>
      <img src={crypto} alt="" />
      <h1>Search a Currency</h1>
      <form>
        <input
          type="text"
          placeholder="Bitcoin, Etherum..."
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </SearchContainer>
  );
};
