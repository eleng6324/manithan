import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search } from "lucide-react";
import img1 from "../../assets/2e560b1c9ea81703a6c2fd3cfd4559e9e66b26fc.png";
import img2 from "../../assets/95fa8470e76b9d78ccdead998ffb5306fec314e9.png";
import img3 from "../../assets/8968a960776866b6c3644aea0c07d18e03d89fbf.png";
import img4 from "../../assets/4cba64bbd191b6d435102e68ad8c1dd0d92afefc.png";
import img5 from "../../assets/1916ebd60225049f8daa7d7735050ff541327fe7.png";
import img6 from "../../assets/4c3b607f88f901315058f1c9d1a3735c9626c9f3.png";

const screenshots = [
  {
    id: 1,
    src: img1,
    title: "The Green Lands",
    stage: "STAGE 1",
    tagColor: "#4a7c59",
    tagBg: "rgba(74,124,89,0.2)",
  },
  {
    id: 2,
    src: img2,
    title: "The Village",
    stage: "STAGE 2",
    tagColor: "#4a8ab0",
    tagBg: "rgba(74,138,176,0.2)",
  },
  {
    id: 3,
    src: img3,
    title: "The Dark Forest",
    stage: "STAGE 3",
    tagColor: "#5a7a9a",
    tagBg: "rgba(90,122,154,0.2)",
  },
  {
    id: 4,
    src: img4,
    title: "The Mountain Cave",
    stage: "STAGE 4",
    tagColor: "#c07840",
    tagBg: "rgba(192,120,64,0.2)",
  },
  {
    id: 5,
    src: img5,
    title: "The Ancient Ruins",
    stage: "STAGE 5",
    tagColor: "#f0c060",
    tagBg: "rgba(240,192,96,0.2)",
  },
  {
    id: 6,
    src: img6,
    title: "The Wasteland",
    stage: "STAGE 6",
    tagColor: "#9a7060",
    tagBg: "rgba(154,112,96,0.2)",
  },
];

function GoldCorner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#f0c060",
    zIndex: 3,
    transition: "opacity 0.3s",
    opacity: 0,
  };
  if (pos === "tl") return <div className="corner-tl" style={{ ...style, top: -2, left: -2 }} />;
  if (pos === "tr") return <div className="corner-tr" style={{ ...style, top: -2, right: -2 }} />;
  if (pos === "bl") return <div className="corner-bl" style={{ ...style, bottom: -2, left: -2 }} />;
  return <div className="corner-br" style={{ ...style, bottom: -2, right: -2 }} />;
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<null | (typeof screenshots)[0]>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#070f08",
        padding: "80px 24px",
        borderTop: "4px solid #1a3020",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 11,
              color: "#8cd49c",
              letterSpacing: 4,
              marginBottom: 12,
            }}
          >
            ✦ SCREENSHOTS ✦
          </div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: "clamp(16px, 3.5vw, 28px)",
              color: "#f0c060",
              margin: "0 0 16px",
              letterSpacing: 3,
              textShadow: "4px 4px 0px #2a1a00",
            }}
          >
            IN-GAME IMAGES
          </h2>
          <p
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 20,
              color: "#8cd49c",
              margin: "0 0 40px",
              letterSpacing: 1,
            }}
          >
            Click any image to explore the world of Manithan
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {screenshots.map((s) => (
            <div
              key={s.id}
              style={{
                position: "relative",
                border: hovered === s.id ? "2px solid #f0c060" : "2px solid #4a7c59",
                cursor: "pointer",
                overflow: "hidden",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightbox(s)}
            >
              {/* Corner decorations on hover */}
              {hovered === s.id && (
                <>
                  <div style={{ position: "absolute", top: -2, left: -2, width: 12, height: 12, backgroundColor: "#f0c060", zIndex: 3 }} />
                  <div style={{ position: "absolute", top: -2, right: -2, width: 12, height: 12, backgroundColor: "#f0c060", zIndex: 3 }} />
                  <div style={{ position: "absolute", bottom: -2, left: -2, width: 12, height: 12, backgroundColor: "#f0c060", zIndex: 3 }} />
                  <div style={{ position: "absolute", bottom: -2, right: -2, width: 12, height: 12, backgroundColor: "#f0c060", zIndex: 3 }} />
                </>
              )}

              <ImageWithFallback
                src={s.src}
                alt={s.title}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s",
                  transform: hovered === s.id ? "scale(1.06)" : "scale(1)",
                }}
              />

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(7,15,8,0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  opacity: hovered === s.id ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              >
                <Search size={36} color="#f0c060" strokeWidth={2} />
                <div
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 9,
                    color: "#f0c060",
                    textAlign: "center",
                    padding: "0 12px",
                    lineHeight: 1.8,
                  }}
                >
                  {s.title}
                </div>
              </div>

              {/* Stage tag */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  backgroundColor: s.tagBg,
                  border: `2px solid ${s.tagColor}`,
                  padding: "3px 8px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 7,
                  color: s.tagColor,
                  letterSpacing: 1,
                }}
              >
                {s.stage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{
              position: "relative",
              border: "3px solid #4a7c59",
              maxWidth: 900,
              width: "100%",
              backgroundColor: "#0a1a0c",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold corners */}
            <div style={{ position: "absolute", top: -3, left: -3, width: 16, height: 16, backgroundColor: "#f0c060", zIndex: 2 }} />
            <div style={{ position: "absolute", top: -3, right: -3, width: 16, height: 16, backgroundColor: "#f0c060", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: -3, left: -3, width: 16, height: 16, backgroundColor: "#f0c060", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: -3, right: -3, width: 16, height: 16, backgroundColor: "#f0c060", zIndex: 2 }} />

            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                backgroundColor: "#f0c060",
                border: "none",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 12,
                color: "#070f08",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "3px 3px 0px #a08020",
              }}
            >
              ✕
            </button>

            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{ width: "100%", display: "block", maxHeight: "75vh", objectFit: "contain" }}
            />
            <div style={{ padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  backgroundColor: lightbox.tagBg,
                  border: `2px solid ${lightbox.tagColor}`,
                  padding: "3px 8px",
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 7,
                  color: lightbox.tagColor,
                }}
              >
                {lightbox.stage}
              </span>
              <span
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: 22,
                  color: "#c8e8c0",
                }}
              >
                {lightbox.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}