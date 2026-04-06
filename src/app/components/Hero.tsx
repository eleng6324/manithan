import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "../../assets/3b75f802db07b8deeb8e5a7ccaa8ec2a408b622f.png";

function Fireflies() {
  const flies = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 85}%`,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 5,
    size: 2 + Math.random() * 1.5,
  }));

  return (
    <>
      {flies.map((f) => (
        <div
          key={f.id}
          style={{
            position: "absolute",
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            borderRadius: "50%",
            backgroundColor:
              f.id % 3 === 0 ? "#f0c060" : "#8cd49c",
            animation: `firefly ${f.duration}s ease-in-out ${f.delay}s infinite`,
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 2,
            boxShadow:
              f.id % 3 === 0
                ? "0 0 3px 1px rgba(240,192,96,0.3)"
                : "0 0 3px 1px rgba(140,212,156,0.25)",
          }}
        />
      ))}
    </>
  );
}

function PixelGrassBorder() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Dark ground base */}
        <rect x="0" y="32" width="1200" height="32" fill="#1a3a1a" />

        {/* Pixel grass chunks with varied heights */}
        {Array.from({ length: 60 }, (_, i) => (
          <rect
            key={i}
            x={i * 20}
            y={20 + Math.sin(i * 1.3) * 8}
            width="20"
            height="20"
            fill={
              i % 3 === 0 ? "#2d5a2d" :
              i % 3 === 1 ? "#3a7a3a" :
              "#255025"
            }
          />
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#070f08",
        paddingBottom: 80,
      }}
    >
      {/* Background image */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <ImageWithFallback
          src={heroBg}
          alt="Mysterious forest"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(7,15,8,0.82) 0%, rgba(7,15,8,0.65) 30%, rgba(7,15,8,0.72) 65%, rgba(7,15,8,0.97) 100%)",
          }}
        />
      </div>

      {/* Fireflies */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 2 }}
      >
        <Fireflies />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          textAlign: "center",
          padding: "0 20px",
          maxWidth: 900,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: 8,
            color: "#f0c060",
            border: "2px solid #f0c060",
            padding: "6px 16px",
            marginBottom: 28,
            letterSpacing: 2,
            backgroundColor: "rgba(240,192,96,0.08)",
          }}
        >
          ✦ NOW AVAILABLE ON ANDROID ✦
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "clamp(30px, 6vw, 75px)",
            color: "#f0c060",
            margin: "0 0 16px 0",
            letterSpacing: 6,
            lineHeight: 1.2,
            textShadow: "0 0 18px rgba(240,192,96,0.55), 0 0 40px rgba(240,192,96,0.25)",
          }}
        >
          MANITHAN
        </h1>

        {/* Star divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          {/* Left fading line */}
          <div
            style={{
              flex: 1,
              maxWidth: 180,
              height: 2,
              background:
                "linear-gradient(to right, transparent, #f0c060)",
            }}
          />
          {/* Center symbol */}
          <span
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 13,
              color: "#f0c060",
              letterSpacing: 10,
              flexShrink: 0,
            }}
          >
            ✦ ⚔ ✦
          </span>
          {/* Right fading line */}
          <div
            style={{
              flex: 1,
              maxWidth: 180,
              height: 2,
              background:
                "linear-gradient(to left, transparent, #f0c060)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "clamp(18px, 2.5vw, 18px)",
            color: "#c8e8c0",
            marginBottom: 40,
            letterSpacing: 1.5,
            lineHeight: 1.6,
          }}
        >
          Craft. Explore. Survive. Uncover the secrets of a
          forgotten world.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => scrollTo("download")}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 10,
              color: "#ffffff",
              backgroundColor: "#4a7c59",
              border: "3px solid #8cd49c",
              padding: "14px 24px",
              cursor: "pointer",
              boxShadow: "4px 4px 0px #2a4c39",
              transition: "all 0.15s",
              letterSpacing: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#5a9c69";
              e.currentTarget.style.transform =
                "translate(-2px, -2px)";
              e.currentTarget.style.boxShadow =
                "6px 6px 0px #2a4c39";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4a7c59";
              e.currentTarget.style.transform =
                "translate(0,0)";
              e.currentTarget.style.boxShadow =
                "4px 4px 0px #2a4c39";
            }}
          >
            ▼ DOWNLOAD FREE
          </button>
          <button
            onClick={() => scrollTo("trailer")}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 10,
              color: "#f0c060",
              backgroundColor: "transparent",
              border: "3px solid #f0c060",
              padding: "14px 24px",
              cursor: "pointer",
              boxShadow: "4px 4px 0px #a08020",
              transition: "all 0.15s",
              letterSpacing: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(240,192,96,0.1)";
              e.currentTarget.style.transform =
                "translate(-2px, -2px)";
              e.currentTarget.style.boxShadow =
                "6px 6px 0px #a08020";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "transparent";
              e.currentTarget.style.transform =
                "translate(0,0)";
              e.currentTarget.style.boxShadow =
                "4px 4px 0px #a08020";
            }}
          >
            ▶ WATCH TRAILER
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          textAlign: "center",
          animation: "scrollBounce 2s ease-in-out infinite",
        }}
      >
        <div
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: 7,
            color: "#4a7c59",
            marginBottom: 6,
            letterSpacing: 2,
          }}
        >
          SCROLL
        </div>
        <div style={{ color: "#4a7c59", fontSize: 18 }}>▼</div>
      </div>

      {/* Pixel grass border at bottom */}
      <PixelGrassBorder />
    </section>
  );
}