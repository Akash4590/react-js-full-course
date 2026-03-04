import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

/* ============================================================
   STYLES
   ============================================================ */
const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Outfit', sans-serif;
      background: #04040a;
      color: #e2e8f0;
      overflow: hidden;
      height: 100vh;
      width: 100vw;
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes glitch1 {
      0%,100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
      20%      { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
      40%      { clip-path: inset(60% 0 20% 0); transform: translate(-4px, 0); }
      60%      { clip-path: inset(10% 0 80% 0); transform: translate(4px, 0); }
      80%      { clip-path: inset(80% 0 5% 0);  transform: translate(-4px, 0); }
    }
    @keyframes glitch2 {
      0%,100% { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0); color: #06b6d4; }
      25%      { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 0); color: #f43f5e; }
      50%      { clip-path: inset(75% 0 10% 0); transform: translate(3px, 0); color: #06b6d4; }
      75%      { clip-path: inset(40% 0 40% 0); transform: translate(-3px, 0); color: #f43f5e; }
    }
    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes float {
      0%,100% { transform: translateY(0px) rotate(0deg); }
      33%      { transform: translateY(-12px) rotate(1.5deg); }
      66%      { transform: translateY(-6px) rotate(-1.5deg); }
    }
    @keyframes orbPulse {
      0%, 100% { transform: scale(1); opacity: 0.12; }
      50%       { transform: scale(1.15); opacity: 0.2; }
    }
    @keyframes gridMove {
      from { background-position: 0 0; }
      to   { background-position: 60px 60px; }
    }
    @keyframes blink {
      0%,100% { opacity: 1; } 50% { opacity: 0; }
    }
    @keyframes dashRotate {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: -200; }
    }
    @keyframes particleDrift {
      0%   { transform: translate(0, 0) scale(1); opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
    @keyframes ringExpand {
      from { r: 0; opacity: 0.6; }
      to   { r: 120; opacity: 0; }
    }

    /* ── 404 Giant Text ── */
    .num-404 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(160px, 22vw, 280px);
      line-height: 0.85;
      letter-spacing: -4px;
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(255,255,255,0.08);
      position: relative;
      user-select: none;
      animation: fadeIn 0.6s ease 0.1s both;
    }

    /* Glitch layers */
    .num-404::before,
    .num-404::after {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      font-family: 'Bebas Neue', sans-serif;
      font-size: inherit;
      line-height: inherit;
      letter-spacing: inherit;
    }
    .num-404::before {
      color: rgba(244,63,94,0.55);
      animation: glitch1 3.5s infinite;
      -webkit-text-stroke: 0;
    }
    .num-404::after {
      color: rgba(6,182,212,0.55);
      animation: glitch2 3.5s infinite 0.1s;
      -webkit-text-stroke: 0;
    }

    /* ── Scanline overlay ── */
    .scanline {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }
    .scanline::after {
      content: '';
      position: absolute;
      left: 0; right: 0;
      height: 3px;
      background: linear-gradient(transparent, rgba(6,182,212,0.08), transparent);
      animation: scanline 5s linear infinite;
    }

    /* ── Noise texture ── */
    .noise {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      opacity: 0.025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 200px;
    }

    /* ── Buttons ── */
    .btn-home {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 15px 34px;
      border: none;
      border-radius: 50px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: #fff;
      font-family: 'Outfit', sans-serif;
      font-size: 0.93rem;
      font-weight: 600;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: transform 0.25s, box-shadow 0.25s;
      box-shadow: 0 6px 24px rgba(99,102,241,0.45);
    }
    .btn-home:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 34px rgba(99,102,241,0.6);
    }
    .btn-home:active { transform: translateY(0); }

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 30px;
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.03);
      color: rgba(255,255,255,0.65);
      font-family: 'Outfit', sans-serif;
      font-size: 0.93rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-back:hover {
      background: rgba(255,255,255,0.07);
      border-color: rgba(255,255,255,0.25);
      color: #fff;
      transform: translateY(-2px);
    }

    /* ── Quick links ── */
    .quick-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 13px 20px;
      border-radius: 14px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      color: rgba(255,255,255,0.55);
      font-size: 0.88rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.25s;
    }
    .quick-link:hover {
      background: rgba(99,102,241,0.1);
      border-color: rgba(99,102,241,0.35);
      color: #fff;
      transform: translateX(4px);
    }

    /* ── Stagger ── */
    .s1 { animation: fadeUp 0.6s ease 0.2s both; }
    .s2 { animation: fadeUp 0.6s ease 0.35s both; }
    .s3 { animation: fadeUp 0.6s ease 0.5s both; }
    .s4 { animation: fadeUp 0.6s ease 0.65s both; }
    .s5 { animation: fadeUp 0.6s ease 0.8s both; }
    .s6 { animation: fadeUp 0.6s ease 0.95s both; }

    /* ── Terminal blink ── */
    .terminal-cursor {
      display: inline-block;
      width: 10px; height: 1.1em;
      background: #06b6d4;
      vertical-align: middle;
      margin-left: 2px;
      animation: blink 0.9s step-end infinite;
    }
  `}</style>
);

/* ============================================================
   PARTICLE SYSTEM
   ============================================================ */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.35 + 0.05,
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.06 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Dots
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
  );
}

/* ============================================================
   SVG RADAR / CIRCLE ANIMATION
   ============================================================ */
function RadarCircle() {
  return (
    <div style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600, height: 600,
      pointerEvents: "none",
      zIndex: 0,
    }}>
      <svg viewBox="0 0 300 300" width="600" height="600">
        {/* Static rings */}
        {[130, 100, 70, 40].map((r, i) => (
          <circle key={r} cx="150" cy="150" r={r}
            fill="none"
            stroke="rgba(99,102,241,0.08)"
            strokeWidth="1"
          />
        ))}
        {/* Dashed spinning ring */}
        <circle cx="150" cy="150" r="115"
          fill="none"
          stroke="rgba(99,102,241,0.15)"
          strokeWidth="1"
          strokeDasharray="8 6"
          style={{ animation: "dashRotate 12s linear infinite", transformOrigin: "150px 150px" }}
        />
        {/* Pulsing ring */}
        <circle cx="150" cy="150" r="0"
          fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5"
          style={{ animation: "ringExpand 3s ease-out infinite" }}
        />
        <circle cx="150" cy="150" r="0"
          fill="none" stroke="rgba(6,182,212,0.25)" strokeWidth="1"
          style={{ animation: "ringExpand 3s ease-out infinite 1.5s" }}
        />
        {/* Cross hairs */}
        <line x1="150" y1="20" x2="150" y2="280" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="20" y1="150" x2="280" y2="150" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ============================================================
   MAIN 404 PAGE
   ============================================================ */
export default function NotFoundPage() {
  const [seconds, setSeconds] = useState(15);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  // Parallax on mouse move
  useEffect(() => {
    const fn = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const quickLinks = [
    { icon: "🏠", label: "Home", href: "/" },
    { icon: "📊", label: "Dashboard", href: "/dashboard" },
    { icon: "📝", label: "Blog", href: "/blog" },
    { icon: "💬", label: "Support", href: "/support" },
  ];

  return (
    <>
      <Styles />
      <div className="noise" />
      <Particles />

      {/* Moving grid background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        animation: "gridMove 8s linear infinite",
        pointerEvents: "none",
      }} />

      {/* Ambient orbs */}
      <div style={{ position: "fixed", width: 700, height: 700, borderRadius: "50%", background: "#6366f1", filter: "blur(120px)", top: -200, left: -200, zIndex: 0, animation: "orbPulse 8s ease-in-out infinite", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ position: "fixed", width: 500, height: 500, borderRadius: "50%", background: "#06b6d4", filter: "blur(100px)", bottom: -150, right: -100, zIndex: 0, animation: "orbPulse 10s ease-in-out infinite 2s", opacity: 0.08, pointerEvents: "none" }} />

      {/* Scanline */}
      <div className="scanline" style={{ position: "fixed", zIndex: 1 }} />

      {/* Main content */}
      <div style={{
        position: "relative", zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
          maxWidth: 1100,
          width: "100%",
        }}>

          {/* ── LEFT: Text content ── */}
          <div style={{ position: "relative", zIndex: 3 }}>

            {/* Error code badge */}
            <div className="s1" style={{ marginBottom: 20 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px",
                borderRadius: "6px",
                background: "rgba(244,63,94,0.1)",
                border: "1px solid rgba(244,63,94,0.25)",
                fontFamily: "'Outfit', monospace",
                fontSize: "0.76rem",
                fontWeight: 700,
                color: "#fb7185",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f43f5e", boxShadow: "0 0 8px rgba(244,63,94,0.6)" }} />
                Error 404 — Page not found
              </span>
            </div>

            {/* Giant 404 */}
            <div
              className="num-404"
              data-text="404"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.25}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              404
            </div>

            {/* Headline */}
            <h1 className="s2" style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginTop: 16,
              marginBottom: 12,
            }}>
              Oops — lost in the void?
            </h1>

            {/* Terminal-style description */}
            <div className="s3" style={{
              fontFamily: "monospace",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12,
              padding: "14px 18px",
              marginBottom: 32,
              lineHeight: 1.8,
            }}>
              <span style={{ color: "#4ade80" }}>nexus@system</span>
              <span style={{ color: "rgba(255,255,255,0.2)" }}> ~ </span>
              <span style={{ color: "#60a5fa" }}>GET</span>
              <span style={{ color: "#fbbf24" }}> /this-page </span>
              <span style={{ color: "#f87171" }}>404 Not Found</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.25)" }}>→ The page you're looking for doesn't exist or was moved.</span>
              <span className="terminal-cursor" />
            </div>

            {/* CTA buttons */}
            <div className="s4" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 44 }}>
              <Link to="/">
              <button className="btn-home">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Back to Home
              </button>
              </Link>
              <Link to="/">
              <button className="btn-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Go Back
              </button>
              </Link>
            </div>

            {/* Quick links */}
            <div className="s5">
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
                Or try one of these
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, maxWidth: 380 }}>
                {quickLinks.map(({ icon, label }) => (
                  <a key={label} href="#" className="quick-link">
                    <span>{icon}</span>
                    <span>{label}</span>
                    <svg style={{ marginLeft: "auto" }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Auto-redirect notice */}
            {seconds > 0 && (
              <div className="s6" style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: `conic-gradient(rgba(99,102,241,0.7) ${(seconds / 15) * 360}deg, rgba(255,255,255,0.06) 0deg)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#04040a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#818cf8" }}>{seconds}</span>
                  </div>
                </div>
                <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
                  Redirecting to home in <strong style={{ color: "rgba(255,255,255,0.55)" }}>{seconds}s</strong>
                </span>
              </div>
            )}
          </div>

          {/* ── RIGHT: Visual ── */}
          <div style={{
            position: "relative",
            width: 340, height: 340,
            flexShrink: 0,
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: "transform 0.15s ease-out",
          }}>
            <RadarCircle />

            {/* Floating astronaut illustration */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "float 6s ease-in-out infinite",
              fontSize: "7rem",
              filter: "drop-shadow(0 0 30px rgba(99,102,241,0.35))",
              zIndex: 2,
            }}>
              🧑‍🚀
            </div>

            {/* Orbiting dot */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              width: 220, height: 220, marginTop: -110, marginLeft: -110,
              animation: "dashRotate 8s linear infinite",
              transformOrigin: "center center",
            }}>
              <div style={{
                position: "absolute", top: 0, left: "50%",
                width: 10, height: 10, marginLeft: -5, marginTop: -5,
                background: "#6366f1",
                borderRadius: "50%",
                boxShadow: "0 0 12px rgba(99,102,241,0.8)",
              }} />
            </div>

            {/* Floating badges around */}
            {[
              { label: "404", top: "6%", right: "8%", color: "#f43f5e", bg: "rgba(244,63,94,0.12)" },
              { label: "NULL", bottom: "12%", left: "2%", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
              { label: "ERR", top: "42%", right: "-4%", color: "#06b6d4", bg: "rgba(6,182,212,0.1)" },
            ].map(({ label, color, bg, ...pos }) => (
              <div key={label} style={{
                position: "absolute", ...pos,
                padding: "6px 14px",
                borderRadius: "50px",
                background: bg,
                border: `1px solid ${color}30`,
                color: color,
                fontFamily: "monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                zIndex: 3,
                animation: `float ${5 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
              }}>
                {label}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "14px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "rgba(4,4,10,0.7)",
        backdropFilter: "blur(16px)",
        zIndex: 10,
        animation: "fadeUp 0.6s ease 1.1s both",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #6366f1, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>Nexus</span>
        </div>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
          Need help?{" "}
          <a href="#" style={{ color: "#818cf8", textDecoration: "none", fontWeight: 500 }}>Contact support →</a>
        </p>
        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.15)", fontFamily: "monospace" }}>
          STATUS: <span style={{ color: "#4ade80" }}>ALL SYSTEMS OPERATIONAL</span>
        </p>
      </div>
    </>
  );
}