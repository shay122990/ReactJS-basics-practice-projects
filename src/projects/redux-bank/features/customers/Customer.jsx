import { useSelector } from "react-redux";
import styles from "../../ReduxBank.module.css";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <section className={styles.customerCard}>
      <div>
        <span className={styles.eyebrow}>PERSONAL ACCOUNT</span>
        <h1>Good to see you, {customer.split(" ")[0]} 👋</h1>
        <p>Here’s your financial overview.</p>
      </div>

      <div className={styles.avatar}>{customer.charAt(0).toUpperCase()}</div>
    </section>
  );
}

export default Customer;
