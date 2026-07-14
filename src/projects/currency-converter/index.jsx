import { useState, useEffect } from "react";
import styles from "./CurrencyConverter.module.css";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(1);
  const [conversionRate, setConversionRate] = useState(0);

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const res = await fetch("https://api.frankfurter.dev/v2/currencies");
        const data = await res.json();
        setCurrencies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCurrencyData();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRate() {
      try {
        const res = await fetch(
          `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`,
          { signal: controller.signal },
        );

        if (!res.ok) throw new Error("Failed to fetch rate");

        const data = await res.json();
        setRate(data.rate);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    fetchRate();

    return () => controller.abort();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConversionRate(Number(amount) * rate);
  }, [amount, rate]);

  return (
    <section className={styles.converter}>
      <h2 className={styles.title}>💸 Currency Converter</h2>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="number"
          min="0"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className={styles.select}
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((code) => (
            <option key={code.iso_code} value={code.iso_code}>
              {code.iso_code}
            </option>
          ))}
        </select>
        <div className={styles.arrow}>⇄</div>
        <select
          className={styles.select}
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((code) => (
            <option key={code.iso_code} value={code.iso_code}>
              {code.iso_code}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.result}>
        <span className={styles.label}>Converted Amount</span>

        <h3>
          {conversionRate.toFixed(2)} {toCurrency}
        </h3>

        <p>
          {amount || 0} {fromCurrency}
        </p>
      </div>
    </section>
  );
}

/// OR old api and simpler

// export default function App() {
//   const [amount, setAmount] = useState(1);
//   const [fromCur, setFromCur] = useState("EUR");
//   const [toCur, setToCur] = useState("USD");
//   const [converted, setConverted] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(
//     function () {
//       async function convert() {
//         setIsLoading(true);
//         const res = await fetch(
//           ` https://api.frankfurter.dev/v1/latest?amount=100&from=EUR&to=USD`
//         );
//         const data = await res.json();
//         setConverted(data.rates[toCur]);
//         setIsLoading(false);
//       }

//       if (fromCur === toCur) return setConverted(amount);
//       convert();
//     },
//     [amount, fromCur, toCur]
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         value={amount}
//         onChange={(e) => setAmount(Number(e.target.value))}
//         disabled={isLoading}
//       />
//       <select
//         value={fromCur}
//         onChange={(e) => setFromCur(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <select
//         value={toCur}
//         onChange={(e) => setToCur(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <p>
//         {converted} {toCur}
//       </p>
//     </div>
//   );
// }
