import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

/* ================= LAPTOP ================= */
function Laptop({ position, speed, screenColor }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;

    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.25;
    ref.current.rotation.y = Math.sin(t * speed * 0.3) * 0.2;
  });

  return (
    <group ref={ref} position={position}>

      {/* LAPTOP BASE */}
      <mesh>
        <boxGeometry args={[2.4, 0.15, 1.6]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* KEYBOARD */}
      <group position={[0, 0.08, 0]}>
        {Array.from({ length: 20 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              (i % 5 - 2) * 0.35,
              0,
              (Math.floor(i / 5) - 2) * 0.25,
            ]}
          >
            <boxGeometry args={[0.25, 0.02, 0.18]} />
            <meshStandardMaterial color="#766666" />
          </mesh>
        ))}
      </group>

      {/* 🔥 BLACK SCREEN FRAME (BEZEL) */}
      <mesh position={[0, 0.9, -0.7]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[2.35, 1.35, 0.15]} />
        <meshStandardMaterial color="#866565" />
      </mesh>

      {/* SCREEN DISPLAY */}
      <mesh position={[0, 0.9, -0.65]} rotation={[-0.35, 0, 0]}>
        <planeGeometry args={[2.05, 1.15]} />
        <meshStandardMaterial
          color={screenColor}
          emissive={screenColor}
          emissiveIntensity={0.6}
        />
      </mesh>

    </group>
  );
}

/* ================= PAGE ================= */
export default function ProjectsPage() {
  return (
    <div style={styles.page}>

      {/* 3D SCENE */}
      <div style={styles.canvas}>
        <Canvas camera={{ position: [0, 2, 10] }}>

          {/* LIGHTS */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 10, 5]} intensity={2} />

          {/* LEFT → DASHBOARD */}
          <Laptop
            position={[-6, 0, 4]}
            speed={1}
            screenColor="#00e5ff"
          />

         
  

          {/* RIGHT → HAND DETECTION */}
          <Laptop
            position={[4, 0, 6]}
            speed={1.1}
            screenColor="#6a8e7d"
          />

        </Canvas>
      </div>

      {/* UI CARD */}
      <div style={styles.card}>
        <h1 style={styles.title}>Projects 💻</h1>

        <p style={styles.subtitle}>
          AI + Data Science + Web Development Projects
        </p>

        <div style={styles.grid}>
          <div style={styles.project}>
            🤖 Gesture Control System
            <p>Hand tracking + volume control (OpenCV + MediaPipe)</p>
          </div>

          <div style={styles.project}>
            📊 AI Dashboard
            <p>Power BI + ML analytics dashboard</p>
          </div>

          <div style={styles.project}>
            🌐 Portfolio Website
            <p>3D React portfolio with cyber UI</p>
          </div>
        </div>

        <p style={styles.note}>
          “Build. Break. Learn. Repeat 🚀”
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    height: "100vh",
    background: "#000",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  canvas: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },

  card: {
    zIndex: 2,
    width: "850px",
    padding: "30px",
    borderRadius: "15px",
    border: "1px solid #00e5ff",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    textAlign: "center",
  },

  title: {
    color: "#00e5ff",
    fontSize: "32px",
  },

  subtitle: {
    color: "#ccc",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
  },

  project: {
    padding: "20px",
    border: "1px solid #00e5ff",
    borderRadius: "12px",
    background: "rgba(0,229,255,0.05)",
  },

  note: {
    marginTop: "20px",
    color: "#aaa",
    fontStyle: "italic",
  },
};