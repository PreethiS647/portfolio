import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

/* ================= ROAD ================= */
function Road() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7, -3, 0]}>
      <planeGeometry args={[10, 70]} />
      <meshStandardMaterial color="#0a636d" />
    </mesh>
  );
}

/* ================= ROBOT ================= */
function Robot() {
  const ref = useRef();
  const leftArm = useRef();
  const rightArm = useRef();
  const leftLeg = useRef();
  const rightLeg = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.position.z = -((t * 1.5) % 40);
    ref.current.position.x = 7 + Math.sin(t) * 0.3;
    ref.current.position.y = -0.8;

    if (leftArm.current && rightArm.current) {
      leftArm.current.rotation.x = Math.sin(t * 4) * 0.6;
      rightArm.current.rotation.x = Math.sin(t * 4 + Math.PI) * 0.6;
    }

    if (leftLeg.current && rightLeg.current) {
      leftLeg.current.rotation.x = Math.sin(t * 6) * 0.8;
      rightLeg.current.rotation.x = Math.sin(t * 6 + Math.PI) * 0.8;
    }
  });

  return (
    <group ref={ref} scale={1.5}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#fff" />
      </mesh>

      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="#cfd6dd" />
      </mesh>

      <mesh position={[-0.3, 2.05, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial emissive="#00e5ff" emissiveIntensity={2} />
      </mesh>

      <mesh position={[0.3, 2.05, 0.6]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial emissive="#1e90ff" emissiveIntensity={2} />
      </mesh>

      <mesh ref={leftArm} position={[-1.4, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.4]} />
        <meshStandardMaterial color="#cfd6dd" />
      </mesh>

      <mesh ref={rightArm} position={[1.4, 0, 0]}>
        <boxGeometry args={[0.4, 1.5, 0.4]} />
        <meshStandardMaterial color="#cfd6dd" />
      </mesh>

      <mesh ref={leftLeg} position={[-0.5, -2, 0]}>
        <boxGeometry args={[0.5, 1.6, 0.5]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      <mesh ref={rightLeg} position={[0.5, -2, 0]}>
        <boxGeometry args={[0.5, 1.6, 0.5]} />
        <meshStandardMaterial color="#888" />
      </mesh>
    </group>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState("");

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function getCardStyle(name) {
    const isActive = activeCard === name;

    return {
      ...styles.card,

      background: isActive
        ? "rgba(0,229,255,0.25)"
        : "rgba(0,0,0,0.4)",

      boxShadow: isActive
        ? "0 0 30px #00e5ff, inset 0 0 15px #00e5ff"
        : "0 0 10px rgba(0,229,255,0.2)",

      transform: isActive ? "scale(1.05)" : "scale(1)",
      transition: "all 0.2s ease",
    };
  }

  return (
    <div style={styles.container}>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("about")}>About</span>
        <span onClick={() => scrollTo("skills")}>Skills</span>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </div>

      {/* HERO */}
      <section id="home" style={styles.heroSection}>
        <Canvas camera={{ position: [8, 4, 10] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} />
          <Road />
          <Robot />
        </Canvas>

        <div style={styles.heroText}>
          <img src={profile} style={styles.profile} />
          <h1 style={{ color: "#00e5ff" }}>Hi, I'm Preethi ⚡</h1>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.section}>
        <div
          style={getCardStyle("about")}
          onMouseEnter={() => setActiveCard("about")}
          onMouseLeave={() => setActiveCard("")}
          onClick={() => navigate("/about")}
        >
          <h2>About Me 👩‍💻</h2>
          <p>"Code is my paint 🎨"</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <div
          style={getCardStyle("skills")}
          onMouseEnter={() => setActiveCard("skills")}
          onMouseLeave={() => setActiveCard("")}
          onClick={() => navigate("/skills")}
        >
          <h2>Skills 🚀</h2>
          <p>"Practice builds power 💡"</p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <div
          style={getCardStyle("projects")}
          onMouseEnter={() => setActiveCard("projects")}
          onMouseLeave={() => setActiveCard("")}
          onClick={() => navigate("/projects")}
        >
          <h2>Projects 💻</h2>
          <p>"Build. Break. Learn 🔥"</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <div
          style={getCardStyle("contact")}
          onMouseEnter={() => setActiveCard("contact")}
          onMouseLeave={() => setActiveCard("")}
          onClick={() => navigate("/contact")}
        >
          <h2>Contact 📩</h2>
          <p>"Let’s connect 🤝"</p>
        </div>
      </section>

    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  container: {
    background: "#000",
    color: "#fff",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "15px",
    background: "rgba(0,0,0,0.6)",
    color: "#00e5ff",
    fontWeight: "bold",
    zIndex: 10,
    cursor: "pointer",
    fontSize: "18px",
  },

  heroSection: {
    height: "100vh",
    position: "relative",
  },

  heroText: {
    position: "absolute",
    top: "30%",
    left: "10%",
  },

  profile: {
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  border: "2px solid #00e5ff",
  boxShadow: "0 0 25px #00e5ff",
  objectFit: "cover",
},

  section: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "650px",
    padding: "30px",
    borderRadius: "15px",
    border: "2px solid #00e5ff",
    textAlign: "center",
    cursor: "pointer",
  },
};