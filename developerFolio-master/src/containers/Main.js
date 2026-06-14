import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills"; // Tab 2: Career Exploration
import WorkExperience from "./workExperience/WorkExperience"; // Sub-section 1
import StartupProject from "./StartupProjects/StartupProject"; // Sub-section 2
import Achievement from "./achievement/Achievement"; // Sub-section 3
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks"; // Tab 5: Reflection
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import SkillsAssessment from "./skills/SkillsAssessment";
import leadMppImg from "../assets/images/lead-mpp.png";
import leadGreenImg from "../assets/images/lead-green.png";
import leadBroadcastImg from "../assets/images/lead-broadcast.png";
import mobilityImg from "../assets/images/cert-mobility.png";
import { Fade } from "react-reveal";
// ==========================================
// 🏛️ COMPONENT SUB-SECTION 4: LEADERSHIP & ACTIVITIES (VERSI BEBAS RALAT & HOVER LIFT-UP)
// ==========================================
const LeadershipExperience = () => {
  const isDark = localStorage.getItem("isDark") === "true";

  const leadershipData = [
    {
      title: "1st Vice President — Students Representative Council (MPP)",
      subtitle: "KTAC | 2021 – 2022",
      tag: "Apex Leadership Role",
      points: [
        "Served as second-in-command for the student government, directly overseeing student body welfare and campus operations.",
        "Mediated strategically between the student body and senior management to resolve complex institutional issues.",
        "Managed high-stakes governance and facility improvements, sharpening crisis negotiation and leadership skills."
      ],
      activityImage: leadMppImg
    },
    {
      title: "Exco of Revenue Generation — UniSZA Green Advocates Association",
      subtitle: "UniSZA | 2023 – 2024",
      tag: "Project Management & FinTech Advocacy",
      points: [
        "Planned and executed targeted fundraising initiatives to financially secure association activities and environmental programs.",
        "Negotiated directly with external sponsors and stakeholders to build strategic partnerships and secure corporate project backing."
      ],
      activityImage: leadGreenImg
    },
    {
      title: "Technical Operations & Community Engagement",
      subtitle: "Team Broadcast KTAC & UniSZA Outreach | 2020 – 2022",
      tag: "Technical Operations & Outreach",
      points: [
        "Broadcast Tech: Handled full technical configurations, hardware setups, and real-time live broadcasting operations for major college events.",
        "Community Outreach: Organized community-centric activities and managed end-to-end team logistics for successful event execution."
      ],
      activityImage: leadBroadcastImg
    },
    {
      title: "International Student Mobility Programme — UPNVJ, Jakarta",
      subtitle: "Universitas Pembangunan Nasional Veteran Jakarta | Nov 2024",
      tag: "Global Mobility & Exchange",
      points: [
        "Academic Integration: Participated in specialized programming and cloud computing lecture tracks hosted by UPNVJ computing faculty.",
        "Cross-Border Tech Insights: Engaged in critical information systems and cross-border E-Commerce analysis contrasting Malaysian and Indonesian digital operations.",
        "Leadership & Cultural Exchange: Partnered with the Student Executive Board (BEMFIK) to evaluate international academic structures, student governance, and regional tech adaptation.",
        "Socio-Cultural Adaptability: Explored regional footprints and socio-cultural hubs including Taman Mini Indonesia Indah (TMII) to sharpen global communication and peer adaptability."
      ],
      activityImage: mobilityImg
    }
  ];

  return (
    <div style={{ width: "100%", padding: "10px 0" }}>
      {/* 🎬 SEKTOR ANIMASI: Sekarang komputer dah kenal Fade sebab kita dah import kat atas tadi! */}
      <Fade bottom duration={1000}>
        
        {/* HEADER SUB-SECTION 4 */}
        <div style={{ marginBottom: "40px", textAlign: "left" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0d9488", margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Leadership & Student Activities
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#64748b", margin: "0 0 35px 0", lineHeight: "1.5" }}>
            Strategic governance, financial management, and real-time technical operations.
          </p>
        </div>

        {/* KOTAK KAD BERSIH */}
        <div style={{ display: "flex", flexDirection: "column", gap: "35px", width: "100%" }}>
          {leadershipData.map((item, index) => (
            <div 
              key={index} 
              className={isDark ? "cert-premium-card dark" : "cert-premium-card"}
              style={{ 
                background: isDark ? "#171c28" : "#ffffff", 
                borderRadius: "14px", 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.02)", 
                padding: "20px",
                textAlign: "left",
                width: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer"
              }}
            >
              {/* ISI KANDUNGAN KAD (Kekal sama macam kod hang) */}
              <div style={{ marginBottom: "12px" }}>
                <span style={{ background: "rgba(13, 148, 136, 0.08)", color: "#0d9488", fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px", padding: "6px 14px", borderRadius: "6px", fontFamily: "monospace" }}>
                  {item.tag}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "6px", marginBottom: "15px", width: "100%" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: isDark ? "#ffffff" : "#0f172a", margin: "0", lineHeight: "1.4", width: "100%", wordBreak: "break-word" }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#64748b", display: "block", width: "100%" }}>
                  {item.subtitle}
                </span>
              </div>
              
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "20px", opacity: 0.5 }}></div>

              <ul style={{ paddingLeft: "18px", margin: "0 0 25px 0" }}>
                {item.points.map((point, i) => (
                  <li key={i} style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>
                    {point}
                  </li>
                ))}
              </ul>

              {item.activityImage && (
                <div style={{ 
                  width: "100%", 
                  borderTop: isDark ? "1px dashed #334155" : "1px dashed #cbd5e1",
                  paddingTop: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img 
                    src={item.activityImage} 
                    alt="Leadership Activity Exhibit" 
                    style={{ 
                      width: "100%", 
                      maxWidth: "580px", 
                      height: "auto", 
                      maxHeight: "280px",
                      objectFit: "contain",
                      opacity: 0.95
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </Fade> {/* 🚀 Penutup Fade */}
    </div>
  );
};

// ==========================================
// 📦 SEKSYEN SUB-TAB EVIDENCE OF LEARNING (VERSI LUNCI MATI TARGET)
// ==========================================
const EvidenceOfLearning = ({ isDark }) => {
  const [subTab, setSubTab] = useState("industrial");

  // 🚀 FUNGSI PINCOK: Cari ID "evidence" atau "greeting" and paksa skrin melonjat naik ke situ!
  const handleSubTabChange = (tabName) => {
    setSubTab(tabName);
    
    // Kita cari container utama area kandungan portfolio hang
    const mainArea = document.getElementById("greeting") || document.querySelector(".main-content-area");
    if (mainArea) {
      mainArea.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Menu Sub-Tab Atas */}
      <div style={{ 
        display: "flex", 
        flexDirection: "row",
        flexWrap: "wrap", 
        gap: "10px", 
        justifyContent: "flex-start", 
        marginBottom: "30px", 
        borderBottom: `2px solid ${isDark ? "#334155" : "#e2e8f0"}`,
        paddingBottom: "10px",
        width: "100%"
      }}>
        <button onClick={() => handleSubTabChange("industrial")} style={{ ...subBtnStyle(subTab === "industrial", isDark), flex: "1 1 auto", minWidth: "160px", whiteSpace: "normal", textAlign: "center" }}>Sub-section 1: Industrial Experience</button>
        <button onClick={() => handleSubTabChange("academic")} style={{ ...subBtnStyle(subTab === "academic", isDark), flex: "1 1 auto", minWidth: "160px", whiteSpace: "normal", textAlign: "center" }}>Sub-section 2: Academic Projects</button>
        <button onClick={() => handleSubTabChange("certs")} style={{ ...subBtnStyle(subTab === "certs", isDark), flex: "1 1 auto", minWidth: "160px", whiteSpace: "normal", textAlign: "center" }}>Sub-section 3: Certifications & Trainings</button>
        <button onClick={() => handleSubTabChange("leadership")} style={{ ...subBtnStyle(subTab === "leadership", isDark), flex: "1 1 auto", minWidth: "160px", whiteSpace: "normal", textAlign: "center" }}>Sub-section 4: Leadership & Activities</button>
      </div>

      {/* Paparan Kandungan Mengikut Sub-Tab */}
      <div className="fade-in">
        {subTab === "industrial" && <WorkExperience />}
        {subTab === "academic" && <StartupProject />}
        {subTab === "certs" && <Achievement />}
        {subTab === "leadership" && <LeadershipExperience isDark={isDark} />}
      </div>
    </div>
  );
};

// ==========================================
// 🌐 KOMPONEN BACKGROUND CYBER CYBER
// ==========================================
const CyberSecurityBackground = ({ isDark }) => {
  const nodeColor = isDark ? "rgba(13, 148, 136, 0.45)" : "rgba(71, 85, 105, 0.4)";
  const ipTextColor = isDark ? "rgba(13, 148, 136, 0.5)" : "rgba(71, 85, 105, 0.55)";
  const binaryColor = isDark ? "rgba(13, 148, 136, 0.25)" : "rgba(71, 85, 105, 0.3)";

  const binaryStreams = [
    { top: "8%", left: "15%", text: "01011001" },
    { top: "28%", left: "45%", text: "11001010" },
    { top: "52%", left: "3%", text: "01100101 01101111" },
    { top: "20%", right: "22%", text: "01010111" },
    { top: "35%", right: "3%", text: "01110010 01100101" },
    { top: "72%", right: "12%", text: "01101000" }
  ];

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 999 }}>
      <div style={{ position: "absolute", top: "12%", left: "1%", width: "260px", height: "200px", animation: "floatCyber 7s ease-in-out infinite alternate" }}>
        <svg viewBox="0 0 200 150" style={{ width: "100%", height: "100%" }}>
          <line x1="30" y1="40" x2="100" y2="30" stroke={nodeColor} strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="30" x2="160" y2="80" stroke={nodeColor} strokeWidth="1.2" />
          <line x1="30" y1="40" x2="80" y2="110" stroke={nodeColor} strokeWidth="1" />
          <line x1="80" y1="110" x2="160" y2="80" stroke={nodeColor} strokeWidth="1" />
          <circle cx="30" cy="40" r="3" fill={nodeColor} /><circle cx="100" cy="30" r="4" fill={nodeColor} />
          <circle cx="100" cy="30" r="8" stroke={nodeColor} strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="80" cy="110" r="3" fill={nodeColor} /><circle cx="160" cy="80" r="5" fill={nodeColor} />
          <circle cx="160" cy="80" r="10" stroke={nodeColor} strokeWidth="1" fill="none" className="pulse-ring" />
          <text x="110" y="105" fill={ipTextColor} fontFamily="monospace" fontSize="9" fontWeight="bold">192.168.10.24</text>
        </svg>
      </div>
      <div style={{ position: "absolute", top: "45%", right: "1%", width: "280px", height: "220px", animation: "floatCyber 10s ease-in-out infinite alternate-reverse" }}>
        <svg viewBox="0 0 200 150" style={{ width: "100%", height: "100%" }}>
          <line x1="40" y1="90" x2="120" y2="40" stroke={nodeColor} strokeWidth="1.2" />
          <line x1="120" y1="40" x2="170" y2="110" stroke={nodeColor} strokeWidth="1" />
          <line x1="40" y1="90" x2="170" y2="110" stroke={nodeColor} strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="40" cy="90" r="4" fill={nodeColor} /><circle cx="170" cy="110" r="3" fill={nodeColor} />
          <circle cx="120" cy="40" r="5" fill={nodeColor} />
          <circle cx="120" cy="40" r="9" stroke={nodeColor} strokeWidth="1" fill="none" opacity="0.5" />
          <circle cx="120" cy="40" r="14" stroke={nodeColor} strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
          <text x="50" y="30" fill={ipTextColor} fontFamily="monospace" fontSize="9" fontWeight="bold">10.0.1.1</text>
        </svg>
      </div>
      {binaryStreams.map((stream, index) => (
        <div key={`bin-${index}`} style={{ position: "absolute", top: stream.top, left: stream.left, right: stream.right, fontFamily: "'Courier New', Courier, monospace", fontSize: "12px", fontWeight: "bold", color: binaryColor, textShadow: isDark ? "0 0 1px rgba(13, 148, 136, 0.2)" : "none", whiteSpace: "nowrap", transform: "rotate(-5deg)", animation: `floatCyber ${5 + index}s ease-in-out infinite alternate` }}>
          {stream.text}
        </div>
      ))}
      <style>{`
        @keyframes floatCyber { 0% { transform: translateY(0px) scale(0.99); } 100% { transform: translateY(-10px) scale(1.01); } }
        .pulse-ring { animation: cyberPulse 2.5s ease-out infinite; transform-origin: center; }
        @keyframes cyberPulse { 0% { r: 5px; opacity: 1; stroke-width: 1.2; } 100% { r: 16px; opacity: 0; stroke-width: 0.5; } }
      `}</style>
    </div>
  );
};

// ==========================================
// 🚀 MAIN APP CONTAINER
// ==========================================
const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(() => setIsShowingSplashAnimation(false), splashScreen.duration);
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => setIsDark(!isDark);
  const handleTabChange = (tabName) => { setActiveTab(tabName); window.scrollTo(0, 0); };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <div className="theme-wrapper" style={{ minHeight: "100vh" }}>
            
            <CyberSecurityBackground isDark={isDark} />

            {/* TASK BAR ATAS - VERSI MESRA PHONE TEGAK */}
            <div style={{ backgroundColor: isDark ? "#1d2433" : "#ffffff", borderBottom: "2px solid #e2e8f0", padding: "15px 10px", position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
                <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "#0d9488", textAlign: "center" }}>ANIS NADIA | PORTFOLIO</span>
                
                {/* Pembungkus Butang-Butang Menu Atas */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap", width: "100%" }}>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
                    <button onClick={() => handleTabChange("home")} style={{...btnStyle(activeTab === "home", isDark), flex: "1 1 auto", minWidth: "70px", padding: "6px 10px", fontSize: "0.8rem"}}>Home</button>
                    <button onClick={() => handleTabChange("career")} style={{...btnStyle(activeTab === "career", isDark), flex: "1 1 auto", minWidth: "120px", padding: "6px 10px", fontSize: "0.8rem"}}>Career Exploration</button>
                    <button onClick={() => handleTabChange("skills")} style={{...btnStyle(activeTab === "skills", isDark), flex: "1 1 auto", minWidth: "110px", padding: "6px 10px", fontSize: "0.8rem"}}>Skills Assessment</button>
                    <button onClick={() => handleTabChange("evidence")} style={{...btnStyle(activeTab === "evidence", isDark), flex: "1 1 auto", minWidth: "120px", padding: "6px 10px", fontSize: "0.8rem"}}>Evidence of Learning</button>
                    <button onClick={() => handleTabChange("reflection")} style={{...btnStyle(activeTab === "reflection", isDark), flex: "1 1 auto", minWidth: "150px", padding: "6px 10px", fontSize: "0.8rem"}}>Reflection & Dev Plan</button>
                  </div>
                  
                  {/* Butang Mod Malam */}
                  <div style={{ marginTop: "5px", display: "flex", justifyContent: "center", width: "100%", borderTop: "1px solid #cbd5e1", paddingTop: "8px" }}>
                    <button onClick={changeTheme} style={{ background: isDark ? "#334155" : "#f1f5f9", border: isDark ? "1px solid #475569" : "1px solid #cbd5e1", borderRadius: "20px", padding: "4px 16px", cursor: "pointer", fontSize: "1rem" }}>
                      {isDark ? "🌙 Mode" : "☀️ Mode"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* KANDUNGAN UTAMA - EDISI RESPONSIVE OVERRIDE GLOBAL */}
            <div className="main-content-area" style={{ width: "100%", maxWidth: "1200px", margin: "30px auto", padding: "0 15px", boxSizing: "border-box", minHeight: "60vh", overflowX: "hidden" }}>
              {activeTab === "home" && (
                <div>
                  <Greeting />
                  {/* QUICK STATS COUNTER */}
                  <div style={{ marginTop: "30px", padding: "20px", backgroundColor: isDark ? "#171c28" : "#ffffff", borderRadius: "12px", border: "1px solid #0d9488", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", zIndex: 10, position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#868e96", fontWeight: "600" }}>📊 DEGREE PERFORMANCE</span>
                      <span style={{ fontSize: "1.15rem", fontWeight: "800", color: isDark ? "#ffffff" : "#0f172a" }}>CGPA: 3.86 <span style={{fontSize: "0.9rem", fontWeight: "500", color: "#0d9488"}}>(UniSZA)</span></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#868e96", fontWeight: "600" }}>🥇 DIPLOMA RECOGNITION</span>
                      <span style={{ fontSize: "1.15rem", fontWeight: "800", color: isDark ? "#ffffff" : "#0f172a" }}>CGPA: 3.97 <span style={{fontSize: "0.9rem", fontWeight: "500", color: "#0d9488"}}>(Anugerah Emas)</span></span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                      <span style={{ fontSize: "0.85rem", color: "#868e96", fontWeight: "600" }}>📜 PROFESSIONAL TRACKS</span>
                      <span style={{ fontSize: "0.95rem", fontWeight: "700", color: isDark ? "#cbd5e1" : "#334155", lineHeight: "1.3" }}>CCNA Trained | Cyber Threat Hunting & CISSP Foundations</span>
                    </div>
                  </div>
                </div>
              )}

              {/* KITA BUNGKUS TAB BERMASALAH DENGAN DIV KAWALAN OVERFLOW AGAR AUTO-KEMAS KAT PHONE */}
              {activeTab === "career" && <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}><Skills /></div>}
              {activeTab === "skills" && <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}><SkillsAssessment /></div>}
              {activeTab === "evidence" && <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}><EvidenceOfLearning isDark={isDark} /></div>}
              {activeTab === "reflection" && <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}><Talks /></div>}
            </div>

            <div style={{ width: "100%", overflowX: "hidden", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 10px" }} className="responsive-footer-wrapper">
              <Footer />
            </div>
            <ScrollToTopButton />
          </div>
        )}
      </StyleProvider>
    </div>
  );
};

// ==========================================
// 🎨 UTILITY BUTTON STYLES
// ==========================================
const btnStyle = (isActive, isDark) => ({
  background: isActive ? "#0d9488" : "transparent",
  color: isActive ? "#ffffff" : (isDark ? "#cbd5e1" : "#475569"),
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "0.9rem",
  transition: "all 0.2s ease"
});

const subBtnStyle = (isActive, isDark) => ({
  background: isActive ? (isDark ? "#1e293b" : "#e2e8f0") : "transparent",
  color: isActive ? "#0d9488" : (isDark ? "#94a3b8" : "#64748b"),
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "0.85rem",
  transition: "all 0.15s ease",
  borderBottom: isActive ? "3px solid #0d9488" : "3px solid transparent"
});

export default Main;