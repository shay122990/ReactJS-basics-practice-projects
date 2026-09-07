import { useState } from "react";
import styles from "../../ReduxBank.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((state) => state.account);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <section className={styles.operations}>
      <div className={styles.sectionHeader}>
        <div>
          <span className={styles.eyebrow}>MANAGE MONEY</span>
          <h2>Account operations</h2>
        </div>
        <span className={styles.headerIcon}>↗</span>
      </div>

      <div className={styles.operationGrid}>
        <div className={styles.operation}>
          <div className={styles.operationIcon}>↓</div>
          <div className={styles.operationContent}>
            <label>Deposit money</label>
            <div className={styles.controls}>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(+e.target.value)}
                placeholder="Amount"
              />

              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>

              <button onClick={handleDeposit} disabled={isLoading}>
                {isLoading ? "Converting..." : "Deposit"}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.operation}>
          <div className={styles.operationIcon}>↑</div>
          <div className={styles.operationContent}>
            <label>Withdraw money</label>
            <div className={styles.controls}>
              <input
                type="number"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(+e.target.value)}
                placeholder="Amount"
              />

              <button onClick={handleWithdrawal}>Withdraw</button>
            </div>
          </div>
        </div>

        <div className={styles.operation}>
          <div className={styles.operationIcon}>✦</div>
          <div className={styles.operationContent}>
            <label>Request a loan</label>
            <div className={styles.controls}>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(+e.target.value)}
                placeholder="Amount"
              />

              <input
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                placeholder="Purpose"
              />

              <button onClick={handleRequestLoan}>Request loan</button>
            </div>
          </div>
        </div>

        <div className={styles.operation}>
          <div className={styles.operationIcon}>✓</div>
          <div className={styles.operationContent}>
            <label>Outstanding loan</label>
            <div className={styles.loanRow}>
              <span>
                {currentLoan > 0
                  ? `$${currentLoan.toLocaleString()} · ${currentLoanPurpose}`
                  : "No outstanding loan"}
              </span>

              <button onClick={handlePayLoan} disabled={!currentLoan}>
                Pay loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountOperations;
