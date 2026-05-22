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
        <section className={styles.hero}>
          <div>
            <p className={styles.kicker}>Frontend Experiments Archive</p>

            <h1 className={styles.heading}>
              React
              <br />
              Practice
              <br />
              Projects
            </h1>
          </div>

          <div className={styles.heroRight}>
            <p className={styles.description}>
              A growing collection of React projects exploring fundamentals,
              hooks, UI systems, interaction design, async patterns, and
              creative frontend experimentation.
            </p>

            <input
              className={styles.input}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search archive..."
            />
          </div>
        </section>

        <section className={styles.grid}>
          {filtered.map((p) => (
            <Link key={p.id} to={`/projects/${p.slug}`} className={styles.card}>
              <img className={styles.thumb} src={p.img} alt={p.title} />

              <div className={styles.body}>
                <p className={styles.kickerSmall}>{p.category}</p>

                <h3 className={styles.title}>{p.title}</h3>

                <p className={styles.meta}>{p.learn}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
