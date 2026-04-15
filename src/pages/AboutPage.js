import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

/* ================= ROBOT ================= */
function Robot() {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    // smoother floating + less shaking
    ref.current.position.x = Math.sin(t * 0.8) * 0.6;
    ref.current.rotation.y = Math.sin(t * 0.4) * 0.5;
    ref.current.position.y = -1.2;
  });

  return (
    <group ref={ref} scale={1.6}>

      {/* BODY */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#f2f2f2" metalness={0.4} roughness={0.3} />
      </mesh>

      {/* HEAD */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>

      {/* LEFT ARM */}
      <mesh position={[-1.1, 0.6, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="#c7c2c4" />
      </mesh>

      {/* RIGHT ARM */}
      <mesh position={[0.9, 0.6, 0]}>
        <boxGeometry args={[0.4, 1.4, 0.4]} />
        <meshStandardMaterial color="#a09b9b" />
      </mesh>

      {/* LEFT EYE */}
      <mesh position={[-0.35, 2.05, 0.7]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#00e5ff"
          emissive="#00e5ff"
          emissiveIntensity={6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* RIGHT EYE */}
      <mesh position={[0.35, 2.05, 0.7]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#1e90ff"
          emissive="#1e90ff"
          emissiveIntensity={6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

    </group>
  );
}

/* ================= ABOUT PAGE ================= */
export default function AboutPage() {
  return (
    <div style={styles.page}>

      {/* 🌌 3D BACKGROUND */}
      <Canvas camera={{ position: [0, 1.8, 5] }} style={styles.canvas}>

        {/* LIGHTS (IMPROVED BALANCE) */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={2} />
        <pointLight position={[0, 2, 3]} intensity={1} />

        <Robot />
      </Canvas>

      {/* CONTENT */}
      <div style={styles.card}>
        <h1 style={styles.title}>About Me 👩‍💻</h1>

        <p style={styles.text}>
          Hi, I’m Preethi ⚡, an AI & Data Science student passionate about building smart and creative applications.
        </p>

        <div style={styles.list}>
          <p>🚀 Frontend Developer (React)</p>
          <p>🤖 AI & ML Enthusiast</p>
          <p>💡 UI/UX Designer</p>
          <p>⚡ 3D Web Developer (Three.js)</p>
          <p>🧠 Problem Solver</p>
          <p>🎯 Goal: AI Full Stack Engineer</p>
        </div>
      </div>

    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    height: "100vh",
    background: "radial-gradient(circle, #001a1f, #000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },

  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  card: {
    width: "750px",
    padding: "30px",
    borderRadius: "15px",
    border: "2px solid #00e5ff",
    boxShadow: "0 0 25px #00e5ff",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    textAlign: "center",
    zIndex: 2,
  },

  title: {
    color: "#00e5ff",
    marginBottom: "20px",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.6",
  },

  list: {
    marginTop: "20px",
    textAlign: "left",
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
};