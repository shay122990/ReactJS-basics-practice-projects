import { useSelector } from "react-redux";
import styles from "../../ReduxBank.module.css";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((state) => state.account);

  return (
    <section className={styles.balanceCard}>
      <div className={styles.balanceTop}>
        <div>
          <span className={styles.balanceLabel}>AVAILABLE BALANCE</span>
          <div className={styles.balance}>{formatCurrency(balance)}</div>
        </div>

        <div className={styles.cardChip}>✦</div>
      </div>

      <div className={styles.balanceBottom}>
        <span>Primary account</span>
        <span>•••• 2847</span>
      </div>
    </section>
  );
}

export default BalanceDisplay;
