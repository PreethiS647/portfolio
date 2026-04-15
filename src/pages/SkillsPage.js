import { useEffect, useRef } from "react";

export default function SkillsPage() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#00e5ff";

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.page}>

      {/* PARTICLES */}
      <canvas ref={canvasRef} style={styles.canvas}></canvas>

      {/* HEADER */}
      <div style={styles.header}>
        <h1 style={styles.title}>My Skills ⚡</h1>
        <p style={styles.subtitle}>
          Technologies I am learning and building with 🚀
        </p>
      </div>

      {/* CARDS */}
      <div style={styles.grid}>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Frontend</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React JS</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Backend</h2>
          <p>Node JS</p>
          <p>Express JS</p>
          <p>APIs</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Programming</h2>
          <p>Python</p>
          <p>Java</p>
        </div>

        {/* ⭐ UPDATED DATA / BI CARD */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Data & Analytics</h2>
          <p>Excel</p>
          <p>Power BI</p>
          <p>Tableau</p>
          <p>Machine Learning</p>
          <p>Data Analysis</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>3D / UI</h2>
          <p>Three.js</p>
          <p>React Three Fiber</p>
          <p>UI Design</p>
        </div>

      </div>

      <p style={styles.note}>
        “Learning step by step, building real projects 💡”
      </p>

    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    paddingTop: "100px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },

  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },

  header: {
    position: "relative",
    zIndex: 2,
    marginBottom: "20px",
  },

  title: {
    color: "#00e5ff",
    fontSize: "44px",
    textShadow: "0 0 15px #00e5ff",
  },

  subtitle: {
    color: "#aaa",
    fontSize: "18px",
  },

  grid: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    padding: "30px 100px",
  },

  card: {
    border: "2px solid #00e5ff",
    borderRadius: "15px",
    padding: "20px",
    background: "rgba(0,229,255,0.05)",
    boxShadow:
      "0 0 10px #00e5ff, 0 0 20px #00e5ff, inset 0 0 10px #00e5ff",
    cursor: "pointer",
    textAlign: "left",
  },

  cardTitle: {
    fontSize: "22px",
    color: "#00e5ff",
    marginBottom: "10px",
  },

  note: {
    position: "relative",
    zIndex: 2,
    marginTop: "35px",
    color: "#888",
    fontStyle: "italic",
  },
};