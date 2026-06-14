import React, { useContext } from "react";
import "./Skills.scss"; // Menggunakan fail share style yang sama
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function SkillsAssessment() {
  const { isDark } = useContext(StyleContext);

  // 📋 DATA ASSESSMENT DENGAN PENGUNCIAN THEME WARNA KHAS BAGI SETIAP KAD
  const assessmentCards = [
    {
      title: "Security & Forensics",
      borderColor: "#0d9488", // Teal 🛡️
      textColor: "#0d9488",
      bgColor: "rgba(13, 148, 136, 0.05)",
      points: [
        "Penetration Testing & Cyber Threat Hunting",
        "Digital Evidence Recovery & First Responder Protocols",
        "Cryptographic Applications & Firewall Management",
        "Analyzed and reversed Base64-encoded strings within HTTP Authorization headers to detect credential eavesdropping vulnerabilities",
      ],
      tags: ["Wireshark", "Digital Forensics", "Penetration Testing", "Cryptography", "Protocol Forensics"]
    },
    {
      title: "Networking & Infrastructure",
      borderColor: "#2563eb", // Blue 🌐
      textColor: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.05)",
      points: [
        "Network Analysis & Architecture Design",
        "Cisco Packet Tracer Operations",
        "Packet Inspection & Analysis using Wireshark"
      ],
      tags: ["Cisco Packet Tracer", "CCNA", "Network Routing", "Infrastructure Defense"]
    },
    {
      title: "Automation & Systems",
      borderColor: "#d97706", // Orange/Amber ⚙️
      textColor: "#d97706",
      bgColor: "rgba(217, 119, 6, 0.05)",
      points: [
        "Enterprise Linux Administration",
        "Secure Scripting and Automation (Python, Java)",
        "Relational Database Management via MySQL"
      ],
      tags: ["Python", "Linux Administration", "MySQL", "C++", "Java", "PHP", "System Automation"]
    },
    {
      title: "Professional Soft Skills",
      borderColor: "#7c3aed", // Purple 🎯 (Kekal purple tapi kemas!)
      textColor: "#7c3aed",
      bgColor: "rgba(124, 58, 237, 0.05)",
      points: [
        "High-Stakes Team Collaboration & Adaptability",
        "Analytical Thinking & Complex Problem-Solving",
        "Cross-Cultural and Stakeholder Communication"
      ],
      tags: ["MPP Leadership", "High-Stakes Collaboration", "Analytical Thinking", "Problem Solving"]
    }
  ];

  return (
    <div className="skills-assessment-main-wrapper" style={{ width: "100%", padding: "10px 15px", boxSizing: "border-box" }}>
      <Fade bottom duration={1000}>
        
        {/* RESPONSIVE HEADING & SUBTITLE */}
        <div style={{ marginBottom: "35px", textAlign: "left", width: "100%" }}>
          <h2 style={{ fontSize: "calc(1.8rem + 1vw)", fontWeight: "700", color: "#0d9488", margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Personal Skills Assessment
          </h2>
          <p style={{ fontSize: "1rem", color: "#64748b", margin: "0 0 15px 0", lineHeight: "1.5" }}>
            A critical self-evaluation of current competencies against enterprise security requirements.
          </p>
        </div>

        {/* 🎴 GRID 4 KAD UTAMA - Saiz minmax ditukar ke 280px supaya muat skrin phone! */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
          gap: "20px", 
          width: "100%",
          marginBottom: "45px",
          boxSizing: "border-box"
        }}>
          {assessmentCards.map((card, index) => (
            <div 
              key={index}
              style={{ 
                background: isDark ? "#171c28" : "#ffffff", 
                borderRadius: "14px", 
                border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`, 
                borderTop: `6px solid ${card.borderColor}`, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)",
                padding: "20px", // Dikurangkan sikit dari 30px supaya muat skrin kecik
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                width: "100%"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: card.textColor, marginTop: 0, marginBottom: "15px" }}>
                  {card.title}
                </h3>
                <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "15px" }}></div>
                
                <ul style={{ paddingLeft: "18px", margin: "0 0 25px 0", width: "100%", boxSizing: "border-box" }}>
                  {card.points.map((point, i) => (
                    <li key={i} style={{ 
                      fontSize: "0.95rem", 
                      color: isDark ? "#cbd5e1" : "#475569", 
                      lineHeight: "1.5", 
                      marginBottom: "10px", 
                      listStyleType: "square",
                      wordBreak: "break-word",
                      whiteSpace: "normal"
                    }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🏷️ BADGES CHIP - Ditambah gap yang fleksibel */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto", width: "100%" }}>
                {card.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    style={{ 
                      fontSize: "0.72rem", 
                      fontWeight: "700", 
                      color: card.textColor, 
                      background: card.bgColor, 
                      border: `1px solid ${card.borderColor}`, 
                      padding: "4px 8px", 
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      wordBreak: "break-word"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 📊 BAHAGIAN BOTTOM: INDUSTRY COMPARISON & ACTION PLAN (Dibaiki Grid Kelebaran) */}
        <div style={{ 
          background: isDark ? "#171c28" : "#ffffff", 
          borderRadius: "14px", 
          border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`, 
          padding: "25px",
          textAlign: "left",
          width: "100%",
          boxSizing: "border-box"
        }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#0d9488", marginTop: 0, marginBottom: "20px" }}>
            Industry Comparison & Action Plan
          </h3>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
            gap: "25px",
            width: "100%"
          }}>
            <div style={{ width: "100%", boxSizing: "border-box" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: isDark ? "#ffffff" : "#1e293b", marginBottom: "12px" }}>
                Industry Requirements for SOC Analysts
              </h4>
              <ul style={{ paddingLeft: "15px", margin: 0 }}>
                <li style={{ fontSize: "0.92rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: "8px", lineHeight: "1.5" }}>
                  Demand hands-on familiarity with Enterprise SIEM platforms (Splunk / IBM QRadar).
                </li>
                <li style={{ fontSize: "0.92rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: 0, lineHeight: "1.5" }}>
                  Require rapid incident containment and structured cloud-centric security operations.
                </li>
              </ul>
            </div>
            
            {/* Menggunakan padding and border yang responsif supaya tidak pecah di mobile */}
            <div style={{ 
              borderLeft: window.innerWidth > 768 ? (isDark ? "1px solid #334155" : "1px solid #e2e8f0") : "none", 
              borderTop: window.innerWidth <= 768 ? (isDark ? "1px solid #334155" : "1px solid #e2e8f0") : "none",
              paddingLeft: window.innerWidth > 768 ? "30px" : "0px",
              paddingTop: window.innerWidth <= 768 ? "20px" : "0px",
              width: "100%",
              boxSizing: "border-box"
            }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0d9488", marginBottom: "12px" }}>
                My Strategic Alignment & Mitigation Plan
              </h4>
              <ul style={{ paddingLeft: "15px", margin: 0 }}>
                <li style={{ fontSize: "0.92rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: "8px", lineHeight: "1.5" }}>
                  <strong>The Gap:</strong> Deep infrastructure defense skills, but need closer alignment with cloud security architecture.
                </li>
                <li style={{ fontSize: "0.92rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: 0, lineHeight: "1.5" }}>
                  <strong>Action Plan:</strong> Currently undertaking CCNA training (2025) and preparing for the CompTIA Security+ track.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Fade>
    </div>
  );
}