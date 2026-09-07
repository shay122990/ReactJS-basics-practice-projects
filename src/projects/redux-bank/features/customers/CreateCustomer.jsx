import { useState } from "react";
import styles from "../../ReduxBank.module.css";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <div className={styles.formHeader}>
        <div className={styles.formIcon}>👤</div>
        <div>
          <h2>Create your account</h2>
          <p>Enter your details to open your personal account.</p>
        </div>
      </div>

      <div className={styles.customerForm}>
        <div>
          <label>Full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder="Enter your ID"
          />
        </div>

        <button onClick={handleClick}>Open account →</button>
      </div>
    </div>
  );
}

export default CreateCustomer;
