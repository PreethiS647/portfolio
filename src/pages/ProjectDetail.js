import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "50px" }}>

      <Link to="/projects" style={{ color: "#00e5ff" }}>
        ← Back to Projects
      </Link>

      <h1 style={{ fontSize: "60px", color: "#00e5ff" }}>
        Project: {id}
      </h1>

      <p style={{ fontSize: "26px", color: "white" }}>
        This is a detailed Amazon-style project page with full explanation, features, and AI logic.
      </p>

    </div>
  );
}