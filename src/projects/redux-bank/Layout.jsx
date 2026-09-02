import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import styles from "./ReduxBank.module.css";
import { useSelector } from "react-redux";

export default function Layout() {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <div className={styles.section}>
          <CreateCustomer />
        </div>
      ) : (
        <>
          <div className={styles.section}>
            <Customer />
          </div>

          <div className={styles.section}>
            <AccountOperations />
          </div>

          <BalanceDisplay />
        </>
      )}
    </div>
  );
}
