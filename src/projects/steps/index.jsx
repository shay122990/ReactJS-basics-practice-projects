import { useState } from "react";
import styles from "./Steps.module.css";

const messages = [
  "Choose a workout 🏋️",
  "Finish your session 🔥",
  "Track your progress 📈",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const steps = [1, 2, 3];

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < steps.length) setStep((s) => s + 1);
  }

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className={styles.steps}>
          <div className={styles.numbers}>
            {steps.map((num) => (
              <div
                key={num}
                className={`${styles.number} ${
                  step >= num ? styles.active : ""
                }`}
              >
                {num}
              </div>
            ))}
          </div>

          {/* <p className={styles.message}>
            <span>Step {step}</span>
            {messages[step - 1]}
          </p> */}

          <StepMessage step={step}>{messages[step - 1]} </StepMessage>

          <div className={styles.buttons}>
            {/* <button className={styles.button} onClick={handlePrevious}>
              ← Prev
            </button> */}
            <Button onClick={handlePrevious}>
              <span>👈🏼</span> Prev
            </Button>

            {/* <button className={styles.button} onClick={handleNext}>
              Next →
            </button> */}
            <Button onClick={handleNext}>
              {" "}
              Next
              <span> 👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;

function StepMessage({ step, children }) {
  return (
    <div className={styles.message}>
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
