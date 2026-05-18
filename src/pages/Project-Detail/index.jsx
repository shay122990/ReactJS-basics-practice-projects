import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

import Nav from "../../components/Nav";

const modules = import.meta.glob("../../projects/*/index.jsx");

export default function ProjectDetail() {
  const { slug } = useParams();

  const importer = modules[`../../projects/${slug}/index.jsx`];

  if (!importer) {
    return <h1>Project not found.</h1>;
  }

  const Project = lazy(importer);

  return (
    <>
      <Nav />

      <Suspense fallback={<p>Loading...</p>}>
        <Project />
      </Suspense>
    </>
  );
}
