import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Become dark only after scrolling past ~80% of the hero (viewport height)
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const links = [
    { label: "Trailer", id: "trailer" },
    { label: "Overview", id: "overview" },
    { label: "Story", id: "story" },
    { label: "Gallery", id: "gallery" },
    { label: "Download", id: "download" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(7,15,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "2px solid #4a7c59" : "2px solid transparent",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'Press Start 2P', cursive",
              color: "#f0c060",
              fontSize: 14,
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: 2,
              flexShrink: 0,
            }}
          >
            ⚔ MANITHAN
          </button>

          {/* Desktop nav — always right-aligned, hidden on small screens */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 28 }}>
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 9,
                  color: "#c8e8c0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  letterSpacing: 1,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0c060")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#c8e8c0")}
              >
                {l.label.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => scrollTo("download")}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 9,
                color: "#ffffff",
                backgroundColor: "#4a7c59",
                border: "2px solid #8cd49c",
                padding: "8px 14px",
                cursor: "pointer",
                boxShadow: "3px 3px 0px #2a4c39",
                transition: "all 0.15s",
                letterSpacing: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8cd49c";
                e.currentTarget.style.transform = "translate(-1px, -1px)";
                e.currentTarget.style.boxShadow = "4px 4px 0px #2a4c39";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4a7c59";
                e.currentTarget.style.transform = "translate(0,0)";
                e.currentTarget.style.boxShadow = "3px 3px 0px #2a4c39";
              }}
            >
              ▼ DOWNLOAD
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "2px solid #4a7c59",
              color: "#f0c060",
              padding: "6px 10px",
              cursor: "pointer",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#f0c060" }} />
            <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#f0c060" }} />
            <span style={{ display: "block", width: 20, height: 2, backgroundColor: "#f0c060" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: "2px solid #4a7c59",
              padding: "16px 0",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              backgroundColor: "rgba(7,15,8,0.97)",
            }}
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 9,
                  color: "#c8e8c0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "8px 0",
                  letterSpacing: 1,
                }}
              >
                {l.label.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => scrollTo("download")}
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 9,
                color: "#070f08",
                backgroundColor: "#4a7c59",
                border: "2px solid #8cd49c",
                padding: "10px 14px",
                cursor: "pointer",
                boxShadow: "3px 3px 0px #2a4c39",
                letterSpacing: 1,
                marginTop: 4,
              }}
            >
              ▼ DOWNLOAD
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}