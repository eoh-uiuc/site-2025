import { Icon } from "@iconify/react";

export default function HomeVideo() {
  const elements = [
    {
      src: "/assets/logo/fan.png",
      size: "18rem",
      top: "80%",
      left: "65%",
      animation: "float 6s ease-in-out infinite",
    },
    {
      src: "/assets/logo/beaker.png",
      size: "10rem",
      top: "20%",
      left: "75%",
      animation: "float 4s ease-in-out infinite",
    },
    {
      src: "/assets/logo/circuit.png",
      size: "8rem",
      top: "60%",
      left: "20%",
      animation: "float 5s ease-in-out infinite",
    },
    {
      src: "/assets/logo/compass.png",
      size: "8rem",
      top: "28%",
      left: "5%",
    },
    {
      src: "/assets/logo/magnifier.png",
      size: "15rem",
      top: "80%",
      left: "12%",
      zIndex: 3,
      animation: "float 7s ease-in-out infinite",
    },
    {
      src: "/assets/logo/moon.png",
      size: "5rem",
      top: "75%",
      left: "78%",
      animation: "float 6s ease-in-out infinite",
    },
    {
      src: "/assets/logo/newrocket.png",
      size: "20rem",
      top: "50%",
      left: "0%",
      zIndex: 2,
      transform: "translate(-10%, -20%)",
    },
    {
      src: "/assets/logo/windmill.png",
      size: "23rem",
      top: "68%",
      left: "90%",
    },
    {
      src: "/assets/logo/world.png",
      size: "20rem",
      top: "75%",
      left: "85%",
      animation: "float 8s ease-in-out infinite",
    },
  ];

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
        {elements.map((element, index) => (
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
        <h1 className="title">Engineering Open House</h1>
        <p className="subtitle">
          at the <strong>University of Illinois Urbana-Champaign</strong> brings
        </p>
        <h2 className="highlight">The Age of Innovation</h2>
        <p className="date">April 4th & April 5th, 2025</p>
      </header>

       {/* Buttons */}
       <div className="flex justify-center gap-8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSew_CTrs-Swtdlz9IDwmmpXeAP7VsEUQ2S-KpsSho4Vr1U66A/viewform"
          className="flex items-center px-6 py-3 bg-theme-teal text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110"
        >
          Exhibits Application
          <Icon icon="icon-park-outline:right" className="ml-2 text-xl" />
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeZ-A-2frFJyWgo4B22b40tc3WlAIkd2qqn28JJekO8lavZw/viewform"
          className="flex items-center px-6 py-3 bg-theme-teal text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-110"
        >
          School Interest Form
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

        .scattered-elements {
          display: block;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #666;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .highlight {
  font-size: 2.5rem;
  font-weight: 700;
  color: #c578d6; /* Changed from gradient to solid color */
  margin-bottom: 1rem;
}


        .date {
          font-size: 1rem;
          color: #333;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .button-container {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .button {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 0.75rem;
          transition: transform 0.3s ease;
        }

        .button-exhibits {
          background-color: #ffefd5;
          color: #333;
        }

        .button-interest {
          background-color: #cce7ff;
          color: #333;
        }

        @media (max-width: 768px) {
          .scattered-elements {
            display: none;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle, .highlight, .date {
            font-size: 1rem;
          }

          .button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
}
