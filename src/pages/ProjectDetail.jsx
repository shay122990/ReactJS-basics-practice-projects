import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const registry = {
  "counter-click-tracker": lazy(() =>
    import("../projects/counter-click-tracker/CounterApp.jsx")
  ),
  "todo-app": lazy(() => import("../projects/todo/ToDoApp.jsx")),
  "get-advice": lazy(() => import("../projects/get-advice/GetAdvice.jsx")),
  "color-change": lazy(() =>
    import("../projects/color-change/ColorChange.jsx")
  ),
  calculator: lazy(() => import("../projects/calculator/Calculator.jsx")),
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const Impl = registry[slug];

  if (!Impl) return <div style={{ padding: 24 }}>Project not found.</div>;

  return (
    <div style={{ padding: 24 }}>
      <Suspense fallback={<p>Loading…</p>}>
        <Impl />
      </Suspense>
    </div>
  );
}
