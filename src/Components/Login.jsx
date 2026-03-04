import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0f;
    overflow: hidden;
  }

  /* ── Particle canvas ── */
  #particle-canvas {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Page wrapper ── */
  .page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    .page { grid-template-columns: 1fr; }
    .left-panel { display: none; }
  }

  /* ── LEFT PANEL ── */
  .left-panel {
    position: relative;
    overflow: hidden;
    background: #0d0d15;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px;
  }

  .left-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 20% 80%, rgba(99,60,180,0.22) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 80% 20%, rgba(16,185,129,0.12) 0%, transparent 60%);
    pointer-events: none;
  }

  .grid-lines {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* Floating geometric shapes */
  .geo-shape {
    position: absolute;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 50%;
    animation: slowSpin 30s linear infinite;
  }
  .geo-1 { width: 320px; height: 320px; top: -80px; right: -80px; animation-duration: 35s; }
  .geo-2 { width: 200px; height: 200px; bottom: 100px; left: -60px; animation-direction: reverse; animation-duration: 25s; }
  .geo-3 {
    width: 140px; height: 140px;
    top: 45%; left: 50%; transform: translate(-50%, -50%);
    border-radius: 30px;
    animation: floatBox 8s ease-in-out infinite alternate;
    border-color: rgba(99,60,180,0.25);
  }

  @keyframes slowSpin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes floatBox {
    from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    to   { transform: translate(-50%, -55%) rotate(15deg) scale(1.08); }
  }

  /* Testimonial card */
  .testimonial-card {
    position: relative;
    z-index: 2;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    padding: 28px 32px;
    backdrop-filter: blur(12px);
    animation: fadeUp 0.8s ease 0.6s both;
  }

  .avatar-row {
    display: flex;
    gap: -8px;
    margin-bottom: 14px;
  }
  .avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 2px solid #0d0d15;
    margin-right: -8px;
    font-size: 14px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
  }

  /* Stars */
  .stars { color: #f59e0b; font-size: 13px; letter-spacing: 1px; }

  /* ── RIGHT PANEL ── */
  .right-panel {
    background: #0f0f18;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 40px;
    position: relative;
  }

  .right-panel::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 50% at 60% 30%, rgba(99,60,180,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── FORM CARD ── */
  .form-card {
    width: 100%;
    max-width: 420px;
    animation: cardSlide 0.7s cubic-bezier(0.22,1,0.36,1) both;
    position: relative;
    z-index: 1;
  }

  @keyframes cardSlide {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Staggered elements */
  .s1 { animation: fadeUp 0.6s ease 0.1s both; }
  .s2 { animation: fadeUp 0.6s ease 0.2s both; }
  .s3 { animation: fadeUp 0.6s ease 0.3s both; }
  .s4 { animation: fadeUp 0.6s ease 0.4s both; }
  .s5 { animation: fadeUp 0.6s ease 0.5s both; }
  .s6 { animation: fadeUp 0.6s ease 0.6s both; }
  .s7 { animation: fadeUp 0.6s ease 0.7s both; }

  /* ── INPUT ── */
  .input-wrap { position: relative; }

  .input-icon {
    position: absolute;
    left: 16px; top: 50%;
    transform: translateY(-50%);
    color: rgba(255,255,255,0.25);
    pointer-events: none;
    transition: color 0.3s;
    display: flex;
  }

  .form-input {
    width: 100%;
    padding: 15px 48px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    color: #fff;
    font-size: 0.93rem;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: all 0.3s ease;
  }

  .form-input::placeholder { color: rgba(255,255,255,0.22); }

  .form-input:focus {
    border-color: rgba(139,92,246,0.6);
    background: rgba(139,92,246,0.06);
    box-shadow: 0 0 0 4px rgba(139,92,246,0.12), 0 1px 3px rgba(0,0,0,0.3);
  }

  .form-input:focus + .input-icon,
  .input-wrap:focus-within .input-icon {
    color: rgba(139,92,246,0.8);
  }

  /* ── DIVIDER ── */
  .divider {
    display: flex; align-items: center; gap: 14px;
    color: rgba(255,255,255,0.2);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
  }
  .divider-line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  }

  /* ── SOCIAL BUTTON ── */
  .social-btn {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
    color: rgba(255,255,255,0.65);
    font-size: 0.85rem;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.25s;
    white-space: nowrap;
  }
  .social-btn:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.15);
    color: #fff;
    transform: translateY(-1px);
  }

  /* ── SUBMIT BUTTON ── */
  .submit-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 14px;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #4f46e5 100%);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    letter-spacing: 0.02em;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(109,40,217,0.4), 0 1px 3px rgba(0,0,0,0.3);
  }

  .submit-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(109,40,217,0.55), 0 2px 6px rgba(0,0,0,0.3);
  }
  .submit-btn:hover:not(:disabled)::before { opacity: 1; }
  .submit-btn:active:not(:disabled) { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  /* Loader spinner */
  @keyframes spin { to { transform: rotate(360deg); } }
  .spinner {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.65s linear infinite;
    display: inline-block;
  }

  /* Success animation */
  @keyframes successPop {
    0%   { transform: scale(0.5); opacity: 0; }
    70%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .success-icon { animation: successPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards; }

  /* Error shake */
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-6px); }
    40%, 80% { transform: translateX(6px); }
  }
  .shake { animation: shake 0.4s ease; }

  /* Password strength bar */
  .strength-bar {
    height: 3px;
    border-radius: 2px;
    transition: width 0.4s ease, background 0.4s ease;
  }

  /* Floating label effect */
  .label-text {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    color: rgba(255,255,255,0.4);
    margin-bottom: 8px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.3s;
  }
  .input-wrap:focus-within .label-text { color: rgba(139,92,246,0.9); }

  /* Checkbox */
  .checkbox {
    width: 17px; height: 17px;
    border: 1.5px solid rgba(255,255,255,0.18);
    border-radius: 5px;
    appearance: none;
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
    transition: all 0.2s;
    background: transparent;
  }
  .checkbox:checked {
    background: #7c3aed;
    border-color: #7c3aed;
  }
  .checkbox:checked::after {
    content: '';
    position: absolute;
    left: 4px; top: 1px;
    width: 6px; height: 9px;
    border: 2px solid white;
    border-top: none; border-left: none;
    transform: rotate(40deg);
  }
  .checkbox:focus { box-shadow: 0 0 0 3px rgba(124,58,237,0.25); outline: none; }
