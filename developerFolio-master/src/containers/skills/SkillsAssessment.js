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
        "Cryptographic Applications & Firewall Management"
      ],
      tags: ["Wireshark", "Digital Forensics", "Penetration Testing", "Cryptography"]
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
  <div className="skills-assessment-main-wrapper" style={{ width: "100%", padding: "10px 0" }}>
    <Fade bottom duration={1000}>
      
      {/* JARAK DIBAIK PULIH KEPADA 55px SUPAYA TIADA PELANGGARAN KAD */}
      <div style={{ marginBottom: "55px", textAlign: "left", width: "100%" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0d9488", margin: "0 0 10px 0", lineHeight: "1.2" }}>
          Personal Skills Assessment
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#64748b", margin: "0 0 15px 0", lineHeight: "1.5" }}>
          A critical self-evaluation of current competencies against enterprise security requirements.
        </p>
      </div>

        {/* 🎴 GRID 4 KAD UTAMA DENGAN WARNA WARNI SIBER PREMIUM */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", 
          gap: "30px", 
          width: "100%",
          marginBottom: "45px" 
        }}>
          {assessmentCards.map((card, index) => (
            <div 
              key={index}
              style={{ 
                background: isDark ? "#171c28" : "#ffffff", 
                borderRadius: "14px", 
                border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`, 
                borderTop: `6px solid ${card.borderColor}`, // Garis atas tebal ikut warna tema kad
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)",
                padding: "30px",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "between"
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: card.textColor, marginTop: 0, marginBottom: "20px" }}>
                  {card.title}
                </h3>
                <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "20px" }}></div>
                
                <ul style={{ paddingLeft: "18px", margin: "0 0 30px 0" }}>
                  {card.points.map((point, i) => (
                    <li key={i} style={{ fontSize: "1.02rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🏷️ PENGGUNAAN BOX BADGES YANG SENADA DENGAN WARNA THEME KAD */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto" }}>
                {card.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    style={{ 
                      fontSize: "0.78rem", 
                      fontWeight: "700", 
                      color: card.textColor, 
                      background: card.bgColor, 
                      border: `1px solid ${card.borderColor}`, 
                      padding: "6px 12px", 
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 📊 BAHAHIAN BOTTOM: INDUSTRY COMPARISON & ACTION PLAN */}
        <div style={{ 
          background: isDark ? "#171c28" : "#ffffff", 
          borderRadius: "14px", 
          border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`, 
          padding: "35px",
          textAlign: "left"
        }}>
          <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#0d9488", marginTop: 0, marginBottom: "25px" }}>
            Industry Comparison & Action Plan
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "40px" }}>
            <div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: isDark ? "#ffffff" : "#1e293b", marginBottom: "15px" }}>
                Industry Requirements for SOC Analysts
              </h4>
              <ul style={{ paddingLeft: "15px", margin: 0 }}>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: "10px", lineHeight: "1.5" }}>
                  Demand hands-on familiarity with Enterprise SIEM platforms (Splunk / IBM QRadar).
                </li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: 0, lineHeight: "1.5" }}>
                  Require rapid incident containment and structured cloud-centric security operations.
                </li>
              </ul>
            </div>
            <div style={{ borderLeft: isDark ? "1px solid #334155" : "1px solid #e2e8f0", paddingLeft: "40px" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0d9488", marginBottom: "15px" }}>
                My Strategic Alignment & Mitigation Plan
              </h4>
              <ul style={{ paddingLeft: "15px", margin: 0 }}>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: "10px", lineHeight: "1.5" }}>
                  <strong>The Gap:</strong> Deep infrastructure defense skills, but need closer alignment with cloud security architecture.
                </li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", marginBottom: 0, lineHeight: "1.5" }}>
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