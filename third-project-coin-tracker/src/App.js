import { useEffect, useState } from "react";
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(1)

  const selectCoin = (e) => {
    if (e.target.value === "Select your coin !") {
      setPrice(1)
      return;
    }
    setPrice((e.target.value))
    setAmount(1)
  }
  const inputYours = (e) => {
    if (price > 0) {
      setAmount(e.target.value)
    }
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins ! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={selectCoin}>
        <option>Select your coin !</option>
        {coins.map((coin, index) => (
          <option 
            key={index} 
            value={coin.quotes.USD.price} 
            id={coin.symbol}
            symbol = {coin.symbol}
          >
            {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <div className={styles.result}>
        <input placeholder="How much you have ?" value={amount} onChange={inputYours}></input>
        <h3>You can buy {amount / price} coins per ${amount} dollars</h3>
      </div>
    </div>
  );
}

export default App;
