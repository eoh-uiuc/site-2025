import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function HomeVideo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const elements = [
    {
      src: "/assets/gifs/satellite.gif",
      size: `${windowWidth / 1.8}px`,
      top: "95%",
      left: "85%",
      animation: "float infinite",
      zIndex: "0"
    },
    {
      src: "/assets/gifs/beaker.gif",
      size: `${windowWidth / 2}px`,
      top: "40%",
      left: "80%",
      animation: "float infinite",
      zIndex: "0",
    },
    {
      src: "/assets/gifs/breadboard animation.gif",
      size: `${windowWidth / 3}px`,
      top: "-25%",
      left: "10%",
      animation: "float 3s ease-in-out infinite",
    },
    {
      src: "/assets/gifs/compass.gif",
      size: `${windowWidth / 2}px`,
      top: "25%",
      left: "90%",
      animation: "float infinite",
      zIndex: "0",
    },
    {
      src: "/assets/gifs/compass needle.png",
      size: `${windowWidth / 3}px`,
      top: "25%",
      left: "100%",
      animation: "spin 3s linear infinite",
    },
    {
      src: "/assets/logo/magnifier.png",
      size: `${windowWidth / 8}px`,
      top: "81%",
      left: "30%",
      zIndex: 3,
      animation: "float 5s ease-in-out infinite",
    },
    {
      src: "/assets/logo/moon.png",
      size: `${windowWidth / 20}px`,
      top: "50%",
      left: "15%",
      animation: "float 5s ease-in-out infinite",
    },
    {
      src: "/assets/logo/newrocket.png",
      size: `${windowWidth / 5}px`,
      top: "50%",
      left: "0%",
      zIndex: 1,
      transform: "translate(-10%, -20%)",
      animation: "fly-across 4s linear forwards",
      zIndex: "0",
    },
    {
      src: "/assets/logo/windmill.png",
      size: `${windowWidth / 7}px`,
      top: "70%",
      left: "6%",
      zIndex: 3,
    },
    {
      src: "/assets/logo/world.png",
      size: `${windowWidth / 4.5}px`,
      top: "75%",
      left: "-10%",
      animation: "float 8s ease-in-out infinite",
      zIndex: 1,
    },
  ];

  // Filter elements based on screen size (only fan and beaker for small screens)
  const filteredElements = windowWidth < 768
    ? elements.filter((element) => element.src === "/assets/logo/newrocket.png" || element.src === "/assets/gifs/compass.gif" || element.src === "/assets/gifs/satellite.gif" || element.src === "/assets/logo/world.png")
    : elements;

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-white to-blue-100 overflow-hidden"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(to right, #ebf4ff, #ffffff, #cce4ff)",
      }}
    >
      {/* Scattered Elements */}
      <div className="scattered-elements">
        {filteredElements.map((element, index) => (
          <img
            key={index}
            src={element.src}
            alt={`Decorative Element ${index + 1}`}
            style={{
              width: element.size,
              height: "auto",
              position: "absolute",
              top: element.top,
              left: element.left,
              transform: element.transform || "translate(-50%, -50%)",
              animation: element.animation,
              zIndex: 1,
              filter: "drop-shadow(0 8px 16px rgba(255, 192, 203, 0.4))",
            }}
          />
        ))}
      </div>

      {/* Centered Title Area */}
      <header
        style={{
          position: "relative",
          textAlign: "center",
          zIndex: 0,
          padding: "2rem 1rem",
        }}
      >
        <h1
          className="title"
          style={{
            fontFamily: "'Norwester', sans-serif",
            fontSize: windowWidth < 768 ? "2rem" : "2.5rem",
            fontWeight: "800",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          Engineering Open House
        </h1>
        <p
          className="subtitle"
          style={{
            fontSize: windowWidth < 768 ? "1rem" : "1.25rem",
            color: "#666",
            fontWeight: "500",
            marginBottom: "1rem",
          }}
        >
          at the <strong>University of Illinois Urbana-Champaign</strong> brings
        </p>
        <h2
          className="highlight"
          style={{
            fontFamily: "'Norwester', san-serif",
            fontSize: windowWidth < 768 ? "2rem" : "2.5rem",
            fontWeight: "700",
            color: "#c578d6",
            marginBottom: "1rem",
          }}
        >
          The Age of Innovation
        </h2>
        <p
          className="date"
          style={{
            fontSize: windowWidth < 768 ? "1rem" : "1.25rem",
            color: "#333",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          April 4th & April 5th, 2025
        </p>
      </header>

      {/* Buttons */}
      <div className="flex justify-center gap-8 z-10 flex-wrap">
        <a
          target="_blank"
          href="https://forms.gle/iwQscCT5DvWS5Fiq8"
          className="flex items-center px-6 py-3 bg-theme-teal text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110 mb-1"
          style={{ minWidth: "200px" }}
        >
          Judging Interest Form
          <Icon icon="icon-park-outline:right" className="ml-2 text-xl" />
        </a>
        
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSd2fJYy1U5IZj5itydIiZhaLBCScJIMVwY6_qIAD3jvTn3VFA/viewform"
          className="flex items-center px-6 py-3 bg-theme-teal text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110 mb-1"
          style={{ minWidth: "200px" }}
        >
          MSDC Registration Form
          <Icon icon="icon-park-outline:right" className="ml-2 text-xl" />
        </a>
      </div>

      {/* Inline Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fly-across {
          0% {
            transform: translate(0%, 0%) rotate(0deg);
          }
          25% {
            transform: translate(25vw, -30vh) rotate(45deg);
          }
          50% {
            transform: translate(50vw, -50vh) rotate(90deg);
          }
          75% {
            transform: translate(75vw, -30vh) rotate(135deg);
          }
          100% {
            transform: translate(80vw, 0vh) rotate(320deg); /* Adjusted to fit within screen */
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
