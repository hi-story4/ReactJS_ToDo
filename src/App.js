import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [balance, setBalance] = useState(0);
  const onChange = (event) => {
    setBalance(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <label htmlFor="money">$</label>
            <input
              id="money"
              type="number"
              onChange={onChange}
              placeholder="Money you have.."
            ></input>
          </div>
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD Count:
                {Math.round(balance / coin.quotes.USD.price)}
              </option>
            ))}{" "}
          </select>
        </div>
      )}
    </div>
  );
}
