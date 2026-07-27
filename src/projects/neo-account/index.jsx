import { useReducer } from "react";
import styles from "./BankAccount.module.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  closeMessage: "",
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "open") return state;

  switch (action.type) {
    case "open":
      return {
        ...state,
        isActive: true,
        balance: 500,
        closeMessage: "",
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        closeMessage: "",
      };

    case "withdraw":
      if (state.balance < action.payload) return state;

      return {
        ...state,
        balance: state.balance - action.payload,
        closeMessage: "",
      };

    case "request loan":
      if (state.isLoan) return state;

      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
        isLoan: true,
        closeMessage: "",
      };

    case "pay loan":
      if (state.loan === 0) return state;

      if (state.balance < state.loan) return state;

      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        isLoan: false,
        closeMessage: "",
      };

    case "close":
      if (state.loan > 0) {
        return {
          ...state,
          closeMessage: "Please pay your loan before closing the account.",
        };
      }

      if (state.balance !== 0) {
        return {
          ...state,
          closeMessage: "Your balance must be 0 before closing the account.",
        };
      }

      return initialState;

    default:
      throw new Error("Unknown action type");
  }
}

function NeoBankAccount() {
  const [{ isActive, balance, loan, closeMessage }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  return (
    <div className={styles.bankContainer}>
      <h1>NEO BANK</h1>

      <div className={styles.dashboard}>
        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>Balance</h3>
            <span>${balance}</span>
          </div>

          <div className={styles.card}>
            <h3>Loan</h3>
            <span>${loan}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "open" });
              }}
              disabled={isActive}
            >
              Open account
            </button>
          </p>

          <p>
            <button
              onClick={() => {
                dispatch({ type: "deposit", payload: 150 });
              }}
              disabled={!isActive}
            >
              Deposit 150
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "withdraw", payload: 50 });
              }}
              disabled={!isActive}
            >
              Withdraw 50
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "request loan", payload: 5000 });
              }}
              disabled={!isActive}
            >
              {loan === 0 ? "Request a loan of 5000" : "You  have a loan"}
            </button>
          </p>
          <p>
            <button
              onClick={() => {
                dispatch({ type: "pay loan" });
              }}
              disabled={!isActive}
            >
              Pay loan
            </button>
          </p>
          <p>
            <button
              onClick={() => dispatch({ type: "close" })}
              disabled={!isActive}
            >
              Close Account
            </button>
          </p>
        </div>
        {closeMessage && <div className={styles.error}>{closeMessage}</div>}
      </div>
    </div>
  );
}

export default NeoBankAccount;

// TODO
// have an input field for deposit amount
