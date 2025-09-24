import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function Home() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const n = q.toLowerCase();
    return PROJECTS.filter((p) =>
      [p.title, p.category, p.learn, p.skills]
        .join(" ")
        .toLowerCase()
        .includes(n)
    );
  }, [q]);

  return (
    <div className="container">
      <h1>React Practice Projects</h1>
      <input
        className="input"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search projects…"
      />
      <div className="grid">
        {filtered.map((p) => (
          <Link key={p.id} to={`/projects/${p.slug}`} className="card">
            <img className="thumb" src={p.img} alt={p.title} />
            <div className="body">
              <div className="kicker">{p.category}</div>
              <h3 className="title">{p.title}</h3>
              <p className="meta">
                <b>Learn:</b> {p.learn}
              </p>
              <p className="meta">
                <b>Skills:</b> {p.skills}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
