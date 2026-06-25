import { useState } from "react";
import styles from "./Tabbed.module.css";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function TabsComponent() {
  return (
    <main className={styles.tabsContainer}>
      <Tabbed content={content} />
    </main>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.tabs}>
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content[activeTab]} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={`${styles.tab} ${activeTab === num ? styles.active : ""}`}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handleTriple() {
    setLikes((likes) => likes + 3);
  }

  function handleUndo() {
    setLikes(0);
    setShowDetails(true);
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className={styles.content}>
      <h2>{item.summary}</h2>

      {showDetails && <p>{item.details}</p>}

      <div className={styles.actions}>
        <button
          className={styles.primaryBtn}
          onClick={() => setShowDetails((show) => !show)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        <div className={styles.likes}>
          <span>{likes} ❤️</span>

          <button onClick={handleInc}>+</button>

          <button onClick={handleTriple}>+++</button>
        </div>
      </div>

      <div className={styles.undo}>
        <button onClick={handleUndo}>Undo</button>

        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className={styles.content}>
      <h2>I'm a DIFFERENT tab 💣💥</h2>

      <p>
        This is a different component. When React switches to it, the previous
        component is removed from the UI, so all of its state is reset.
      </p>
    </div>
  );
}
