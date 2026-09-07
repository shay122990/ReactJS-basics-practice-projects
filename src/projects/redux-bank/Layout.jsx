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
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>✦</div>
          <div>
            <div className={styles.bankName}>REDUX-BANK</div>
            <div className={styles.bankSubtitle}>DIGITAL BANK</div>
          </div>
        </div>

        <div className={styles.secure}>
          <span>🔒</span> Secure banking
        </div>
      </header>

      <main>
        {!fullName ? (
          <div className={styles.welcome}>
            <span className={styles.eyebrow}>WELCOME TO REDUX-BANK</span>
            <h1>Banking, made beautifully simple.</h1>
            <p>Create your account to get started.</p>

            <div className={styles.section}>
              <CreateCustomer />
            </div>
          </div>
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </main>
    </div>
  );
}
