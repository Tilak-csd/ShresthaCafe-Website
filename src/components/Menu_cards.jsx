import { useState } from "react";
import { NavLink } from "react-router";

// ── Replace with your real import ──────────────────────────────────────────
// import { menu_page } from '../data/menu'
const menu_page = [
  { id:1, category:"Mains",    title:"Truffle Mushroom Bowl",  tag:"Chef's Pick", price:28,
    imageUrl:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    description:"Wild mushrooms, truffle oil, herb risotto, aged parmesan shavings" },
  { id:2, category:"Mains",    title:"Grilled Herb Salmon",    tag:"Seasonal",    price:34,
    imageUrl:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    description:"Atlantic salmon, lemon butter, seasonal greens, garden herb dressing" },
  { id:3, category:"Starters", title:"Burrata & Tomato",       tag:"Popular",     price:18,
    imageUrl:"https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80",
    description:"Fresh burrata, heirloom tomatoes, basil oil, fleur de sel, balsamic" },
  { id:4, category:"Mains",    title:"Slow Roast Tenderloin",  tag:"Signature",   price:52,
    imageUrl:"https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    description:"Slow-roasted beef, roasted shallots, garden herbs, red wine reduction" },
  { id:5, category:"Desserts", title:"Warm Chocolate Fondant", tag:"Dessert",     price:14,
    imageUrl:"https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80",
    description:"Dark chocolate fondant, vanilla bean ice cream, caramel drizzle" },
  { id:6, category:"Starters", title:"Garden Soup",            tag:"Vegan",       price:12,
    imageUrl:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    description:"Seasonal vegetables, fresh herbs, toasted sourdough croutons" },
  { id:7, category:"Drinks",   title:"Cold Brew Coffee",       tag:"Bestseller",  price:6,
    imageUrl:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    description:"18-hour cold brewed, served over ice with oat milk option" },
  { id:8, category:"Drinks",   title:"Matcha Latte",           tag:"Popular",     price:7,
    imageUrl:"https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80",
    description:"Ceremonial grade matcha, steamed oat milk, light honey drizzle" },
  { id:9, category:"Desserts", title:"Honey Panna Cotta",      tag:"Seasonal",    price:11,
    imageUrl:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    description:"Silken panna cotta, wildflower honey, seasonal berry compote" },
];

const CATEGORIES = ["All", "Starters", "Mains", "Desserts", "Drinks"];

const TAG_CONFIG = {
  "Chef's Pick": { bg: "#e8f0e4", color: "#3a5c2e" },
  Seasonal:      { bg: "#fef3e2", color: "#7a4f1a" },
  Popular:       { bg: "#edf4f0", color: "#2d6653" },
  Signature:     { bg: "#f5f0e8", color: "#6b4c2a" },
  Dessert:       { bg: "#fce8e8", color: "#7a2e2e" },
  Vegan:         { bg: "#e4f0e8", color: "#2a5c38" },
  Bestseller:    { bg: "#e8ede4", color: "#3d5230" },
};

// ─────────────────────────────────────────────────────────────────────────────
function PriceCard({ id, title, imageUrl, description, price, tag, index }) {
  const [hovered, setHovered] = useState(false);
  const ts = TAG_CONFIG[tag] || { bg: "#f0ede8", color: "#5c4a32" };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "#b5c4a8" : "#e8e4dc"}`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 48px rgba(80,100,60,0.13)"
          : "0 2px 12px rgba(0,0,0,0.05)",
        transition: "all 0.35s cubic-bezier(.22,.68,0,1.2)",
        animation: `fadeUp 0.45s ease ${index * 70}ms both`,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "195px", overflow: "hidden", background: "#f2ede6" }}>
        <img
          src={imageUrl} alt={title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.55s ease",
            transform: hovered ? "scale(1.07)" : "scale(1.0)",
            filter: hovered ? "brightness(0.93)" : "brightness(1)",
          }}
        />
        {/* Soft bottom fade */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(255,252,246,0.55) 0%, transparent 55%)",
        }} />
        {/* Tag */}
        <span style={{
          position: "absolute", top: 13, left: 13,
          background: ts.bg, color: ts.color,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px", fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          padding: "4px 11px", borderRadius: "100px",
        }}>
          {tag}
        </span>
        {/* ID number */}
        <span style={{
          position: "absolute", top: 14, right: 15,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px", color: "rgba(255,255,255,0.8)",
          fontWeight: 500, letterSpacing: "0.06em",
          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}>
          {String(id).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "9px", flex: 1 }}>
        <h3 style={{
          margin: 0,
          fontFamily: "'Fraunces', serif",
          fontWeight: 400, fontSize: "19px",
          color: "#2c2416", lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}>
          {title}
        </h3>

        {/* Thin dotted rule */}
        <div style={{
          borderTop: "1px dashed #ddd8cf",
          transition: "border-color 0.3s",
          borderColor: hovered ? "#b5c4a8" : "#ddd8cf",
        }} />

        <p style={{
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300, fontSize: "13px",
          color: "#9e8f7a", lineHeight: 1.65, flex: 1,
        }}>
          {description}
        </p>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "6px" }}>
          <span style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500, fontSize: "22px",
            color: "#3d5230",
          }}>
            ${price}
          </span>
          <NavLink style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px", fontWeight: 500,
            letterSpacing: "0.06em",
            padding: "8px 17px",
            borderRadius: "100px",
            border: `1.5px solid ${hovered ? "#3d5230" : "#c8c0b0"}`,
            background: hovered ? "#3d5230" : "transparent",
            color: hovered ? "#fff" : "#6b5c45",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }} to='/location'>
            + Order
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function Menu_cards() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menu_page : menu_page.filter(i => i.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .menu-filter-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          padding: 9px 22px; border-radius: 100px;
          border: 1.5px solid #ddd8ce;
          background: transparent; color: #8a7a65;
          cursor: pointer; transition: all 0.2s ease;
          white-space: nowrap;
        }
        .menu-filter-pill:hover { border-color: #3d5230; color: #3d5230; }
        .menu-filter-pill.active {
          background: #3d5230; border-color: #3d5230;
          color: #f5f0e8;
        }

        .reserve-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.06em;
          padding: 15px 42px; border-radius: 100px;
          border: 1.5px solid #3d5230;
          background: transparent; color: #3d5230;
          cursor: pointer; transition: all 0.28s ease;
          text-decoration: none; display: inline-block;
        }
        .reserve-link:hover {
          background: #3d5230; color: #f5f0e8;
          box-shadow: 0 8px 28px rgba(61,82,48,0.22);
          transform: translateY(-2px);
        }
        .reserve-link:active { background: #3d5230; color: #f5f0e8; }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 920px) { .cards-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) {
          .cards-grid { grid-template-columns: 1fr; }
          .menu-big-title { font-size: 46px !important; }
          .menu-filter-row { overflow-x: auto; flex-wrap: nowrap !important; padding-bottom: 6px; }
        }
      `}</style>

      <section style={{
        width: "100%",
        minHeight: "100vh",
        background: "#faf7f2",       /* warm off-white / beige */
        paddingTop: "76px",
        paddingBottom: "100px",
      }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 24px" }}>

          {/* ── Eyebrow ── */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "16px", marginBottom: "48px",
          }}>
            {/* Leaf icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7a9968" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 4 13c0-4.9 4.4-8.3 8-10 3.6 1.7 8 5.1 8 10a7 7 0 0 1-7 7z"/>
              <path d="M12 13v7"/>
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", fontWeight: 500,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#7a9968",
            }}>
              Freshly Prepared · Shrestha Café
            </span>
            <div style={{ flex: 1, height: "1px", background: "#e4ddd3" }} />
          </div>

          {/* ── Heading block ── */}
          <div style={{ marginBottom: "48px", maxWidth: "600px" }}>
            <h1
              className="menu-big-title"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 300,
                fontSize: "clamp(46px, 6.5vw, 76px)",
                lineHeight: 1.0,
                color: "#2c2416",
                margin: "0 0 18px",
                letterSpacing: "-0.02em",
              }}
            >
              Our{" "}
              <em style={{ fontStyle: "italic", color: "#5a7a48" }}>Menu</em>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300, fontSize: "15px",
              color: "#9e8f7a", lineHeight: 1.7, margin: 0,
            }}>
              Made from scratch every morning. We work with local farmers and seasonal
              produce to bring honest, nourishing food to your table.
            </p>
          </div>

          {/* ── Filter pills ── */}
          <div className="menu-filter-row" style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", gap: "8px",
            marginBottom: "32px",
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`menu-filter-pill${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
            <span style={{
              marginLeft: "auto",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px", color: "#c0b5a5",
              fontWeight: 400,
            }}>
              {filtered.length} dish{filtered.length !== 1 ? "es" : ""}
            </span>
          </div>

          {/* Subtle divider */}
          <div style={{ height: "1px", background: "linear-gradient(to right, #e4ddd3, transparent)", marginBottom: "32px" }} />

          {/* ── Cards grid ── */}
          <div className="cards-grid">
            {filtered.map((item, i) => (
              <PriceCard key={item.id} {...item} index={i} />
            ))}
          </div>

          {/* ── Reservation CTA ── */}
          <div style={{
            marginTop: "80px",
            padding: "52px 40px",
            background: "#f0ece4",
            borderRadius: "20px",
            border: "1px solid #e4ddd3",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
            textAlign: "center",
          }}>
            {/* Small leaf row */}
            <div style={{ display: "flex", gap: "6px", opacity: 0.5 }}>
              {["🌿","✦","🌿"].map((s,i) => <span key={i} style={{ fontSize:"13px" }}>{s}</span>)}
            </div>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300, fontSize: "clamp(26px,4vw,36px)",
              color: "#2c2416", margin: 0, letterSpacing: "-0.01em",
            }}>
              Dining in for something <em style={{ fontStyle:"italic", color:"#5a7a48" }}>special?</em>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300, fontSize: "14px",
              color: "#9e8f7a", margin: 0, maxWidth: "380px",
              lineHeight: 1.7,
            }}>
              Reserve a table and we'll take care of the rest. Perfect for date nights, family meals, and celebrations.
            </p>
            <NavLink to="/reservation" className="reserve-link" style={{ marginTop: "6px" }}>
              Make a Reservation
            </NavLink>
          </div>

        </div>
      </section>
    </>
  );
}