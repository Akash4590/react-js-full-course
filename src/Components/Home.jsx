
// function Home(){
// return(
// <div>
// <h1>Home page</h1>              
// </div>              
// )              
// }
// export default Home

import { useState, useEffect, useRef } from "react";

/* ============================================================
   GLOBAL STYLES
   ============================================================ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Mulish', sans-serif;
      background: #07070e;
      color: #e2e8f0;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: #07070e; }
    ::-webkit-scrollbar-thumb { background: #3b3b6b; border-radius: 3px; }

    @keyframes fadeUp  { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn  { from { opacity:0; }                             to { opacity:1; } }
    @keyframes scaleIn { from { opacity:0; transform:scale(0.85); }     to { opacity:1; transform:scale(1); } }
    @keyframes float   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
    @keyframes orb     { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(40px,25px) scale(1.1); } }
    @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
    @keyframes blink   { 0%,100% { opacity:1; } 50% { opacity:0; } }
    @keyframes drawLine { from { width:0; } to { width:100%; } }
    @keyframes badgePop { 0% { transform:scale(0.5) rotate(-5deg); opacity:0; } 70% { transform:scale(1.08) rotate(2deg); opacity:1; } 100% { transform:scale(1) rotate(0deg); opacity:1; } }
    @keyframes ringPulse { 0% { transform:scale(1); opacity:0.6; } 100% { transform:scale(1.9); opacity:0; } }

    .fade-up-1 { animation: fadeUp 0.7s ease 0.1s  both; }
    .fade-up-2 { animation: fadeUp 0.7s ease 0.25s both; }
    .fade-up-3 { animation: fadeUp 0.7s ease 0.4s  both; }
    .fade-up-4 { animation: fadeUp 0.7s ease 0.55s both; }
    .fade-up-5 { animation: fadeUp 0.7s ease 0.7s  both; }
    .fade-in-1 { animation: fadeIn 0.8s ease 0.2s  both; }

    .reveal { opacity:0; transform:translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }
    .reveal-delay-1 { transition-delay:0.1s; }
    .reveal-delay-2 { transition-delay:0.2s; }
    .reveal-delay-3 { transition-delay:0.3s; }
    .reveal-delay-4 { transition-delay:0.4s; }

    .btn-primary {
      padding:14px 32px; border:none; border-radius:50px;
      background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 50%,#06b6d4 100%);
      background-size:200% auto; color:#fff; font-size:0.92rem; font-weight:600;
      font-family:'Mulish',sans-serif; cursor:pointer;
      transition:transform 0.25s,box-shadow 0.25s;
      box-shadow:0 6px 24px rgba(99,102,241,0.4); letter-spacing:0.02em;
      display:inline-flex; align-items:center; gap:8px;
    }
    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 10px 36px rgba(99,102,241,0.55); }

    .btn-outline {
      padding:13px 30px; border:1px solid rgba(255,255,255,0.15); border-radius:50px;
      background:transparent; color:rgba(255,255,255,0.75); font-size:0.92rem; font-weight:500;
      font-family:'Mulish',sans-serif; cursor:pointer; transition:all 0.25s;
      display:inline-flex; align-items:center; gap:8px;
    }
    .btn-outline:hover { border-color:rgba(255,255,255,0.35); color:#fff; background:rgba(255,255,255,0.05); transform:translateY(-2px); }

    .glass { background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.07); border-radius:20px; backdrop-filter:blur(12px); }

    .feature-card {
      padding:32px 28px; border-radius:20px;
      background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.07);
      transition:transform 0.3s,border-color 0.3s,box-shadow 0.3s; cursor:default;
    }
    .feature-card:hover { transform:translateY(-6px); border-color:rgba(99,102,241,0.35); box-shadow:0 20px 50px rgba(99,102,241,0.15); }

    .stat-card {
      padding:24px 16px; border-radius:18px;
      background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07);
      text-align:center; transition:transform 0.3s,border-color 0.3s;
      overflow:hidden; min-width:0; word-break:break-word;
    }
    .stat-card:hover { transform:translateY(-4px); border-color:rgba(99,102,241,0.3); }

    .avatar { width:36px; height:36px; border-radius:50%; border:2px solid #07070e; margin-left:-10px; font-size:13px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }

    .cursor { display:inline-block; width:2px; height:1em; background:#818cf8; margin-left:2px; vertical-align:middle; animation:blink 0.75s step-end infinite; }

    .chip { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:50px; font-size:0.78rem; font-weight:600; letter-spacing:0.04em; }

    .heading-underline { position:relative; display:inline-block; }
    .heading-underline::after { content:''; position:absolute; bottom:-6px; left:0; height:3px; border-radius:2px; background:linear-gradient(90deg,#6366f1,#06b6d4); animation:drawLine 0.8s ease 0.6s both; }

    .scroll-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.5); animation:float 1.5s ease-in-out infinite; }

    .orb { position:absolute; border-radius:50%; filter:blur(80px); opacity:0.15; pointer-events:none; }
  `}</style>
);

/* ── Scroll Reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Typing Animation ── */
const words = ["Innovate.", "Build.", "Scale.", "Succeed."];
function useTyping() {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word  = words[wordIdx];
    const delay = deleting ? 60 : charIdx === word.length ? 1400 : 90;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length)       { setDisplay(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }
      else if (!deleting && charIdx === word.length) { setDeleting(true); }
      else if (deleting && charIdx > 0)             { setDisplay(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }
      else                                           { setDeleting(false); setWordIdx(i => (i + 1) % words.length); }
    }, delay);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);
  return display;
}

