import { useState, useEffect, useRef } from "react";

const ACCENT = "#00d4ff";
const PURPLE = "#7c3aed";
const GREEN = "#10b981";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

const SKILLS = {
  "Languages": ["Java", "Python", "C", "JavaScript (ES6)"],
  "Frontend": ["React.js", "HTML5", "CSS3", "Bootstrap 5"],
  "Backend & APIs": ["Spring Boot", "FastAPI", "Node.js", "REST APIs"],
  "AI & Data": ["RAG (Retrieval-Augmented Gen.)", "Vector DBs (Pinecone, Chroma)", "LangChain / LangGraph", "MCP (Model Context Protocol)"],
  "Database": ["MySQL", "SQL", "JDBC"],
  "Cloud & Tools": ["AWS (EC2, IAM, S3)", "Git", "GitHub", "VS Code"],
  "Core CS": ["OOP", "DSA", "DBMS", "Operating Systems"],
};

const PROJECTS = [
  {
    title: "Chronic Kidney Disease Prediction",
    stack: ["React.js", "Spring Boot", "FastAPI", "Python", "ML", "MySQL"],
    desc: "Full-stack healthcare app for CKD stage prediction with 3 role-based modules (Patient, Doctor, Admin). Features Random Forest ML model with SHAP-based explainability, risk scoring, and automated PDF report generation.",
    github: "https://github.com/Jayaram-49",
    color: "#00d4ff",
    icon: "🏥",
  },
  {
    title: "TaskManager Web App",
    stack: ["React.js", "JavaScript", "Bootstrap 5", "LocalStorage"],
    desc: "Responsive task management app with 6 features: CRUD operations, filtering, search, priority levels, overdue detection, and completion tracking. Uses React Hooks for persistent state.",
    github: "https://github.com/Jayaram-49",
    color: "#7c3aed",
    icon: "✅",
  },
  {
    title: "Student Management System",
    stack: ["Java", "JDBC", "MySQL"],
    desc: "Console-based system for managing student records with full CRUD support. Structured using OOP principles — encapsulation, inheritance, and abstraction — for long-term maintainability.",
    github: "https://github.com/Jayaram-49",
    color: "#10b981",
    icon: "🎓",
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "BR Concepts Pvt. Ltd.",
    period: "Nov 2025 – Mar 2026 · 4 months · Offline",
    desc: "Completed core software engineering training covering backend development, systems design, and performance optimization. Designed and implemented production-grade Retrieval-Augmented Generation (RAG) pipelines using LangChain and Pinecone vector database. Built multi-agent automation systems using LangGraph and developed custom Model Context Protocol (MCP) servers to enable secure, structured tools and resource access for LLM applications.",
    color: "#f59e0b",
  },
  {
    role: "Software Engineer Intern",
    company: "BIST Technologies Pvt. Ltd.",
    period: "May 2025 – Jul 2025 · 2 months",
    desc: "Engineering internship focused on practical software development. Engineered data-processing scripts and automation tools boosting system efficiency by 35%.",
    color: "#00d4ff",
  },
  {
    role: "Software Engineer Intern",
    company: "BIST Technologies Pvt. Ltd.",
    period: "Feb 2025 – Mar 2025 · 2 months",
    desc: "Software development internship covering scripting and data processing. Wrote automation tools and processed structured datasets using modern frameworks.",
    color: "#10b981",
  },
  {
    role: "Software Development Virtual Internship",
    company: "EduSkills (AICTE) · Grade A",
    period: "Apr – Jun 2026 · 8 weeks",
    desc: "Delivered full-stack development project with Spring Boot backend, database design, and project management. Implemented comprehensive grade-tracking module with SQL optimization.",
    color: "#7c3aed",
  },
  {
    role: "Software Development Virtual Internship",
    company: "EduSkills (AICTE) · Grade B",
    period: "Jul – Sep 2025 · 10 weeks",
    desc: "Explored backend frameworks and database normalization. Delivered a complete software module with enterprise-grade SQL query execution patterns.",
    color: "#ec4899",
  },
  {
    role: "Web Development Virtual Internship",
    company: "EduSkills (AICTE) · Grade P",
    period: "Apr – Jun 2025 · 10 weeks",
    desc: "Frontend development training. Crafted responsive web applications using modern HTML5, CSS3, and JavaScript, tested across multiple browser environments.",
    color: "#f59e0b",
  },
  {
    role: "Cybersecurity Virtual Internship",
    company: "EduSkills + Palo Alto Networks · Grade A",
    period: "Jan – Mar 2025 · 10 weeks",
    desc: "Cybersecurity engineering internship covering network security architecture, threat analysis, and defense mechanisms.",
    color: "#ef4444",
  },
  {
    role: "Networking Virtual Internship",
    company: "EduSkills + Zscaler · Grade O (Outstanding)",
    period: "Jan – Mar 2026 · 10 weeks",
    desc: "Advanced networking internship covering enterprise network architecture, cloud security, and infrastructure design.",
    color: "#06b6d4",
  },
  {
    role: "Cloud Engineering Virtual Internship",
    company: "EduSkills + AWS Academy · Grade D",
    period: "Apr – Jun 2024 · 10 weeks",
    desc: "Cloud infrastructure training. Configured cloud services (EC2, IAM, S3) and studied cost-optimised deployment architecture.",
    color: "#f97316",
  },
  {
    role: "Mobile Development Virtual Internship",
    company: "EduSkills + Google for Developers · Grade E",
    period: "Oct – Dec 2024 · 10 weeks",
    desc: "Mobile application development fundamentals supported by Google India Edu Program.",
    color: "#22c55e",
  },
];

