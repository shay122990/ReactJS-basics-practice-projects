import { useEffect, useMemo, useState } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import styles from "./WorkoutTimer.module.css";

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function WorkoutTimer() {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  // time.slice(-2) takes the last 2 characters of the string stored in time
  const partOfDay = time.slice(-2);

  const workouts = useMemo(
    () => [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ],
    [partOfDay],
  );

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Workout timer</h1>

      <time className={styles.time}>For your workout on {time}</time>

      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />

      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default WorkoutTimer;
