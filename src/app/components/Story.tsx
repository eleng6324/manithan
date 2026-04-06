import { ImageWithFallback } from "./figma/ImageWithFallback";
import storyImg from "../../assets/32ebb177282496ff4340e1c145a87b2e66cd9c7d.png";

const STORY_IMG = "https://images.unsplash.com/photo-1767963710970-68cc2191c19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGZvcmVzdCUyMGFuY2llbnQlMjBydWlucyUyMGdhbWV8ZW58MXx8fHwxNzc1NDQ0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080";

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

const loreCards = [
  {
    icon: "📖",
    title: "THE ANCIENT BOOK",
    desc: "A mysterious old man hands the explorer an ancient book filled with strange writings and a map — the first clue to a world long forgotten.",
  },
  {
    icon: "🌀",
    title: "THE PORTAL",
    desc: "Deep in an unknown forest, a massive ancient portal waits — guarded by a corrupted guardian. Defeat it, and the gateway to another world opens.",
  },
  {
    icon: "💀",
    title: "THE CORRUPTION",
    desc: "A silent, creeping darkness has consumed the guardians and drained the life from villages and forests alike. A hidden force pulls the strings from the shadows.",
  },
  {
    icon: "⚔️",
    title: "TWO WORLDS AT STAKE",
    desc: "The mysterious world is tied to our own. If the corruption is not stopped, both worlds will fall. Only the explorer can face what lurks at the heart of it all.",
  },
];

const acts = [
  {
    num: "Ⅰ",
    text: "Manithan is a young explorer driven by curiosity about forgotten places, ancient ruins, and lost civilizations. A mysterious old man hands him an ancient book filled with writings tied to his research — and inside, a strange map leading to an unknown forest. Following it deep into the wilderness, he discovers a massive ancient portal guarded by a corrupted guardian. After defeating it, the portal activates — and he is pulled into another world.",
  },
  {
    num: "Ⅱ",
    text: "The new world feels broken and lifeless — forests silenced, villages abandoned, guardians twisted by a dark force. As Manithan travels through its decayed lands, he pieces together the truth: something powerful is controlling the corruption, and it is slowly destroying the world from within.",
  },
  {
    num: "Ⅲ",
    text: "A terrifying truth surfaces — the mysterious world is connected to his own. If the corruption spreads unchecked, both worlds will be destroyed. Manithan must grow stronger, defeat the corrupted guardians, uncover hidden truths, and face the creature behind it all — only then can he restore balance and find his way back home.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      style={{
        backgroundColor: "#060e07",
        padding: "80px 24px",
        borderTop: "4px solid #1a3020",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(74,124,89,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240,192,96,0.04) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 11,
              color: "#8cd49c",
              letterSpacing: 4,
              marginBottom: 12,
            }}
          >
            ✦ THE TALE ✦
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
            GAME STORY
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            marginBottom: 60,
            alignItems: "start",
          }}
        >
          {/* Left: image */}
          <div
            style={{
              position: "relative",
              border: "3px solid #4a7c59",
              padding: 8,
              backgroundColor: "#0a1a0c",
              boxShadow: "6px 6px 0px #1a3020",
              alignSelf: "start",
            }}
          >
            <GoldCorner pos="tl" />
            <GoldCorner pos="tr" />
            <GoldCorner pos="bl" />
            <GoldCorner pos="br" />
            <div style={{ overflow: "hidden" }}>
              <ImageWithFallback
                src={storyImg}
                alt="Adventure awaits in the world of Manithan"
                style={{
                  width: "100%",
                  height: 800,
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                  transition: "transform 0.4s",
                }}
              />
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "12px 8px 4px",
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 7,
                color: "#8cd49c",
                letterSpacing: 1,
                lineHeight: 1.8,
              }}
            >
              ▸ ADVENTURE AWAITS IN THE WORLD OF MANITHAN
            </div>
          </div>

          {/* Right: story acts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {acts.map((act) => (
              <div
                key={act.num}
                style={{
                  borderLeft: "3px solid #4a7c59",
                  paddingLeft: 20,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: 14,
                    color: "#f0c060",
                    marginBottom: 10,
                    textShadow: "2px 2px 0px #2a1a00",
                  }}
                >
                  {act.num}
                </div>
                <p
                  style={{
                    fontFamily: "'VT323', monospace",
                    fontSize: 20,
                    color: "#c8e8c0",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {act.text}
                </p>
              </div>
            ))}

            {/* Quote */}
            <div
              style={{
                textAlign: "center",
                padding: "16px",
                border: "2px solid #4a7c59",
                backgroundColor: "rgba(74,124,89,0.08)",
                marginTop: 8,
              }}
            >
              <p
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 8,
                  color: "#f0c060",
                  margin: 0,
                  letterSpacing: 1,
                  lineHeight: 2,
                  textShadow: "0 0 10px rgba(240,192,96,0.4)",
                }}
              >
                "Two worlds. One fate. One explorer."
              </p>
            </div>
          </div>
        </div>

        {/* Lore cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 18,
          }}
        >
          {loreCards.map((card, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                border: "2px solid #4a7c59",
                padding: "24px 18px",
                backgroundColor: "rgba(10,26,14,0.6)",
                boxShadow: "4px 4px 0px #1a3020",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#f0c060";
                (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px #1a3020";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#4a7c59";
                (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "4px 4px 0px #1a3020";
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
              <div
                style={{
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: 8,
                  color: "#f0c060",
                  marginBottom: 10,
                  letterSpacing: 1,
                  lineHeight: 1.7,
                }}
              >
                {card.title}
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
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}