const CERTS = [
  { 
    name: "Python Web Developer (Grade A+)", 
    issuer: "Infosys Foundation & ICT Academy - Finishing School for Employability", 
    year: "Sep 2025",
    period: "08 Sep 2025 - 25 Sep 2025",
    pdf: "/certificates/python-web-developer-infosys.jpg",
    icon: "🐍"
  },
  { 
    name: "React JS Certificate Program", 
    issuer: "ExcelR EdTech Pvt. Ltd.", 
    year: "Apr 2026",
    pdf: "/certificates/react-js.pdf",
    icon: "⚛️"
  },
  { 
    name: "Introduction to Networking for Cyber Professionals", 
    issuer: "Zscaler Academy", 
    year: "Feb 2026",
    validity: "Valid till Feb 2029",
    pdf: "/certificates/networking-cyber.pdf",
    icon: "🔐"
  },
  { 
    name: "AWS Cloud Virtual Internship", 
    issuer: "AWS Academy & EduSkills", 
    year: "Apr - Jun 2024",
    pdf: "/certificates/aws-cloud.pdf",
    icon: "☁️"
  },
  { 
    name: "Java Full Stack Development With Project", 
    issuer: "EduSkills (AICTE) · Grade A",
    year: "Apr - Jun 2026",
    pdf: "/certificates/java-fullstack.pdf",
    icon: "☕"
  },
  { 
    name: "Java Full Stack Developer Virtual Internship", 
    issuer: "EduSkills (AICTE) · Grade B",
    year: "Jul - Sep 2025",
    pdf: "/certificates/java-fullstack-2.pdf",
    icon: "☕"
  },
  { 
    name: "Cybersecurity Virtual Internship", 
    issuer: "Palo Alto Networks & EduSkills · Grade A",
    year: "Jan - Mar 2025",
    pdf: "/certificates/cybersecurity.pdf",
    icon: "🛡️"
  },
  { 
    name: "Android Developer Virtual Internship", 
    issuer: "Google for Developers · Grade E",
    year: "Oct - Dec 2024",
    pdf: "/certificates/android-dev.pdf",
    icon: "🤖"
  },
  { 
    name: "Web Full Stack Developer Virtual Internship", 
    issuer: "EduSkills (AICTE) · Grade P",
    year: "Apr - Jun 2025",
    pdf: "/certificates/web-development.pdf",
    icon: "🌐"
  },
  { 
    name: "Networking Virtual Internship", 
    issuer: "EduSkills + Zscaler · Grade O (Outstanding)",
    year: "Jan - Mar 2026",
    pdf: "/certificates/networking.pdf",
    icon: "🔗"
  },
  { 
    name: "Java Programming Industrial Internship", 
    issuer: "BIST Technologies Pvt. Ltd.",
    year: "May - Jul 2025",
    pdf: "/certificates/java-programming.pdf",
    icon: "☕"
  },
  { 
    name: "Python Programming Course", 
    issuer: "BIST Technologies Pvt. Ltd.",
    year: "Feb - Mar 2025",
    pdf: "/certificates/python-programming.pdf",
    icon: "🐍"
  },
  { 
    name: "BR Concepts - Java Programming Internship Completion", 
    issuer: "BR Concepts Pvt. Ltd. & Sri Vasavi Institute",
    year: "Nov 2025 - Mar 2026",
    pdf: "/certificates/internship-completion.pdf",
    icon: "✅"
  },
];

