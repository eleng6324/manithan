import { useState } from "react";

const DRIVE_THUMBNAIL = "https://drive.google.com/thumbnail?id=10euKswDy-VJFT2DYqrf991FYm9ZDsgHk&sz=w1280";
const DRIVE_EMBED = "https://drive.google.com/file/d/10euKswDy-VJFT2DYqrf991FYm9ZDsgHk/preview";

function GoldCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const size = 16;
  const style: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    backgroundColor: "#f0c060",
    zIndex: 2,
  };
  if (pos === "tl") return <div style={{ ...style, top: -2, left: -2 }} />;
  if (pos === "tr") return <div style={{ ...style, top: -2, right: -2 }} />;
  if (pos === "bl") return <div style={{ ...style, bottom: -2, left: -2 }} />;
  return <div style={{ ...style, bottom: -2, right: -2 }} />;
}

function PixelBorderDecoration() {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 8 }}>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            backgroundColor: i % 2 === 0 ? "#4a7c59" : "#f0c060",
          }}
        />
      ))}
    </div>
  );
}

export function Trailer() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="trailer"
      style={{
        backgroundColor: "#070f08",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      {/* Pixel grass border at TOP */}
      <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {Array.from({ length: 60 }, (_, i) => (
            <rect
              key={i}
              x={i * 20}
              y={i % 2 === 0 ? 0 : 8}
              width="20"
              height="16"
              fill={
                i % 3 === 0 ? "#1a3a1a" :
                i % 3 === 1 ? "#2d5a2d" :
                "#0d1a0e"
              }
            />
          ))}
        </svg>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
            ✦ OFFICIAL ✦
          </div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(18px, 4vw, 32px)",
              color: "#f0c060",
              margin: 0,
              letterSpacing: 4,
              textShadow: "4px 4px 0px #2a1a00",
            }}
          >
            GAME TRAILER
          </h2>
        </div>

        {/* Top pixel border */}
        <PixelBorderDecoration />

        {/* Video frame */}
        <div
          style={{
            position: "relative",
            border: "3px solid #4a7c59",
            padding: 6,
            backgroundColor: "#0a1a0c",
          }}
        >
          <GoldCorner pos="tl" />
          <GoldCorner pos="tr" />
          <GoldCorner pos="bl" />
          <GoldCorner pos="br" />

          {/* 16:9 aspect ratio container */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            {!playing ? (
              /* Thumbnail + play overlay */
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  cursor: "pointer",
                  overflow: "hidden",
                }}
                onClick={() => setPlaying(true)}
              >
                <img
                  src={DRIVE_THUMBNAIL}
                  alt="Game Trailer Thumbnail"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "";
                    (e.target as HTMLImageElement).style.backgroundColor = "#1a3020";
                  }}
                />
                {/* Dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {/* Play button */}
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "rgba(240,192,96,0.9)",
                      border: "4px solid #fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 30px rgba(240,192,96,0.7), 4px 4px 0px #a08020",
                      transition: "transform 0.2s",
                    }}
                  >
                    <span style={{ fontSize: 32, marginLeft: 6, color: "#070f08" }}>▶</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: 10,
                      color: "#f0c060",
                      letterSpacing: 2,
                      textShadow: "2px 2px 0px #000",
                    }}
                  >
                    CLICK TO PLAY
                  </div>
                </div>
              </div>
            ) : (
              /* iframe */
              <iframe
                src={DRIVE_EMBED}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allow="autoplay"
                allowFullScreen
                title="Manithan Game Trailer"
              />
            )}
          </div>
        </div>

        {/* Bottom pixel border */}
        <div style={{ marginTop: 8 }}>
          <PixelBorderDecoration />
        </div>
      </div>
    </section>
  );
}