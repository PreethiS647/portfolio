import whatsapp from "../assets/icons/whatsapp.png";
import instagram from "../assets/icons/instagram.png";
import youtube from "../assets/icons/youtube.png";
import chrome from "../assets/icons/chrome.png";

export default function ContactPage() {
  const icons = [
    { src: whatsapp, top: "10%", left: "15%", scale: 1.4, delay: "0s" },
    { src: instagram, top: "25%", left: "70%", scale: 1.1, delay: "1s" },
    { src: youtube, top: "60%", left: "20%", scale: 1.5, delay: "2s" },
    { src: chrome, top: "75%", left: "80%", scale: 1.2, delay: "3s" },
  ];

  return (
    <div style={styles.page}>

      {/* 3D BACKGROUND ICONS */}
      <div style={styles.bg}>
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt="icon"
            style={{
              ...styles.icon,
              top: icon.top,
              left: icon.left,
              transform: `scale(${icon.scale})`,
              animationDelay: icon.delay,
              opacity: 0.6,
              filter: "drop-shadow(0 0 20px rgba(0,229,255,0.9))",
            }}
          />
        ))}
      </div>

      {/* CONTACT CARD */}
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Me 📩</h1>

        <p style={styles.subtitle}>
          Let’s connect and build something amazing 🚀
        </p>

        <div style={styles.infoBox}>
          <p>📧 Email: preethisiva826@example.com</p>
          <p>📍 Location: Chennai, India</p>
          <p>🎓 Saveetha Engineering College</p>
        </div>

        {/* SOCIAL LINKS (FIXED) */}
        <div style={styles.buttons}>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            GitHub
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            Instagram
          </a>

        </div>

        <p style={styles.note}>
          “Open for internships & AI projects 💡”
        </p>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes float3D {
          0% { transform: translateY(0px) rotateY(0deg); }
          50% { transform: translateY(-40px) rotateY(20deg); }
          100% { transform: translateY(0px) rotateY(0deg); }
        }
      `}</style>

    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    height: "100vh",
    background: "radial-gradient(circle at top, #001a2a, #000)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    color: "#fff",
  },

  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  },

  icon: {
    position: "absolute",
    width: "100px",
    height: "100px",
    objectFit: "contain",
    animation: "float3D 5s infinite ease-in-out",
  },

  card: {
    width: "700px",
    padding: "45px",
    borderRadius: "20px",
    border: "2px solid #00e5ff",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(15px)",
    textAlign: "center",
    boxShadow: "0 0 50px rgba(0,229,255,0.35)",
    zIndex: 2,
    position: "relative",
  },

  title: {
    color: "#00e5ff",
    fontSize: "40px",
    textShadow: "0 0 15px #00e5ff",
  },

  subtitle: {
    color: "#ddd",
    marginBottom: "20px",
  },

  infoBox: {
    textAlign: "left",
    margin: "20px 0",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid rgba(0,229,255,0.5)",
    background: "rgba(0,229,255,0.08)",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  link: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #00e5ff",
    color: "#00e5ff",
    textDecoration: "none",
    transition: "0.3s",
  },

  note: {
    marginTop: "20px",
    color: "#bbb",
  },
};