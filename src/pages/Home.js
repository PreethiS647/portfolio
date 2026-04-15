import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

/* ================= AI BACKGROUND ================= */
function AIBg() {
  return <div style={styles.aiBg}></div>;
}

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

      border: "2px solid #00e5ff",

      transition: "all 0.3s ease",

      boxShadow: isActive
        ? "0 0 60px #00e5ff, 0 0 120px rgba(0,229,255,0.8), inset 0 0 30px #00e5ff"
        : "0 0 25px rgba(0,229,255,0.4), inset 0 0 10px rgba(0,229,255,0.2)",

      background: isActive
        ? "rgba(0,229,255,0.15)"
        : "rgba(0,0,0,0.4)",

      transform: isActive ? "scale(1.08)" : "scale(1)",
    };
  }

  return (
    <div style={styles.container}>

      {/* AI BACKGROUND */}
      <AIBg />

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

          <h1 style={{ color: "#00e5ff", fontSize: "38px" }}>
            Hi, I'm Preethi ⚡
          </h1>

          <h3 style={{ color: "#aaa", fontSize: "18px" }}>
            Data Analyst • Saveetha Engineering College
          </h3>
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
         <h2 style={styles.cardTitle}>About Me 👩‍💻</h2>
<p style={styles.cardText}>"Code is my paint 🎨"</p>
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
          <h2 style={styles.cardTitle}>Skills 🚀</h2>
<p style={styles.cardText}>"Practice builds power 💡"</p>
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
        <h2 style={styles.cardTitle}>Projects 💻</h2>
<p style={styles.cardText}>"Build. Break. Learn 🔥"</p>
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
          <h2 style={styles.cardTitle}>Contact 📩</h2>
<p style={styles.cardText}>"Let’s connect 🤝"</p>
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
    position: "relative",
    overflow: "hidden",
  },

  aiBg: {
    position: "fixed",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at 20% 20%, rgba(0,229,255,0.15), transparent 40%)," +
      "radial-gradient(circle at 80% 30%, rgba(0,150,255,0.12), transparent 50%)," +
      "radial-gradient(circle at 50% 80%, rgba(0,255,200,0.1), transparent 50%)",
    animation: "floatBg 6s infinite ease-in-out",
    zIndex: 0,
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "25px",
    background: "rgba(81, 68, 68, 0.6)",
    color: "#00e5ff",
    fontWeight: "bold",
    fontSize: "20px",
    zIndex: 10,
    cursor: "pointer",
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
    width: "1150px",
    padding: "50px",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
  },
  cardTitle: {
  fontSize: "40px",
},

cardText: {
  fontSize: "20px",
},
};