/* ============================================================  HERO  ============================================================ */
function Hero() {
  const typed = useTyping();
  return (
    <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"120px 24px 80px", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div className="orb" style={{ width:600, height:600, background:"#6366f1", top:-200, left:"50%", transform:"translateX(-50%)", animation:"orb 14s ease-in-out infinite" }} />
      <div className="orb" style={{ width:400, height:400, background:"#06b6d4", bottom:-100, right:-100, animation:"orb 10s ease-in-out infinite reverse" }} />
      <div className="orb" style={{ width:300, height:300, background:"#8b5cf6", top:"40%", left:-80, animation:"orb 18s ease-in-out infinite" }} />

      <div className="fade-up-1" style={{ marginBottom:28 }}>
        <span style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"7px 18px", background:"rgba(99,102,241,0.12)", border:"1px solid rgba(99,102,241,0.3)", borderRadius:"50px", fontSize:"0.8rem", fontWeight:600, color:"#a5b4fc", letterSpacing:"0.05em", animation:"badgePop 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}>
          <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", animation:"ringPulse 1.5s ease-out infinite" }} />
          Now live — Version 3.0 is here
        </span>
      </div>

      <h1 className="fade-up-2" style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.8rem,6vw,5.5rem)", fontWeight:800, lineHeight:1.08, letterSpacing:"-0.03em", color:"#fff", maxWidth:820, marginBottom:14 }}>
        The platform to{" "}
        <span style={{ background:"linear-gradient(135deg,#818cf8 0%,#06b6d4 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{typed}</span>
        <span className="cursor" />
      </h1>

      <p className="fade-up-3" style={{ fontSize:"clamp(1rem,2vw,1.2rem)", color:"rgba(255,255,255,0.45)", maxWidth:560, lineHeight:1.75, fontWeight:300, marginBottom:44 }}>
        Nexus brings together design, engineering, and analytics in one elegant workspace. Move fast without breaking things.
      </p>

      <div className="fade-up-4" style={{ display:"flex", gap:14, flexWrap:"wrap", justifyContent:"center", marginBottom:56 }}>
        <button className="btn-primary">
          Start for free
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        <button className="btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
          Watch demo
        </button>
      </div>

      <div className="fade-up-5" style={{ display:"flex", alignItems:"center", gap:14, flexWrap:"wrap", justifyContent:"center" }}>
        <div style={{ display:"flex" }}>
          {[{ bg:"#6366f1",l:"A"},{bg:"#0891b2",l:"J"},{bg:"#059669",l:"M"},{bg:"#d97706",l:"R"},{bg:"#dc2626",l:"S"}].map(({bg,l}) => (
            <div key={l} className="avatar" style={{ background:bg, color:"#fff" }}>{l}</div>
          ))}
        </div>
        <div>
          <div style={{ display:"flex", gap:2, marginBottom:3 }}>{"★★★★★".split("").map((s,i)=><span key={i} style={{color:"#fbbf24",fontSize:"13px"}}>{s}</span>)}</div>
          <p style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.8rem" }}>Loved by <strong style={{color:"rgba(255,255,255,0.75)"}}>50,000+</strong> professionals</p>
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="fade-in-1" style={{ marginTop:72, width:"100%", maxWidth:800, position:"relative", animation:"scaleIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.8s both" }}>
        <div style={{ position:"absolute", inset:"-2px", borderRadius:26, background:"linear-gradient(135deg,rgba(99,102,241,0.4),rgba(6,182,212,0.3))", filter:"blur(20px)", zIndex:-1 }} />
        <div style={{ background:"rgba(15,15,28,0.9)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:24, padding:"24px", backdropFilter:"blur(20px)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:20 }}>
            {["#ef4444","#fbbf24","#22c55e"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c,opacity:0.7}}/>)}
            <div style={{ flex:1, height:24, borderRadius:6, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.06)", marginLeft:8, display:"flex", alignItems:"center", paddingLeft:10 }}>
              <span style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.25)"}}>app.nexus.io/dashboard</span>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginBottom:16 }}>
            {[{label:"Revenue",value:"$84.2K",color:"#6366f1",pct:"72%"},{label:"Users",value:"24.8K",color:"#06b6d4",pct:"58%"},{label:"Growth",value:"+18.4%",color:"#8b5cf6",pct:"88%"}].map(({label,value,color,pct})=>(
              <div key={label} style={{background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"16px",border:"1px solid rgba(255,255,255,0.05)"}}>
                <p style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{label}</p>
                <p style={{fontSize:"1.3rem",fontWeight:700,color:"#fff",fontFamily:"'Syne',sans-serif",marginBottom:10}}>{value}</p>
                <div style={{height:3,background:"rgba(255,255,255,0.06)",borderRadius:2}}><div style={{width:pct,height:"100%",background:color,borderRadius:2}}/></div>
              </div>
            ))}
          </div>
          <div style={{ height:80, background:"rgba(255,255,255,0.02)", borderRadius:12, border:"1px solid rgba(255,255,255,0.04)", display:"flex", alignItems:"center", justifyContent:"center", gap:4, overflow:"hidden" }}>
            {Array.from({length:28},(_,i)=>{
              const h=20+Math.sin(i*0.7)*14+(i*0.5%10);
              return <div key={i} style={{width:10,height:`${h}px`,borderRadius:3,background:i%5===0?"linear-gradient(to top,#6366f1,#818cf8)":"rgba(255,255,255,0.06)",flexShrink:0,animation:`fadeIn 0.4s ease ${i*0.03}s both`}}/>;
            })}
          </div>
        </div>
      </div>

      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
        <span style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.2)",letterSpacing:"0.1em",textTransform:"uppercase"}}>Scroll</span>
        <div style={{width:24,height:38,border:"1.5px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:5}}>
          <div className="scroll-dot"/>
        </div>
      </div>
    </section>
  );
}

