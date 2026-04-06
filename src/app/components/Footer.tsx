function PixelGrassTop() {
  return (
    <div className="relative w-full h-16 pointer-events-none">
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

export function Footer() {
  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "Trailer", id: "trailer" },
    { label: "Overview", id: "overview" },
    { label: "Story", id: "story" },
    { label: "Gallery", id: "gallery" },
    { label: "Download", id: "download" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#060e07",
      }}
    >
      {/* Pixel grass top */}
      <PixelGrassTop />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "48px 24px 32px" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 20,
              color: "#f0c060",
              letterSpacing: 4,
              textShadow: "0 0 15px rgba(240,192,96,0.4), 4px 4px 0px #2a1a00",
            }}
          >
            ⚔ MANITHAN
          </div>
        </div>
        <div
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: 20,
            color: "#4a7c59",
            textAlign: "center",
            marginBottom: 36,
            letterSpacing: 2,
          }}
        >
          An indie adventure · v1.0.4 Beta
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 8,
                color: "#8cd49c",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                letterSpacing: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0c060")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8cd49c")}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Divider with star */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div style={{ flex: 1, height: 1, backgroundColor: "#1a3020" }} />
          <span style={{ color: "#4a7c59", fontSize: 16 }}>✦</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "#1a3020" }} />
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 8,
              color: "#4a7c59",
              marginBottom: 10,
              letterSpacing: 1,
              lineHeight: 2,
            }}
          >
            © 2026 MANITHAN · ALL RIGHTS RESERVED
          </div>
          <div
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: 18,
              color: "#2a4c39",
              letterSpacing: 2,
            }}
          >
            Made with Unity · Built for Android
          </div>
        </div>
      </div>
    </footer>
  );
}