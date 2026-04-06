import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "../../assets/3b75f802db07b8deeb8e5a7ccaa8ec2a408b622f.png";
import appIconImg from "../../assets/bb4e12bcbc6ab927353377e51827286f623031e9.png";

const DOWNLOAD_LINK =
  "https://drive.google.com/drive/folders/1tYmkR0A9E1mgsFYr3uh9BSsGXwqYZaJM?usp=sharing";

function GoldCorner({
  pos,
}: {
  pos: "tl" | "tr" | "bl" | "br";
}) {
  const style: React.CSSProperties = {
    position: "absolute",
    width: 14,
    height: 14,
    backgroundColor: "#f0c060",
    zIndex: 2,
  };
  if (pos === "tl")
    return <div style={{ ...style, top: -2, left: -2 }} />;
  if (pos === "tr")
    return <div style={{ ...style, top: -2, right: -2 }} />;
  if (pos === "bl")
    return <div style={{ ...style, bottom: -2, left: -2 }} />;
  return <div style={{ ...style, bottom: -2, right: -2 }} />;
}

function TwinklingStars() {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 1.5 + Math.random() * 3,
    delay: Math.random() * 4,
    size: 1 + Math.random() * 2,
  }));
  return (
    <>
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            backgroundColor:
              s.id % 4 === 0 ? "#f0c060" : "#c8e8c0",
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

const requirements = [
  { label: "Platform", value: "Android 8.0+" },
  { label: "APK Size", value: "~180 MB" },
  { label: "RAM", value: "2 GB minimum" },
  { label: "Storage", value: "500 MB free" },
  { label: "Version", value: "v1.0.4 (Beta)" },
  { label: "Price", value: "FREE" },
];

export function Download() {
  const [clicked, setClicked] = useState(false);

  const handleDownload = () => {
    setClicked(true);
    setTimeout(() => {
      window.open(DOWNLOAD_LINK, "_blank");
    }, 500);
  };

  return (
    <section
      id="download"
      style={{
        position: "relative",
        padding: "80px 24px",
        overflow: "hidden",
        borderTop: "4px solid #1a3020",
        backgroundColor: "#070f08",
      }}
    >
      {/* Background image */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <ImageWithFallback
          src={heroBg}
          alt="Forest background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(7,15,8,0.80), rgba(7,15,8,0.90))",
          }}
        />
      </div>

      {/* Twinkling stars */}
      <div
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      >
        <TwinklingStars />
      </div>

      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
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
            ✦ GET THE GAME ✦
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
            DOWNLOAD NOW
          </h2>
        </div>

        {/* Download card */}
        <div
          style={{
            position: "relative",
            border: "3px solid #4a7c59",
            padding: "36px 28px",
            backgroundColor: "rgba(10,26,14,0.85)",
            boxShadow:
              "6px 6px 0px #1a3020, 0 0 40px rgba(74,124,89,0.2)",
          }}
        >
          <GoldCorner pos="tl" />
          <GoldCorner pos="tr" />
          <GoldCorner pos="bl" />
          <GoldCorner pos="br" />

          {/* App icon + title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                border: "3px solid #f0c060",
                borderRadius: 12,
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "4px 4px 0px #a08020",
              }}
            >
              <ImageWithFallback
                src={appIconImg}
                alt="Manithan app icon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 16,
                  color: "#f0c060",
                  marginBottom: 6,
                  textShadow: "2px 2px 0px #2a1a00",
                }}
              >
                MANITHAN
              </div>
              <div
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: 20,
                  color: "#8cd49c",
                  marginBottom: 10,
                }}
              >
                Beta v1.0.4 · Android APK
              </div>
              {/* Stars */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    color: "#f0c060",
                    fontSize: 16,
                    letterSpacing: 2,
                  }}
                >
                  ★★★★★
                </div>
                <span
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: 18,
                    color: "#c8e8c0",
                  }}
                >
                  4.9 · 2,400 downloads
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 2,
              backgroundColor: "#1a3020",
              marginBottom: 24,
            }}
          />

          {/* System requirements */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginBottom: 28,
            }}
          >
            {requirements.map((r, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #2a4c39",
                  padding: "10px 12px",
                  backgroundColor: "rgba(26,48,32,0.4)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 6,
                    color: "#4a7c59",
                    marginBottom: 6,
                    letterSpacing: 1,
                  }}
                >
                  {r.label}
                </div>
                <div
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: 17,
                    color: "#c8e8c0",
                  }}
                >
                  {r.value}
                </div>
              </div>
            ))}
          </div>

          {/* Warning box */}
          <div
            style={{
              border: "2px solid #c07840",
              backgroundColor: "rgba(192,120,64,0.1)",
              padding: "12px 16px",
              marginBottom: 28,
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0 }}>
              ⚠
            </span>
            <p
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: 18,
                color: "#e8a878",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              You may need to enable 'Install from Unknown
              Sources' in your Android settings to install this
              APK.
            </p>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            style={{
              display: "block",
              width: "100%",
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 11,
              color: clicked ? "#8cd49c" : "#070f08",
              backgroundColor: clicked
                ? "rgba(140,212,156,0.15)"
                : "#4a7c59",
              border: clicked
                ? "3px solid #8cd49c"
                : "3px solid #8cd49c",
              padding: "18px 24px",
              cursor: "pointer",
              boxShadow: clicked
                ? "0 0 20px rgba(140,212,156,0.4)"
                : "4px 4px 0px #2a4c39",
              transition: "all 0.3s",
              letterSpacing: 1,
              lineHeight: 1.8,
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              if (!clicked) {
                (
                  e.currentTarget as HTMLElement
                ).style.backgroundColor = "#5a9c69";
                (
                  e.currentTarget as HTMLElement
                ).style.transform = "translate(-2px,-2px)";
                (
                  e.currentTarget as HTMLElement
                ).style.boxShadow = "6px 6px 0px #2a4c39";
              }
            }}
            onMouseLeave={(e) => {
              if (!clicked) {
                (
                  e.currentTarget as HTMLElement
                ).style.backgroundColor = "#4a7c59";
                (
                  e.currentTarget as HTMLElement
                ).style.transform = "translate(0,0)";
                (
                  e.currentTarget as HTMLElement
                ).style.boxShadow = "4px 4px 0px #2a4c39";
              }
            }}
          >
            {clicked
              ? "✓ REDIRECTING TO GOOGLE DRIVE..."
              : "▼ DOWNLOAD APK — FREE"}
          </button>

          {/* Note */}
          <p
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 17,
              color: "#4a7c59",
              textAlign: "center",
              margin: "16px 0 0",
              letterSpacing: 1,
            }}
          >
            Hosted on Google Drive · No account needed · Safe
            download
          </p>

          {/* Divider */}
          <div
            style={{
              height: 2,
              backgroundColor: "#1a3020",
              margin: "20px 0",
            }}
          />

          {/* Footer links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href={DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 7,
                color: "#8cd49c",
                textDecoration: "none",
                borderBottom: "1px solid #4a7c59",
                paddingBottom: 2,
              }}
            >
              📁 Direct GDrive Link
            </a>
            <span style={{ color: "#2a4c39" }}>|</span>
            <a
              href="mailto:lainechan6324@gmail.com"
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: 16,
                color: "#8cd49c",
                textDecoration: "none",
              }}
            >
              📧 lainechan6324@gmail.com
            </a>
            <span style={{ color: "#2a4c39" }}>/</span>
            <a
              href="mailto:clintxyrusmendoza05@gmail.com"
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: 16,
                color: "#8cd49c",
                textDecoration: "none",
              }}
            >
              clintxyrusmendoza05@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}