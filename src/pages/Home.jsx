import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: 1,
    slug: "counter-click-tracker",
    title: "Counter & Click Tracker",
    category: "Basics",
    learn: "JSX, components, props, useState, events",
    skills: "state management, event handling",
    img: "https://via.placeholder.com/640x360?text=Counter",
  },
  {
    id: 2,
    slug: "todo-app",
    title: "Todo App",
    category: "Core Fundamentals",
    learn: "CRUD with state, lists, keys, conditional rendering",
    skills: "arrays of objects, controlled inputs",
    img: "https://via.placeholder.com/640x360?text=Todo",
  },
];

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