`;

// ─── Particle Background ────────────────────────────
function ParticleCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
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

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas id="particle-canvas" />;
}

// ─── SVG Icons ──────────────────────────────────────
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const EyeIcon = ({ open }) => open ? (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
) : (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

// ─── Password Strength ──────────────────────────────
function getStrength(password) {
  if (!password) return { score: 0, label: "", color: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const levels = [
    { label: "Weak", color: "#ef4444" },
    { label: "Fair", color: "#f97316" },
    { label: "Good", color: "#eab308" },
    { label: "Strong", color: "#22c55e" },
  ];
  return { score, ...levels[score - 1] ?? levels[0] };
}

// ─── MAIN COMPONENT ─────────────────────────────────
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);

  const strength = getStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      setShakeKey(k => k + 1);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      setShakeKey(k => k + 1);
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 2200);
  };

  return (
    <>
      <style>{styles}</style>
      <ParticleCanvas />

      <div className="page">
        {/* ── LEFT PANEL ── */}
        <div className="left-panel">
          <div className="grid-lines" />
          <div className="geo-shape geo-1" />
          <div className="geo-shape geo-2" />
          <div className="geo-shape geo-3" />

          {/* Logo */}
          <div style={{ position: "relative", zIndex: 2, animation: "fadeUp 0.6s ease both" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 6px 20px rgba(124,58,237,0.45)"
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>
                Nexus<span style={{ color: "rgba(139,92,246,0.9)" }}>.</span>
              </span>
            </div>
          </div>

          {/* Center content */}
          <div style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 0" }}>
            <div style={{ animation: "fadeUp 0.7s ease 0.2s both" }}>
              <p style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(139,92,246,0.8)", fontWeight: 600, marginBottom: 16 }}>
                ✦ Enterprise Platform
              </p>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "#fff",
                marginBottom: 20,
              }}>
                Where great<br />
                <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.55)" }}>ideas become</em><br />
                reality.
              </h1>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 340 }}>
                Join over 50,000 professionals who trust Nexus to power their most important work.
              </p>
            </div>

            {/* Feature list */}
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14, animation: "fadeUp 0.7s ease 0.35s both" }}>
              {[
                { icon: "⚡", text: "Blazing fast performance" },
                { icon: "🔒", text: "Enterprise-grade security" },
                { icon: "🌐", text: "Available in 40+ countries" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 9,
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, flexShrink: 0
                  }}>
                    {icon}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="testimonial-card">
            <div className="avatar-row" style={{ display: "flex", marginBottom: 12 }}>
              {[
                { bg: "#7c3aed", letter: "A" },
                { bg: "#0891b2", letter: "J" },
                { bg: "#059669", letter: "M" },
              ].map(({ bg, letter }) => (
                <div key={letter} className="avatar" style={{ background: bg, color: "#fff" }}>{letter}</div>
              ))}
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginLeft: 14, alignSelf: "center" }}>+2.4k this week</span>
            </div>
            <div className="stars">★★★★★</div>
            <p style={{ marginTop: 10, color: "rgba(255,255,255,0.55)", fontSize: "0.87rem", lineHeight: 1.65, fontStyle: "italic" }}>
              "Nexus completely transformed how our team collaborates. The performance is unmatched."
            </p>
            <p style={{ marginTop: 10, color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", fontWeight: 500 }}>
              — Aria Chen, Head of Product @ Vercel
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="right-panel">
          <div className="form-card">

            {/* Header */}
            <div className="s1" style={{ marginBottom: 36 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.1rem", fontWeight: 600, color: "#fff", marginBottom: 6, letterSpacing: "-0.01em" }}>
                Sign in
              </h2>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.88rem" }}>
                New here?{" "}
                <a href="#" style={{ color: "#818cf8", textDecoration: "none", fontWeight: 500 }}
                  onMouseOver={e => e.target.style.color = "#a5b4fc"}
                  onMouseOut={e => e.target.style.color = "#818cf8"}
                >
                  Create a free account →
                </a>
              </p>
            </div>

            {/* Success State */}
            {success ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div className="success-icon" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 72, height: 72, borderRadius: "50%",
                  background: "rgba(34,197,94,0.12)",
                  border: "2px solid rgba(34,197,94,0.35)",
                  marginBottom: 20,
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#fff", marginBottom: 8 }}>Welcome back!</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.88rem" }}>You've been signed in successfully.</p>
              </div>
            ) : (
              <>
                {/* Social Buttons */}
                <div className="s2" style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  <button className="social-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button className="social-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </button>
                </div>

                <div className="s3 divider" style={{ marginBottom: 24 }}>
                  <div className="divider-line" />
                  <span>OR</span>
                  <div className="divider-line" />
                </div>

                {/* Error Banner */}
                {error && (
                  <div key={shakeKey} className="shake" style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    borderRadius: 12, padding: "11px 16px",
                    marginBottom: 20,
                    display: "flex", alignItems: "center", gap: 10,
                    color: "#fca5a5", fontSize: "0.85rem",
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Email */}
                  <div className="s4 input-wrap" style={{ marginBottom: 20 }}>
                    <label className="label-text">Email address</label>
                    <div style={{ position: "relative" }}>
                      <span className="input-icon">
                        <MailIcon />
                      </span>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="s5 input-wrap" style={{ marginBottom: 10 }}>
                    <label className="label-text">Password</label>
                    <div style={{ position: "relative" }}>
                      <span className="input-icon">
                        <LockIcon />
                      </span>
                      <input
                        className="form-input"
                        type={showPass ? "text" : "password"}
                        placeholder="••••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        style={{ paddingRight: 48 }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(p => !p)}
                        style={{
                          position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                          background: "none", border: "none", cursor: "pointer",
                          color: "rgba(255,255,255,0.3)", display: "flex", padding: 4,
                          transition: "color 0.2s",
                        }}
                        onMouseOver={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
                        onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
                      >
                        <EyeIcon open={showPass} />
                      </button>
                    </div>

                    {/* Strength meter */}
                    {password && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ display: "flex", gap: 5, marginBottom: 5 }}>
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{
                              flex: 1, height: 3, borderRadius: 2,
                              background: i <= strength.score ? strength.color : "rgba(255,255,255,0.08)",
                              transition: "background 0.3s",
                            }} />
                          ))}
                        </div>
                        <span style={{ fontSize: "0.75rem", color: strength.color }}>{strength.label}</span>
                      </div>
                    )}
                  </div>

                  {/* Remember + Forgot */}
                  <div className="s5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, marginTop: 16 }}>
                    <label style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer", userSelect: "none" }}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={remember}
                        onChange={e => setRemember(e.target.checked)}
                      />
                      <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.45)" }}>Remember me</span>
                    </label>
                    <a href="#" style={{ fontSize: "0.85rem", color: "#818cf8", textDecoration: "none", fontWeight: 500 }}
                      onMouseOver={e => e.target.style.color = "#a5b4fc"}
                      onMouseOut={e => e.target.style.color = "#818cf8"}
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit */}
                  <div className="s6">
                    <button className="submit-btn" type="submit" disabled={loading}>
                      {loading ? (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                          <span className="spinner" />
                          Signing in...
                        </span>
                      ) : (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                          Sign in
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                          </svg>
                        </span>
                      )}
                    </button>
                  </div>
                </form>

                {/* Terms */}
                <p className="s7" style={{ textAlign: "center", marginTop: 24, fontSize: "0.78rem", color: "rgba(255,255,255,0.2)", lineHeight: 1.6 }}>
                  By signing in, you agree to our{" "}
                  <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}