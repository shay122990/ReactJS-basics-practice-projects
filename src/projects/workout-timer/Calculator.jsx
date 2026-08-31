import { memo, useEffect, useState } from "react";
import clickSound from "./ClickSound.m4a";
import styles from "./WorkoutTimer.module.css";

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);

  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const playSound = function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      sound.play();
    };

    playSound();
  }, [duration, allowSound]);

  useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, sets, speed, durationBreak]);

  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  function handleInc() {
    setDuration((duration) => Math.floor(duration) + 1);
  }

  function handleDec() {
    setDuration((duration) => (duration > 1 ? Math.ceil(duration) - 1 : 0));
  }

  return (
    <>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Type of workout</label>

          <select
            className={styles.select}
            value={number}
            onChange={(e) => setNumber(+e.target.value)}
          >
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>How many sets?</label>

          <input
            className={styles.range}
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />

          <span className={styles.value}>{sets}</span>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>How fast are you?</label>

          <input
            className={styles.range}
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />

          <span className={styles.value}>{speed} sec/exercise</span>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Break length</label>

          <input
            className={styles.range}
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />

          <span className={styles.value}>{durationBreak} minutes/break</span>
        </div>
      </form>

      <section className={styles.timer}>
        <button className={styles.timerButton} onClick={handleDec}>
          –
        </button>

        <p className={styles.duration}>
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </p>

        <button className={styles.timerButton} onClick={handleInc}>
          +
        </button>
      </section>
    </>
  );
}

export default memo(Calculator);
