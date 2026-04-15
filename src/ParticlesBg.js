import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      init={particlesInit}
      options={{
        fullScreen: false,
        particles: {
          number: { value: 60 },
          color: { value: "#66d9ff" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#66d9ff",
            distance: 150,
          },
        },
      }}
    />
  );
}