function AIBot() {
  return (
    <div style={styles.container}>
      <h1>AI Bot 🤖</h1>

      <p>
        This is my advanced AI Bot project built with modern technologies.
      </p>

      <h2>💡 Features</h2>
      <ul>
        <li>Real-time interaction</li>
        <li>Smart AI responses</li>
        <li>Hand gesture recognition</li>
        <li>Voice control (future upgrade)</li>
      </ul>

      <h2>⚙️ Technologies Used</h2>
      <ul>
        <li>Python</li>
        <li>TensorFlow / OpenCV</li>
        <li>React (Frontend)</li>
      </ul>

      <h2>🚀 Future Improvements</h2>
      <p>
        Add voice assistant, better UI, and cloud integration.
      </p>

      <button onClick={() => window.history.back()} style={styles.button}>
        ⬅ Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "white",
    padding: "40px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "cyan",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default AIBot;