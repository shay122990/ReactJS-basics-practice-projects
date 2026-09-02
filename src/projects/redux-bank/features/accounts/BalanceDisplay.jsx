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
  return <div className={styles.balance}>{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
