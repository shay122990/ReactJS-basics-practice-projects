import { useState } from "react";
import styles from "./CharacterCounter.module.css";

function Counter({
  maxLength = 100,
  strict = false,
  warningThreshold = 0.8,
  warningColor = "orange",
  dangerColor = "red",
  onLimitReached = () => {},
}) {
  const [text, setText] = useState("");

  const count = text.length;
  const remaining = maxLength - count;

  const isWarning = count >= maxLength * warningThreshold;
  const isOverLimit = count > maxLength;

  function handleChange(e) {
    const value = e.target.value;

    if (strict && value.length > maxLength) return;

    setText(value);

    if (value.length === maxLength) {
      onLimitReached();
    }
  }

  let color = "inherit";

  if (isWarning) color = warningColor;
  if (isOverLimit) color = dangerColor;

  return (
    <div className={styles.counter}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
        rows={5}
        placeholder="Start typing..."
      />

      <p className={styles.count} style={{ color }}>
        {count} / {maxLength}
      </p>

      {!strict && isOverLimit && (
        <p className={styles.warning} style={{ color: dangerColor }}>
          {Math.abs(remaining)} characters over limit
        </p>
      )}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div className={styles.container}>
      <Counter
        maxLength={120}
        onLimitReached={() => {
          console.log("User reached limit");
        }}
      />
    </div>
  );
}
