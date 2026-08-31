import { memo } from "react";
import styles from "./WorkoutTimer.module.css";

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className={styles.soundButton}
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