/* ============================================================  LOGOS  ============================================================ */
function LogosStrip() {
  const logos = ["Stripe","Vercel","Linear","Figma","Notion","Loom","Supabase","GitHub"];
  return (
    <section style={{padding:"32px 24px 64px"}}>
      <p className="reveal" style={{textAlign:"center",fontSize:"0.78rem",color:"rgba(255,255,255,0.25)",letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:600,marginBottom:28}}>Trusted by teams at</p>
      <div style={{display:"flex",flexWrap:"wrap",gap:32,justifyContent:"center",alignItems:"center"}}>
        {logos.map((name,i)=>(
          <div key={name} className="reveal" style={{transitionDelay:`${i*0.06}s`,fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"0.95rem",color:"rgba(255,255,255,0.18)",letterSpacing:"0.04em",cursor:"default",transition:"color 0.3s"}}
            onMouseOver={e=>e.target.style.color="rgba(255,255,255,0.55)"}
            onMouseOut={e=>e.target.style.color="rgba(255,255,255,0.18)"}
          >{name}</div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================  FEATURES  ============================================================ */
const features = [
  {icon:"⚡",title:"Blazing Fast",       desc:"Built on edge infrastructure with sub-100ms response times globally. Your users never wait.",           color:"#6366f1"},
  {icon:"🔒",title:"Secure by Default",  desc:"End-to-end encryption, SOC 2 compliant, and zero-trust architecture out of the box.",                 color:"#06b6d4"},
  {icon:"📊",title:"Deep Analytics",     desc:"Real-time dashboards that surface insights you actually need. No data science degree required.",        color:"#8b5cf6"},
  {icon:"🤝",title:"Team Collaboration", desc:"Built-in multiplayer editing, comments, and presence. Work together, everywhere.",                     color:"#ec4899"},
  {icon:"🔌",title:"1000+ Integrations", desc:"Connect Slack, Notion, GitHub, and everything in your stack in seconds.",                             color:"#f59e0b"},
  {icon:"🎨",title:"Fully Customizable", desc:"White-label ready. Adapt every pixel to match your brand identity.",                                  color:"#10b981"},
];

function Features() {
  return (
    <section style={{padding:"96px 24px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:64}}>
        <span className="reveal chip" style={{background:"rgba(99,102,241,0.12)",color:"#818cf8",border:"1px solid rgba(99,102,241,0.25)",marginBottom:20}}>✦ Features</span>
        <h2 className="reveal heading-underline" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",marginTop:16}}>Everything you need</h2>
        <p className="reveal" style={{color:"rgba(255,255,255,0.4)",maxWidth:480,margin:"20px auto 0",lineHeight:1.7}}>We've thought of everything so you don't have to. Focus on building great products.</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:20}}>
        {features.map(({icon,title,desc,color},i)=>(
          <div key={title} className={`feature-card reveal reveal-delay-${(i%4)+1}`}>
            <div style={{width:48,height:48,borderRadius:14,background:`${color}18`,border:`1px solid ${color}35`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,marginBottom:20}}>{icon}</div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:"1.1rem",color:"#fff",marginBottom:10}}>{title}</h3>
            <p style={{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem",lineHeight:1.7}}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================  STATS  ============================================================ */
function useCountUp(target, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => { start = Math.min(start+step,target); setVal(start); if(start>=target) clearInterval(timer); }, 20);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return val;
}

function StatCard({ value, suffix, label, color, delay }) {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const count = useCountUp(value, triggered);
  useEffect(() => {
    const io = new IntersectionObserver(([e])=>{ if(e.isIntersecting) setTriggered(true); },{threshold:0.5});
    if(ref.current) io.observe(ref.current);
    return ()=>io.disconnect();
  }, []);
  return (
    <div ref={ref} className="stat-card reveal" style={{transitionDelay:delay}}>
      <div style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.6rem,3.5vw,2.4rem)",fontWeight:800,color:"#fff",marginBottom:6,letterSpacing:"-0.02em",lineHeight:1.1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
        <span style={{background:`linear-gradient(135deg,${color},#fff)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{count.toLocaleString()}</span>
        <span style={{color,fontSize:"clamp(1rem,2.5vw,1.5rem)"}}>{suffix}</span>
      </div>
      <p style={{color:"rgba(255,255,255,0.4)",fontSize:"clamp(0.72rem,1.5vw,0.88rem)",fontWeight:500,lineHeight:1.4}}>{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section style={{padding:"64px 24px 96px",maxWidth:900,margin:"0 auto"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:16}}>
        <StatCard value={50000} suffix="+"   label="Active users"       color="#6366f1" delay="0s"   />
        <StatCard value={99}    suffix=".9%" label="Uptime SLA"          color="#06b6d4" delay="0.1s" />
        <StatCard value={1000}  suffix="+"   label="Integrations"        color="#8b5cf6" delay="0.2s" />
        <StatCard value={140}   suffix="+"   label="Countries supported" color="#10b981" delay="0.3s" />
      </div>
    </section>
  );
}

/* ============================================================  TESTIMONIALS  ============================================================ */
const testimonials = [
  {name:"Sarah K.", role:"CTO @ Loom",         text:"Nexus cut our shipping time in half. It's the first tool I recommend to every engineering team.", avatar:"#6366f1",letter:"S"},
  {name:"Marcus L.",role:"Design Lead @ Figma", text:"The attention to detail is extraordinary. It feels like it was built specifically for our workflow.",avatar:"#06b6d4",letter:"M"},
  {name:"Priya R.", role:"Founder @ Vercel",    text:"Finally, a platform that doesn't require a PhD to configure. My team adopted it in hours.",        avatar:"#8b5cf6",letter:"P"},
];

function Testimonials() {
  return (
    <section style={{padding:"64px 24px 96px",maxWidth:1100,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:56}}>
        <span className="reveal chip" style={{background:"rgba(6,182,212,0.1)",color:"#67e8f9",border:"1px solid rgba(6,182,212,0.2)",marginBottom:16}}>✦ Testimonials</span>
        <h2 className="reveal" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,3.5vw,2.6rem)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",marginTop:16}}>Loved by the best teams</h2>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
        {testimonials.map(({name,role,text,avatar,letter},i)=>(
          <div key={name} className={`glass reveal reveal-delay-${i+1}`} style={{padding:"28px",transition:"transform 0.3s,border-color 0.3s"}}
            onMouseOver={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.borderColor="rgba(99,102,241,0.3)";}}
            onMouseOut={e=>{e.currentTarget.style.transform="";e.currentTarget.style.borderColor="";}}
          >
            <div style={{display:"flex",gap:3,marginBottom:16}}>{"★★★★★".split("").map((s,j)=><span key={j} style={{color:"#fbbf24",fontSize:"14px"}}>{s}</span>)}</div>
            <p style={{color:"rgba(255,255,255,0.6)",fontSize:"0.92rem",lineHeight:1.75,marginBottom:22,fontStyle:"italic"}}>"{text}"</p>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:40,height:40,borderRadius:"50%",background:avatar,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,color:"#fff",fontSize:"14px"}}>{letter}</div>
              <div>
                <p style={{fontWeight:600,color:"#fff",fontSize:"0.9rem"}}>{name}</p>
                <p style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem"}}>{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================  CTA  ============================================================ */
function CTABanner() {
  return (
    <section style={{padding:"0 24px 120px",maxWidth:900,margin:"0 auto"}}>
      <div className="reveal" style={{position:"relative",borderRadius:28,overflow:"hidden",padding:"64px 48px",textAlign:"center",background:"linear-gradient(135deg,rgba(99,102,241,0.15) 0%,rgba(6,182,212,0.12) 100%)",border:"1px solid rgba(99,102,241,0.25)"}}>
        <div style={{position:"absolute",width:300,height:300,borderRadius:"50%",background:"#6366f1",filter:"blur(80px)",opacity:0.12,top:-100,left:-50,pointerEvents:"none"}}/>
        <div style={{position:"absolute",width:200,height:200,borderRadius:"50%",background:"#06b6d4",filter:"blur(60px)",opacity:0.12,bottom:-60,right:-40,pointerEvents:"none"}}/>
        <span style={{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 16px",borderRadius:"50px",background:"rgba(74,222,128,0.12)",border:"1px solid rgba(74,222,128,0.25)",color:"#4ade80",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.05em",marginBottom:24}}>🚀 Free forever plan available</span>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,4vw,2.8rem)",fontWeight:800,color:"#fff",letterSpacing:"-0.02em",marginBottom:16}}>Ready to get started?</h2>
        <p style={{color:"rgba(255,255,255,0.45)",maxWidth:440,margin:"0 auto 36px",lineHeight:1.7}}>Join 50,000+ teams already using Nexus to build faster, ship smarter, and grow confidently.</p>
        <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
          <button className="btn-primary">
            Start for free — no credit card
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button className="btn-outline">Talk to sales</button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================  FOOTER  ============================================================ */
function Footer() {
  return (
    <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"48px 40px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:20,maxWidth:1100,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:28,height:28,borderRadius:8,background:"linear-gradient(135deg,#6366f1,#06b6d4)",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700,color:"#fff",fontSize:"1rem"}}>Nexus</span>
      </div>
      <p style={{color:"rgba(255,255,255,0.2)",fontSize:"0.8rem"}}>© 2026 Nexus Inc. All rights reserved.</p>
      <div style={{display:"flex",gap:24}}>
        {["Privacy","Terms","Blog","Careers"].map(l=>(
          <a key={l} href="#" style={{color:"rgba(255,255,255,0.3)",fontSize:"0.82rem",textDecoration:"none",transition:"color 0.2s"}}
            onMouseOver={e=>e.target.style.color="rgba(255,255,255,0.7)"}
            onMouseOut={e=>e.target.style.color="rgba(255,255,255,0.3)"}
          >{l}</a>
        ))}
      </div>
    </footer>
  );
}

/* ============================================================
   EXPORT — paste this into your HomePage.jsx
   Your Navbar lives in App.jsx with your routes — not here.
   ============================================================ */
export default function HomePage() {
  useReveal();
  return (
    <>
      <GlobalStyles />
      <main>
        <Hero />
        <LogosStrip />
        <Features />
        <Stats />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}


