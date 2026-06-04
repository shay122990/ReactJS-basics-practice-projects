import React, { useState } from "react";
import styles from "./TipCalculator.module.css";

const TipCalculator = () => {
  const tipOptions = [
    { value: 0, text: "Dissatisfied (0%)" },
    { value: 5, text: "It was okay (5%)" },
    { value: 10, text: "It was good (10%)" },
    { value: 20, text: "Absolutely amazing (20%)" },
  ];

  const [selfPercentage, setSelfPercentage] = useState(tipOptions[0].value);
  const [friendPercentage, setFriendPercentage] = useState(tipOptions[0].value);
  const [initialBill, setInitialBill] = useState("100");

  const handleBillInput = (event) => {
    setInitialBill(event.target.value);
  };

  const handleSelectSelf = (event) => {
    setSelfPercentage(+event.target.value);
  };

  const handleSelectFriend = (event) => {
    setFriendPercentage(+event.target.value);
  };

  const handleReset = () => {
    setInitialBill("100");
    setSelfPercentage(tipOptions[0].value);
    setFriendPercentage(tipOptions[0].value);
  };

  const averagePercentage = (selfPercentage + friendPercentage) / 2;
  const tipAmount = (+initialBill * averagePercentage) / 100;
  const totalBill = +initialBill + tipAmount;

  return (
    <div className={styles.container}>
      <div className={styles.presenter}>
        <div className={styles.receipt}>
          <h1 className={styles.title}>RESTAURANT RECEIPT</h1>

          <div className={styles.divider}></div>

          <BillInput
            type="number"
            initialBill={initialBill}
            onChange={handleBillInput}
          />

          <TipSelect
            tipOptions={tipOptions}
            onSelected={handleSelectSelf}
            selectedPercentage={selfPercentage}
          >
            How did you like the service?
          </TipSelect>

          <TipSelect
            tipOptions={tipOptions}
            onSelected={handleSelectFriend}
            selectedPercentage={friendPercentage}
          >
            How did your friend like the service?
          </TipSelect>

          <div className={styles.summary}>
            <div className={styles.total}>${totalBill.toFixed(2)}</div>

            <div className={styles.breakdown}>
              <span>Bill</span>
              <span>${Number(initialBill).toFixed(2)}</span>
            </div>

            <div className={styles.breakdown}>
              <span>Tip</span>
              <span>${tipAmount.toFixed(2)}</span>
            </div>

            <div className={styles.breakdown}>
              <span>Average Tip</span>
              <span>{averagePercentage}%</span>
            </div>
          </div>

          <button className={styles.resetBtn} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;

function BillInput({ type, onChange, initialBill }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>How much was the bill?</label>

      <input
        className={styles.input}
        value={initialBill}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}

function TipSelect({ tipOptions, children, onSelected, selectedPercentage }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{children}</label>

      <select
        className={styles.select}
        value={selectedPercentage}
        onChange={onSelected}
      >
        {tipOptions.map((tip) => (
          <option key={tip.value} value={tip.value}>
            {tip.text}
          </option>
        ))}
      </select>
    </div>
  );
}
