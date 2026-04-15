import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex gap-6 text-cyan-300 p-5 fixed top-0 w-full bg-black">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}