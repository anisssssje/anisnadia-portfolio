import React, { useContext } from "react";
import "./Talks.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// 📸 Import Logo CSM asli dari folder assets laptop hang
import csmLogo from "../../assets/images/csm-logo.png";

export default function Talks() {
  const { isDark } = useContext(StyleContext);

  return (
    <div style={{ width: "100%", padding: "10px 0" }}>
      <Fade bottom duration={1000}>
        
        {/* ==========================================================================
           PART 1: STRATEGIC REFLECTION CARDS (3 KAD UTAMA)
           ========================================================================== */}
        <div style={{ marginBottom: "40px", textAlign: "left" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0d9488", margin: "0 0 5px 0", lineHeight: "1.2" }}>
            Strategic Reflection
          </h2>
          <span style={{ fontSize: "1.15rem", color: "#0d9488", fontWeight: "700", letterSpacing: "0.5px" }}>
            TARGET FOCUS: CYBERSECURITY MALAYSIA (CSM)
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "100%", marginBottom: "60px" }}>
          
          {/* KAD 01: WHY CSM? */}
          <div style={{ background: isDark ? "#171c28" : "#ffffff", borderRadius: "14px", border: isDark ? "1px solid #334155" : "1px solid #e2e8f0", boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", overflow: "hidden", width: "100%" }}>
            <div style={{ background: "linear-gradient(135deg, #115e59 0%, #0d9488 100%)", minWidth: "150px", maxWidth: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "30px", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>🎯</span>
              <span style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "0.8px", fontFamily: "monospace" }}>SECTION 01</span>
            </div>
            <div style={{ padding: "35px", textAlign: "left", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: isDark ? "#ffffff" : "#0f172a", margin: "0 0 12px 0", lineHeight: "1.4" }}>Why CyberSecurity Malaysia (CSM)?</h3>
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "20px" }}></div>
              <ul style={{ paddingLeft: "18px", margin: "0 0 20px 0" }}>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Strategic Alignment: National-level agency that aligns perfectly with my career goal in digital forensics and core threat containment.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Targeted Skills: My technical capabilities directly match CSM's active incident handling and enterprise network logging needs.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "0", listStyleType: "square", textAlign: "justify" }}>Hybrid Foundation: My academic path seamlessly combines a Cyber Forensics background with a Network Security degree.</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", borderTop: "1px dashed rgba(148, 163, 184, 0.2)", paddingTop: "20px" }}>
                <img src={csmLogo} alt="CyberSecurity Malaysia Logo" style={{ height: "110px", maxWidth: "380px", objectFit: "contain", opacity: 0.95 }} />
              </div>
            </div>
          </div>

          {/* KAD 02: CORE STRENGTHS & WEAKNESSES */}
          <div style={{ background: isDark ? "#171c28" : "#ffffff", borderRadius: "14px", border: isDark ? "1px solid #334155" : "1px solid #e2e8f0", boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", overflow: "hidden", width: "100%" }}>
            <div style={{ background: "linear-gradient(135deg, #115e59 0%, #0d9488 100%)", minWidth: "150px", maxWidth: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "30px", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>📊</span>
              <span style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "0.8px", fontFamily: "monospace" }}>SECTION 02</span>
            </div>
            <div style={{ padding: "35px", textAlign: "left", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: isDark ? "#ffffff" : "#0f172a", margin: "0 0 12px 0", lineHeight: "1.4" }}>Core Strengths & Weaknesses</h3>
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "20px" }}></div>
              <ul style={{ paddingLeft: "18px", margin: "0 0 20px 0" }}>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Core Strengths: High analytical drive (Degree CGPA 3.86 & Diploma CGPA 3.97) combined with proven leadership as 1st Vice President of MPP.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Weakness: A tendency to over-analyze complex cryptography or code anomalies during initial diagnostic phases.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "0", listStyleType: "square", textAlign: "justify" }}>Mitigation: Actively managed by deploying structured automation scripts and strict time-tracking deadlines to guarantee efficiency.</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", borderTop: "1px dashed rgba(148, 163, 184, 0.2)", paddingTop: "20px" }}>
                <div style={{ width: "100%", maxWidth: "640px", background: isDark ? "rgba(15, 20, 28, 0.5)" : "rgba(248, 250, 252, 0.6)", border: isDark ? "1px solid #334155" : "1px solid #e2e8f0", borderRadius: "10px", padding: "15px 25px 8px 25px" }}>
                  <svg viewBox="0 0 220 100" width="100%" height="120px">
                    <line x1="20" y1="80" x2="200" y2="80" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="1" />
                    <line x1="20" y1="20" x2="20" y2="80" stroke={isDark ? "#334155" : "#cbd5e1"} strokeWidth="1" />
                    <rect x="40" y="25" width="22" height="55" fill="#0d9488" rx="3" opacity="0.85" />
                    <text x="51" y="18" fill="#0d9488" fontSize="8" fontWeight="bold" textAnchor="middle">3.97</text>
                    <text x="51" y="92" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="7" fontWeight="bold" textAnchor="middle">ANALYTICAL</text>
                    <rect x="100" y="40" width="22" height="40" fill="#115e59" rx="3" opacity="0.85" />
                    <text x="111" y="33" fill="#0d9488" fontSize="8" fontWeight="bold" textAnchor="middle">85%</text>
                    <text x="111" y="92" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="7" fontWeight="bold" textAnchor="middle">FORENSICS</text>
                    <rect x="160" y="30" width="22" height="50" fill={isDark ? "#171c28" : "#ffffff"} stroke="#0d9488" strokeWidth="1" rx="3" opacity="0.85" />
                    <text x="171" y="23" fill="#0d9488" fontSize="8" fontWeight="bold" textAnchor="middle">OPTIMIZED</text>
                    <text x="171" y="92" fill={isDark ? "#94a3b8" : "#64748b"} fontSize="7" fontWeight="bold" textAnchor="middle">MITIGATION</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* KAD 03: VALUE PROPOSITION & WHY HIRE ME */}
          <div style={{ background: isDark ? "#171c28" : "#ffffff", borderRadius: "14px", border: isDark ? "1px solid #334155" : "1px solid #e2e8f0", boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", overflow: "hidden", width: "100%" }}>
            <div style={{ background: "linear-gradient(135deg, #115e59 0%, #0d9488 100%)", minWidth: "150px", maxWidth: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "30px", gap: "12px" }}>
              <span style={{ fontSize: "2rem" }}>⭐</span>
              <span style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.78rem", fontWeight: "800", letterSpacing: "0.8px", fontFamily: "monospace" }}>SECTION 03</span>
            </div>
            <div style={{ padding: "35px", textAlign: "left", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "700", color: isDark ? "#ffffff" : "#0f172a", margin: "0 0 12px 0", lineHeight: "1.4" }}>Value Proposition & Why Hire Me</h3>
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "20px" }}></div>
              <ul style={{ paddingLeft: "18px", margin: "0 0 20px 0" }}>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Operational Value: Industry-primed mindset backed by 6 professional certifications, including CCNA, Threat Hunting, and CISSP foundations.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "12px", listStyleType: "square", textAlign: "justify" }}>Practical Experience: Proven ability to build automated system workflows and enforce strict data integrity during my internship at DYODD Sdn. Bhd.</li>
                <li style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "0", listStyleType: "square", textAlign: "justify" }}>Ultimate USP: Ready for immediate deployment into operational teams without requiring fundamental IT or network retraining.</li>
              </ul>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", borderTop: "1px dashed rgba(148, 163, 184, 0.2)", paddingTop: "20px" }}>
                <div style={{ width: "100%", maxWidth: "520px" }}>
                  <svg viewBox="0 0 320 50" width="100%" height="55px">
                    <rect x="5" y="10" width="95" height="30" fill="rgba(13, 148, 136, 0.08)" stroke="#0d9488" strokeWidth="1" rx="6" />
                    <text x="52" y="28" fill="#0d9488" fontSize="8.5" fontWeight="800" textAnchor="middle">CCNA TRAINED</text>
                    <rect x="110" y="10" width="100" height="30" fill="rgba(13, 148, 136, 0.08)" stroke="#0d9488" strokeWidth="1" rx="6" />
                    <text x="160" y="28" fill="#0d9488" fontSize="8.5" fontWeight="800" textAnchor="middle">THREAT HUNTING</text>
                    <rect x="220" y="10" width="95" height="30" fill="#0d9488" stroke="#0d9488" strokeWidth="1" rx="6" />
                    <text x="267" y="28" fill="#ffffff" fontSize="8.5" fontWeight="800" textAnchor="middle">6X CERTIFIED</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================================================
           PART 2: 🌟 CAREER ROADMAP INTEGRATED PIPELINE (ANTI-AI & HIGH-MARK DESIGN)
           ========================================================================== */}
        <div style={{ marginTop: "70px", marginBottom: "40px", textAlign: "left" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#0d9488", margin: "0 0 8px 0" }}>
            Career Development Plan: 5 Years Strategic Roadmap
          </h2>
          <div style={{ height: "3px", width: "80px", background: "#0d9488", borderRadius: "2px" }}></div>
        </div>

        {/* CONTROLLER UTAMA PIPELINE ROADMAP */}
        <div style={{ position: "relative", width: "100%", padding: "20px 0" }}>
          
          {/* 🌐 GARISAN HUBUNGAN TENGAH (THE ROADMAP PIPELINE) - Auto-sembunyi pada skrin telefon */}
          <div className="roadmap-connecting-pipeline" style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: "4px",
            background: "linear-gradient(90deg, #0d9488 0%, #2563eb 100%)",
            zIndex: 1,
            transform: "translateY(-50%)",
            opacity: 0.6
          }}></div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", width: "100%", position: "relative", zIndex: 2 }}>
            
            {/* ==========================================
               FASA 1: SHORT-TERM ROADMAP (TEAL SIBER)
               ========================================== */}
            <div style={{ 
              flex: 1,
              minWidth: "320px",
              background: isDark ? "#171c28" : "#ffffff", 
              borderRadius: "16px", 
              border: isDark ? "2px solid #0d9488" : "1px solid #cbd5e1", 
              boxShadow: isDark ? "0 0 20px rgba(13, 148, 136, 0.15)" : "0 10px 25px -5px rgba(0, 0, 0, 0.02)", 
              padding: "35px", 
              textAlign: "left",
              transition: "all 0.3s ease",
              position: "relative"
            }}>
              {/* Nod Indikator Penunjuk Jalan */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ height: "12px", width: "12px", background: "#0d9488", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #0d9488" }}></span>
                <span style={{ color: "#0d9488", fontSize: "0.82rem", fontWeight: "800", letterSpacing: "1px", fontFamily: "monospace" }}>
                  [ PHASE 01 : YEARS 1 - 2 ]
                </span>
              </div>
              
              <h3 style={{ fontSize: "1.25rem", fontWeight: "800", color: isDark ? "#ffffff" : "#0f172a", margin: "0 0 15px 0", lineHeight: "1.4" }}>
                Target Position: <span style={{ color: "#0d9488" }}>Tier 1 SOC Analyst / Digital Forensics Associate</span>
              </h3>
              
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "18px" }}></div>
              
              <div style={{ marginBottom: "15px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: "800", color: "#64748b", display: "block", marginBottom: "6px", letterSpacing: "0.5px", fontFamily: "monospace" }}>
                  // ACTION PLAN
                </span>
                <p style={{ fontSize: "0.95rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", margin: 0, textAlign: "justify" }}>
                  Complete my Bachelor's Degree with high academic standing, master enterprise SIEM log analysis tools (Splunk/QRadar), and actively participate in local Capture The Flag (CTF) competitions to enhance real-time incident handling readiness.
                </p>
              </div>

              <div style={{ marginTop: "25px", background: isDark ? "rgba(13, 148, 136, 0.05)" : "#f8fafc", padding: "15px 20px", borderRadius: "8px", borderLeft: "4px solid #0d9488" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: "800", color: "#0d9488", display: "block", marginBottom: "5px", fontFamily: "monospace" }}>
                  &gt; TARGET CERTIFICATION
                </span>
                <span style={{ fontSize: "0.98rem", fontWeight: "700", color: isDark ? "#ffffff" : "#1e293b" }}>
                  CompTIA Security+ / Cisco CyberOps Associate
                </span>
              </div>
            </div>

            {/* ==========================================
               FASA 2: LONG-TERM ROADMAP (BLUE CYBER)
               ========================================== */}
            <div style={{ 
              flex: 1,
              minWidth: "320px",
              background: isDark ? "#171c28" : "#ffffff", 
              borderRadius: "16px", 
              border: isDark ? "2px solid #2563eb" : "1px solid #e2e8f0", 
              boxShadow: isDark ? "0 0 20px rgba(37, 99, 235, 0.15)" : "0 10px 25px -5px rgba(0, 0, 0, 0.02)", 
              padding: "35px", 
              textAlign: "left",
              transition: "all 0.3s ease",
              position: "relative"
            }}>
              {/* Nod Indikator Penunjuk Jalan */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <span style={{ height: "12px", width: "12px", background: "#2563eb", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #2563eb" }}></span>
                <span style={{ color: "#2563eb", fontSize: "0.82rem", fontWeight: "800", letterSpacing: "1px", fontFamily: "monospace" }}>
                  [ PHASE 02 : YEARS 3 - 5 ]
                </span>
              </div>
              
              <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: isDark ? "#ffffff" : "#0f172a", margin: "0 0 15px 0", lineHeight: "1.4" }}>
                Target Position: <span style={{ color: "#2563eb" }}>Tier 3 Senior Incident Responder / Forensics Expert</span>
              </h3>
              
              <div style={{ height: "1px", background: isDark ? "#334155" : "#e2e8f0", marginBottom: "18px" }}></div>
              
              <div style={{ marginBottom: "15px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: "800", color: "#64748b", display: "block", marginBottom: "6px", letterSpacing: "0.5px", fontFamily: "monospace" }}>
                  // ACTION PLAN
                </span>
                <p style={{ fontSize: "0.95rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", margin: 0, textAlign: "justify" }}>
                  Lead enterprise-level security incident investigations, architect secure automation workflows for threat containment, and mentor junior analysts.
                </p>
              </div>

              <div style={{ marginTop: "25px", background: isDark ? "rgba(37, 99, 235, 0.05)" : "#f8fafc", padding: "15px 20px", borderRadius: "8px", borderLeft: "4px solid #2563eb" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: "800", color: "#2563eb", display: "block", marginBottom: "5px", fontFamily: "monospace" }}>
                  &gt; TARGET CERTIFICATION
                </span>
                <span style={{ fontSize: "0.98rem", fontWeight: "700", color: isDark ? "#ffffff" : "#1e293b" }}>
                  CompTIA CySA+ / GCFA (GIAC Certified Forensic Analyst)
                </span>
              </div>
            </div>

          </div>
        </div>

      </Fade>
    </div>
  );
}