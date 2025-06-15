import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useState } from 'react';

const BackgroundParticles = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,        interactivity: {
          detectsOn: "window",
          events: {            onClick: {
              enable: true,
              mode: ["push", "bubble"],
            },            onHover: {
              enable: true,
              mode: ["grab", "connect"],
            },
            resize: {
              enable: true,
            },
          },          modes: {
            push: {
              quantity: 4,
            },            grab: {
              distance: 250,
              links: {
                opacity: 1,
                color: "#ffffff",
              },
            },            connect: {
              distance: 250,
              links: {
                opacity: 0.8,
              },
              radius: 200,
            },            bubble: {
              distance: 250,
              size: 8,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },          links: {
            color: "#ffffff",
            distance: 180,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'auto'
      }}
    />
  );
};

export default BackgroundParticles;
