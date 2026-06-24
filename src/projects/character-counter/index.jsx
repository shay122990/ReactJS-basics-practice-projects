import "./styles.css";

import { useState } from "react";
import PropTypes from "prop-types";

Counter.propTypes = {
  maxLength: PropTypes.number,
  strict: PropTypes.bool,
  warningThreshold: PropTypes.number,
  warningColor: PropTypes.string,
  dangerColor: PropTypes.string,
  onLimitReached: PropTypes.func,
};

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
    <div
      style={{
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <textarea
        value={text}
        onChange={handleChange}
        rows={5}
        placeholder="Start typing..."
      />

      <p style={{ margin: 0, color }}>
        {count} / {maxLength}
      </p>

      {!strict && isOverLimit && (
        <p style={{ margin: 0, color: dangerColor }}>
          {Math.abs(remaining)} characters over limit
        </p>
      )}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div className="App">
      <Counter
        maxLength={120}
        onLimitReached={() => {
          console.log("User reached limit");
        }}
      />
    </div>
  );
}
