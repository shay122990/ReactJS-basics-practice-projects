import { useState } from "react";

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
    completed: false,
  },
];
// App
// ├── WorkoutForm
// ├── SearchBar
// ├── SortControls
// ├── Stats
// └── WorkoutList
//     └── WorkoutItem

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState(initialData);
  const [liveSearch, setLiveSearch] = useState("");

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

  // search live input
  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(liveSearch.toLowerCase()),
  );

  return (
    <div className="App">
      <WorkoutForm onHandleWorkout={handleStoreWorkout} />
      <SearchBar value={liveSearch} setSearch={setLiveSearch} />
      <WorkoutList
        workouts={filteredWorkouts}
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
    <form className="form" onSubmit={handleSubmitWorkout}>
      <p>Input New Wokout</p>
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
    <ul className="workout-list">
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
    <li className={`workout ${workout.completed ? "completed" : ""}`}>
      <p>Name: {workout.name}</p>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>

      <button onClick={() => onHandleIsCompleted(workout.id)}>
        {workout.completed ? "Completed ✓" : "Finish"}
      </button>
    </li>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <>
      <input
        type="text"
        placeholder="search workout name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

// TODO
// function SortWorkout(){}
// function Stats(){}
