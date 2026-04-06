import { useEffect, useRef } from "react";

function GoldCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: 14,
    height: 14,
    backgroundColor: "#f0c060",
    zIndex: 2,
  };
  if (pos === "tl") return <div style={{ ...style, top: -2, left: -2 }} />;
  if (pos === "tr") return <div style={{ ...style, top: -2, right: -2 }} />;
  if (pos === "bl") return <div style={{ ...style, bottom: -2, left: -2 }} />;
  return <div style={{ ...style, bottom: -2, right: -2 }} />;
}

const features = [
  {
    icon: "🏃",
    title: "2D PLATFORMER",
    desc: "Jump, dash, and fight through challenging environments filled with danger and mystery.",
  },
  {
    icon: "⚔️",
    title: "COMBAT SYSTEM",
    desc: "Face corrupted guardians and powerful enemies in intense pixel-art battles.",
  },
  {
    icon: "🔨",
    title: "CRAFT & GATHER",
    desc: "Collect resources and craft items to grow stronger and survive the journey.",
  },
  {
    icon: "🌍",
    title: "TWO WORLDS",
    desc: "Explore a forgotten realm connected to your own — save both before it's too late.",
  },
];

function AmbientParticles() {
  return (
    <>
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${5 + (i * 8.5) % 100}%`,
            bottom: 0,
            width: 4,
            height: 4,
            backgroundColor: i % 3 === 0 ? "#f0c060" : "#8cd49c",
            borderRadius: "50%",
            opacity: 0.6,
            animation: `particleFloat ${6 + (i * 1.7) % 8}s linear ${(i * 0.9) % 5}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

export function GameOverview() {
  return (
    <section
      id="overview"
      style={{
        backgroundColor: "#070f08",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
        borderTop: "4px solid #1a3020",
      }}
    >
      <AmbientParticles />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 11,
              color: "#8cd49c",
              letterSpacing: 4,
              marginBottom: 12,
            }}
          >
            ✦ ABOUT THE GAME ✦
          </div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(16px, 3.5vw, 28px)",
              color: "#f0c060",
              margin: 0,
              letterSpacing: 3,
              textShadow: "4px 4px 0px #2a1a00",
            }}
          >
            GAME OVERVIEW
          </h2>
        </div>

        {/* Main description card */}
        <div
          style={{
            position: "relative",
            border: "2px solid #4a7c59",
            padding: "40px 36px",
            marginBottom: 48,
            backgroundColor: "rgba(10,26,14,0.7)",
            boxShadow: "6px 6px 0px #1a3020, 0 0 40px rgba(74,124,89,0.15)",
          }}
        >
          <GoldCorner pos="tl" />
          <GoldCorner pos="tr" />
          <GoldCorner pos="bl" />
          <GoldCorner pos="br" />

          {/* Sword icon */}
          <div style={{ textAlign: "center", marginBottom: 24, fontSize: 28 }}>⚔</div>
          <div
            style={{
              width: 60,
              height: 2,
              backgroundColor: "#4a7c59",
              margin: "0 auto 24px",
            }}
          />

          <p
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 22,
              color: "#c8e8c0",
              lineHeight: 1.8,
              textAlign: "center",
              margin: 0,
            }}
          >
            Manithan is a 2D platformer adventure game where players control a young explorer who
            follows an ancient map into a mysterious forest and discovers a hidden portal to a
            forgotten world. As they explore dangerous environments, gather resources, craft items,
            and fight fallen guardians, they uncover the truth behind the lifeless lands and the
            dark force threatening both worlds. To survive and return home, the player must grow
            stronger, defeat powerful enemies, and restore balance before the darkness spreads
            beyond the mysterious realm.
          </p>

          <div
            style={{
              width: 60,
              height: 2,
              backgroundColor: "#4a7c59",
              margin: "24px auto 0",
            }}
          />
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                border: "2px solid #4a7c59",
                padding: "28px 20px",
                backgroundColor: "rgba(10,26,14,0.6)",
                boxShadow: "4px 4px 0px #1a3020",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px #1a3020";
                (e.currentTarget as HTMLElement).style.borderColor = "#8cd49c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #1a3020";
                (e.currentTarget as HTMLElement).style.borderColor = "#4a7c59";
              }}
            >
              <GoldCorner pos="tl" />
              <GoldCorner pos="br" />

              <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 9,
                  color: "#f0c060",
                  marginBottom: 12,
                  letterSpacing: 1,
                  lineHeight: 1.6,
                }}
              >
                {f.title}
              </div>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: 18,
                  color: "#8cd49c",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
