import { useState } from "react";
import styles from "./WorkoutTracker.module.css";

const initialData = [
  {
    id: 1,
    name: "Squat",
    sets: 4,
    reps: 10,
    completed: false,
  },
  {
    id: 2,
    name: "RDL",
    sets: 4,
    reps: 10,
    completed: false,
  },
  {
    id: 3,
    name: "Hip-Thrusts",
    sets: 4,
    reps: 10,
    completed: true,
  },
];

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState(initialData);
  const [liveSearch, setLiveSearch] = useState("");
  const [sort, setSort] = useState("option");

  function handleIsCompleted(id) {
    setWorkouts((workouts) =>
      workouts.map((workout) =>
        workout.id === id
          ? { ...workout, completed: !workout.completed }
          : workout,
      ),
    );
  }
  function handleStoreWorkout(workout) {
    setWorkouts((workouts) => [...workouts, workout]);
  }

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(liveSearch.toLowerCase()),
  );

  let sortedWorkouts = filteredWorkouts.slice();

  if (sort === "completed") {
    sortedWorkouts.sort((a, b) => b.completed - a.completed);
  }

  if (sort === "not-completed") {
    sortedWorkouts.sort((a, b) => a.completed - b.completed);
  }

  return (
    <div className={styles.container}>
      <WorkoutForm onHandleWorkout={handleStoreWorkout} />
      <SearchBar search={liveSearch} setSearch={setLiveSearch} />
      <SortWorkouts sort={sort} setSort={setSort} />
      <Stats workouts={sortedWorkouts} />
      <WorkoutList
        workouts={sortedWorkouts}
        onHandleIsCompleted={handleIsCompleted}
      />
    </div>
  );
}

function WorkoutForm({ onHandleWorkout }) {
  const [name, setName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  function handleSubmitWorkout(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newWorkout = { id, name, sets, reps, completed: false };
    onHandleWorkout(newWorkout);

    setName("");
    setSets("");
    setReps("");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmitWorkout}>
      <p>Input New Workout</p>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="sets"
        value={sets}
        onChange={(e) => setSets(+e.target.value)}
      />
      <input
        type="number"
        placeholder="reps"
        value={reps}
        onChange={(e) => setReps(+e.target.value)}
      />
      <button>add workout</button>
    </form>
  );
}

function WorkoutList({ workouts, onHandleIsCompleted }) {
  return (
    <ul className={styles.workoutList}>
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onHandleIsCompleted={onHandleIsCompleted}
        />
      ))}
    </ul>
  );
}

function WorkoutItem({ workout, onHandleIsCompleted }) {
  return (
    <li
      className={`${styles.workoutCard} ${
        workout.completed ? styles.completed : ""
      }`}
    >
      <h3>{workout.name}</h3>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <button
        className={styles.actionButton}
        onClick={() => onHandleIsCompleted(workout.id)}
      >
        {workout.completed ? "Completed ✓" : "Finish"}
      </button>
    </li>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search workout..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

function SortWorkouts({ sort, setSort }) {
  return (
    <select
      className={styles.sortSelect}
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="option">Option</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Incomplete</option>
    </select>
  );
}

function Stats({ workouts }) {
  const totalWorkouts = workouts.length;
  const completedWorkouts = workouts.filter(
    (workout) => workout.completed,
  ).length;
  const remainingWorkouts = totalWorkouts - completedWorkouts;

  return (
    <div className={styles.stats}>
      <p>Total Workouts: {totalWorkouts}</p>
      <p>Completed: {completedWorkouts}</p>
      <p>Remaining: {remainingWorkouts}</p>
    </div>
  );
}
