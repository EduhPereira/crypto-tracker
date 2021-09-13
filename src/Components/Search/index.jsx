import React from "react";
import { useCoins } from "../../Providers/Coins";

export const Search = () => {
  const { setSearch } = useCoins();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="coin-search">
      <h1 className="coin-text">Search a Currency</h1>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
