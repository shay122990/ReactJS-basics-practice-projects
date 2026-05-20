import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { PROJECTS } from "../../data/projects";

import styles from "./Home.module.css";

export default function Home() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const n = q.toLowerCase();

    return PROJECTS.filter((p) =>
      [p.title, p.category, p.learn, p.skills]
        .join(" ")
        .toLowerCase()
        .includes(n),
    );
  }, [q]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>React Practice Projects</h1>

          <input
            className={styles.input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
          />
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`} className={styles.card}>
              <img className={styles.thumb} src={p.img} alt={p.title} />

              <div className={styles.body}>
                <div className={styles.kicker}>{p.category}</div>

                <h3 className={styles.title}>{p.title}</h3>

                <p className={styles.meta}>
                  <b>Learn:</b> {p.learn}
                </p>

                <p className={styles.meta}>
                  <b>Skills:</b> {p.skills}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