// ── Animated Counter ──────────────────────────────────────────────
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / 40;
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(t); }
          else setCount(Math.floor(start));
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Skill Tag ────────────────────────────────────────────────────
function SkillTag({ label, color }) {
  return (
    <span style={{
      display: "inline-block", padding: "5px 14px", borderRadius: 20,
      fontSize: 13, fontWeight: 600, margin: "4px 4px",
      border: `1px solid ${color}44`,
      background: `${color}11`, color: color,
      transition: "all .2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = `${color}25`; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${color}11`; e.currentTarget.style.transform = ""; }}
    >{label}</span>
  );
}

// ── Section Heading ───────────────────────────────────────────────
function SectionHeading({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <div style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: ACCENT, fontFamily: "monospace", marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, color: "#fff" }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${ACCENT},${PURPLE})`, margin: "18px auto 0", borderRadius: 2 }} />
    </div>
  );
}

// ── Certificate Modal ────────────────────────────────────────────
function CertificateModal({ cert, onClose }) {
  const isPdf = cert.pdf.toLowerCase().endsWith('.pdf');
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)",
      animation: "fadeIn 0.3s ease-out"
    }} onClick={onClose}>
      <div style={{
        background: "#050810", borderRadius: 20, padding: "28px", width: "90%", maxWidth: "800px", maxHeight: "90vh",
        overflow: "auto", border: `1px solid ${ACCENT}44`, position: "relative",
        boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${ACCENT}15`,
        animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
      }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute", top: 20, right: 22, background: "none", border: "none",
          color: ACCENT, fontSize: 24, cursor: "pointer", transition: "transform .2s, color .2s"
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.15) rotate(90deg)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.color = ACCENT; }}
        >✕</button>
        <h3 style={{ color: "#fff", marginBottom: 8, fontSize: 20, fontWeight: 700, paddingRight: 40 }}>{cert.name}</h3>
        <p style={{ color: "#6a7fa0", marginBottom: 20, fontSize: 13 }}>{cert.issuer} · {cert.year}</p>
        <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.2)", borderRadius: 12, padding: "8px" }}>
          {isPdf ? (
            <iframe
              src={cert.pdf}
              style={{ width: "100%", height: "500px", borderRadius: 8, border: "none" }}
            />
          ) : (
            <img
              src={cert.pdf}
              alt={cert.name}
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain", borderRadius: 8 }}
            />
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
          <a href={cert.pdf} download
            style={{
              display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 8,
              background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff",
              fontWeight: 600, fontSize: 14, textDecoration: "none", cursor: "pointer",
              transition: "transform .2s, box-shadow .2s"
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${ACCENT}44`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >
            {isPdf ? "Download PDF ↓" : "Download Certificate ↓"}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typed, setTyped] = useState("");
  const [tab, setTab] = useState("Languages");
  const [expandedExp, setExpandedExp] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [toast, setToast] = useState("");

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText("jayaramthota12@gmail.com").then(() => {
      setToast("Email copied to clipboard! 📋");
      setTimeout(() => setToast(""), 3000);
    }).catch(() => {
      // Ignore
    });
  };

  const titles = ["Software Developer", "Software Engineer", "Full Stack Developer", "Backend Engineer", "Cloud Developer"];
  const titleRef = useRef({ idx: 0, char: 0, deleting: false });

  // Typing effect
  useEffect(() => {
    const tick = () => {
      const { idx, char, deleting } = titleRef.current;
      const word = titles[idx];
      if (!deleting && char < word.length) {
        setTyped(word.slice(0, char + 1));
        titleRef.current.char++;
      } else if (!deleting && char === word.length) {
        setTimeout(() => { titleRef.current.deleting = true; }, 1600);
      } else if (deleting && char > 0) {
        setTyped(word.slice(0, char - 1));
        titleRef.current.char--;
      } else if (deleting && char === 0) {
        titleRef.current.deleting = false;
        titleRef.current.idx = (idx + 1) % titles.length;
      }
    };
    const id = setInterval(tick, titleRef.current.deleting ? 50 : 90);
    return () => clearInterval(id);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionColors = [ACCENT, PURPLE, GREEN, "#f59e0b", "#ec4899", "#f97316"];

  return (
    <div style={{ background: "#050810", color: "#c8d8f0", fontFamily: "'Inter', 'Segoe UI', sans-serif", overflowX: "hidden" }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrollY > 60 ? "rgba(5,8,16,0.95)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(0,212,255,0.08)" : "none",
        transition: "all .4s",
        padding: "0 clamp(1rem,4vw,3rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <div style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          TJR<span style={{ WebkitTextFillColor: "#c8d8f0", fontWeight: 300 }}>.dev</span>
        </div>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 4 }} className="desktop-nav">
          {NAV_LINKS.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ background: "none", border: "none", color: "#8a9bbf", cursor: "pointer", padding: "6px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = sectionColors[i]; e.currentTarget.style.background = `${sectionColors[i]}11`; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#8a9bbf"; e.currentTarget.style.background = "none"; }}
            >{l}</button>
          ))}
        </div>
        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: ACCENT, fontSize: 22, cursor: "pointer" }}
          className="hamburger">☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 999,
          background: "rgba(5,8,16,0.98)", backdropFilter: "blur(20px)",
          padding: "16px 24px 24px", borderBottom: `1px solid ${ACCENT}22`,
        }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{ display: "block", width: "100%", background: "none", border: "none", color: "#c8d8f0", cursor: "pointer", padding: "12px 0", fontSize: 16, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ color: sectionColors[i], marginRight: 12, fontFamily: "monospace", fontSize: 12 }}>0{i + 1}.</span>{l}
            </button>
          ))}
        </div>
      )}

      {/* ── Hero ── */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "100px clamp(1rem,5vw,4rem) 60px", position: "relative", overflow: "hidden" }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          mask: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }} />
        {/* Glow orbs */}
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${ACCENT}15 0%, transparent 65%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 350, height: 350, borderRadius: "50%", background: `radial-gradient(circle, ${PURPLE}15 0%, transparent 65%)`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 1000, width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          {/* Left: Text Content */}
          <div>
            <div style={{ fontSize: 13, fontFamily: "monospace", color: ACCENT, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
              ⚡ Available for Full-Time Roles
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16, color: "#fff" }}>
              Thota<br />
              <span style={{ background: `linear-gradient(135deg,${ACCENT},${PURPLE},#ec4899)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Jaya Ram</span>
            </h1>
            <div style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 600, color: "#8a9bbf", marginBottom: 28, height: 36, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: ACCENT }}>{">"}</span>
              <span style={{ color: "#c8d8f0" }}>{typed}</span>
              <span style={{ width: 2, height: "1.1em", background: ACCENT, display: "inline-block", animation: "blink 1s step-end infinite" }} />
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#6a7fa0", maxWidth: 580, marginBottom: 40 }}>
              B.Tech CSE graduate (2026) from Sri Vasavi Institute of Engineering & Technology.
              Passionate about building scalable software solutions — 5 internships, 3 full-stack & ML projects,
              and a commitment to clean, maintainable code.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Projects")}
                style={{ padding: "13px 32px", borderRadius: 8, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "transform .2s, box-shadow .2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${ACCENT}44`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >View Projects →</button>
              <a href="mailto:jayaramthota12@gmail.com"
                onClick={handleEmailClick}
                style={{ padding: "13px 32px", borderRadius: 8, background: "transparent", color: ACCENT, border: `1px solid ${ACCENT}44`, fontWeight: 700, fontSize: 15, cursor: "pointer", textDecoration: "none", transition: "all .2s", display: "inline-block" }}
                onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}11`; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${ACCENT}44`; }}
              >Contact Me</a>
            </div>
            {/* Social Links */}
            <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
              {[
                { label: "LinkedIn", url: "https://linkedin.com/in/thota-jayaram", icon: "in" },
                { label: "GitHub", url: "https://github.com/Jayaram-49", icon: "gh" },
                { label: "Email", url: "mailto:jayaramthota12@gmail.com", icon: "@" },
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 8, border: `1px solid rgba(255,255,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#6a7fa0", fontSize: 13, fontWeight: 700, fontFamily: "monospace", textDecoration: "none", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; e.currentTarget.style.background = `${ACCENT}11`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#6a7fa0"; e.currentTarget.style.background = ""; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              position: "relative", width: "100%", maxWidth: 360,
              aspectRatio: "1/1", borderRadius: 16,
              background: `linear-gradient(135deg,${ACCENT}20,${PURPLE}20)`,
              border: `2px solid ${ACCENT}44`,
              padding: 2,
              overflow: "hidden"
            }}>
              <img src="/images/profile.jpg" alt="Thota Jaya Ram"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }} />
              {/* Animated gradient border */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: 16,
                background: `linear-gradient(45deg,${ACCENT},${PURPLE},${GREEN},${ACCENT})`,
                backgroundSize: "300% 300%",
                animation: "gradientShift 6s ease infinite",
                zIndex: -1,
                opacity: 0.5
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <div style={{ background: "rgba(0,212,255,0.03)", borderTop: `1px solid rgba(0,212,255,0.08)`, borderBottom: `1px solid rgba(0,212,255,0.08)`, padding: "32px clamp(1rem,5vw,4rem)" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(2rem,6vw,6rem)", flexWrap: "wrap" }}>
          {[
            { val: 5, suffix: "+", label: "Internships Completed" },
            { val: 3, suffix: "", label: "Projects Built" },
            { val: 13, suffix: "+", label: "Certifications Earned" },
            { val: 7.60, suffix: " CGPA", label: "Academic Score", float: true },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 900, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "monospace" }}>
                <Counter end={s.float ? 7 : s.val} suffix={s.float ? ".60 CGPA" : s.suffix} />
              </div>
              <div style={{ fontSize: 13, color: "#6a7fa0", marginTop: 4, letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <section id="skills" style={{ padding: "100px clamp(1rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionHeading eyebrow="Technical Arsenal" title="Skills & Technologies" />
          {/* Tab buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 40 }}>
            {Object.keys(SKILLS).map((cat, i) => (
              <button key={cat} onClick={() => setTab(cat)}
                style={{
                  padding: "8px 18px", borderRadius: 6, border: `1px solid ${tab === cat ? sectionColors[i % 6] : "rgba(255,255,255,0.08)"}`,
                  background: tab === cat ? `${sectionColors[i % 6]}18` : "transparent",
                  color: tab === cat ? sectionColors[i % 6] : "#6a7fa0",
                  cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all .2s",
                }}>{cat}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, minHeight: 80 }}>
            {SKILLS[tab].map((s, i) => (
              <SkillTag key={s} label={s} color={sectionColors[Object.keys(SKILLS).indexOf(tab) % 6]} />
            ))}
          </div>
          {/* All skills grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20, marginTop: 40 }}>
            {Object.entries(SKILLS).map(([cat, items], ci) => (
              <div key={cat} style={{ background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.06)`, borderRadius: 12, padding: "20px 22px", transition: "border-color .2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${sectionColors[ci % 6]}44`}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"}
              >
                <div style={{ fontSize: 12, fontFamily: "monospace", color: sectionColors[ci % 6], letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>{cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map(s => <SkillTag key={s} label={s} color={sectionColors[ci % 6]} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" style={{ padding: "100px clamp(1rem,5vw,4rem)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeading eyebrow="What I've Built" title="Featured Projects" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div key={p.title} style={{
                background: "rgba(255,255,255,0.02)", border: `1px solid rgba(255,255,255,0.06)`,
                borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16,
                transition: "all .3s", position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}55`; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
              >
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${p.color},transparent)` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontSize: 32 }}>{p.icon}</span>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    style={{ color: "#6a7fa0", fontSize: 22, textDecoration: "none", transition: "color .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = p.color}
                    onMouseLeave={e => e.currentTarget.style.color = "#6a7fa0"}
                  >↗</a>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6a7fa0" }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 12, background: `${p.color}15`, color: p.color, fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <a href="https://github.com/Jayaram-49" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: ACCENT, fontSize: 15, fontWeight: 600, textDecoration: "none", border: `1px solid ${ACCENT}44`, padding: "10px 24px", borderRadius: 8, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}11`; }}
              onMouseLeave={e => { e.currentTarget.style.background = ""; }}
            >View All on GitHub →</a>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" style={{ padding: "100px clamp(1rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <SectionHeading eyebrow="Where I've Worked" title="Experience & Internships" />
          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: 18, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg,rgba(0,212,255,0.5),rgba(124,58,237,0.3),transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {EXPERIENCE.map((e, i) => (
                <div key={i} style={{ paddingLeft: 52, position: "relative", cursor: "pointer" }}
                  onClick={() => setExpandedExp(expandedExp === i ? null : i)}>
                  {/* Dot */}
                  <div style={{ position: "absolute", left: 12, top: 18, width: 13, height: 13, borderRadius: "50%", background: e.color, boxShadow: `0 0 10px ${e.color}88` }} />
                  <div style={{
                    background: "rgba(255,255,255,0.02)", border: `1px solid ${expandedExp === i ? e.color + "55" : "rgba(255,255,255,0.06)"}`,
                    borderRadius: 12, padding: "18px 22px", transition: "all .25s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{e.role}</div>
                        <div style={{ fontSize: 13, color: e.color, marginTop: 3, fontWeight: 600 }}>{e.company}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 12, color: "#6a7fa0", fontFamily: "monospace" }}>{e.period}</span>
                        <span style={{ color: "#6a7fa0", fontSize: 14, transition: "transform .2s", transform: expandedExp === i ? "rotate(180deg)" : "" }}>▼</span>
                      </div>
                    </div>
                    {expandedExp === i && (
                      <p style={{ fontSize: 14, color: "#6a7fa0", lineHeight: 1.7, marginTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 12 }}>{e.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="certifications" style={{ padding: "100px clamp(1rem,5vw,4rem)", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeading eyebrow="Professional Credentials" title="Certifications & Achievements" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
            {CERTS.map((c, i) => (
              <div key={c.name} onClick={() => setSelectedCert(c)}
                style={{
                  background: "rgba(255,255,255,0.02)", border: `2px solid rgba(255,255,255,0.06)`,
                  borderRadius: 14, padding: "22px 24px", transition: "all .25s", cursor: "pointer",
                  borderLeft: `3px solid ${sectionColors[i % 6]}`,
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.background = `${sectionColors[i % 6]}08`; 
                  e.currentTarget.style.transform = "translateY(-4px)"; 
                  e.currentTarget.style.borderColor = `${sectionColors[i % 6]}44`;
                  e.currentTarget.style.boxShadow = `0 8px 24px ${sectionColors[i % 6]}15`;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)"; 
                  e.currentTarget.style.transform = ""; 
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{c.icon}</div>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: sectionColors[i % 6], fontWeight: 600, marginBottom: 6 }}>{c.issuer}</div>
                <div style={{ fontSize: 12, color: "#4a5880", fontFamily: "monospace", marginBottom: 12 }}>{c.year}{c.validity && ` · ${c.validity}`}</div>
                <div style={{ fontSize: 12, color: ACCENT, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  📄 View Certificate <span style={{ fontSize: 10 }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" style={{ padding: "100px clamp(1rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: ACCENT, fontFamily: "monospace", marginBottom: 16 }}>Let's Connect</div>
          <h2 style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>Ready to Build<br /><span style={{ background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Something Amazing?</span></h2>
          <p style={{ fontSize: 16, color: "#6a7fa0", lineHeight: 1.8, marginBottom: 40 }}>
            I'm actively seeking Software Developer and Software Engineer roles. Whether it's a full-time opportunity, a startup project, or an interesting challenge — let's talk!
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="mailto:jayaramthota12@gmail.com"
              onClick={handleEmailClick}
              style={{ display: "inline-block", padding: "14px 36px", borderRadius: 8, background: `linear-gradient(135deg,${ACCENT},${PURPLE})`, color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "transform .2s, box-shadow .2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${ACCENT}44`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >Say Hello 👋</a>
            <a href="https://linkedin.com/in/thota-jayaram" target="_blank" rel="noreferrer"
              style={{ display: "inline-block", padding: "14px 36px", borderRadius: 8, background: "transparent", color: ACCENT, border: `1px solid ${ACCENT}44`, fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = `${ACCENT}11`; e.currentTarget.style.borderColor = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${ACCENT}44`; }}
            >LinkedIn →</a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {[
              { label: "📞 Phone", val: "+91-9398289227", href: "tel:+919398289227" },
              { label: "📧 Email", val: "jayaramthota12@gmail.com", href: "mailto:jayaramthota12@gmail.com" },
              { label: "📍 Location", val: "Machilipatnam, AP, India", href: "#" },
            ].map(c => (
              <a key={c.label} href={c.href}
                onClick={c.label.includes("Email") ? handleEmailClick : undefined}
                style={{ textDecoration: "none", textAlign: "center", transition: "opacity .2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                <div style={{ fontSize: 12, color: "#4a5880", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 14, color: "#8a9bbf", fontWeight: 600 }}>{c.val}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ textAlign: "center", padding: "28px", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#4a5880", fontSize: 13 }}>
        <span style={{ fontFamily: "monospace", color: ACCENT }}>{"</>"}</span> Crafted with passion by{" "}
        <span style={{ color: "#8a9bbf", fontWeight: 600 }}>Thota Jaya Ram</span> · 2026
      </footer>

      {/* Certificate Modal */}
      {selectedCert && <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 768px) {
          section:nth-child(2) > div > div { grid-template-columns: 1fr !important; }
          section:nth-child(2) > div > div > div:last-child { order: -1; }
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.3); border-radius: 4px; }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 30, right: 30, background: "rgba(10,15,30,0.95)",
          border: `1px solid ${ACCENT}`, color: "#fff", padding: "14px 24px", borderRadius: 10,
          boxShadow: `0 8px 30px ${ACCENT}22`, zIndex: 9999, display: "flex", alignItems: "center", gap: 10,
          fontFamily: "monospace", fontSize: 14, animation: "scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
