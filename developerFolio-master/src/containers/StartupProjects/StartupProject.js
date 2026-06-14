import React, { useContext } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Import 4 imej rasmi dari folder assets laptop hang
import iotImg from "../../assets/images/project-iot.png";
import stegoImg from "../../assets/images/project-stego.png";
import vunImg from "../../assets/images/project-vun.png";
import wiresharkImg from "../../assets/images/project-wireshark.png";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  const academicProjects = [
    {
      title: "IoT-Based Smart Inhaler & Respiratory Training System",
      points: [
        "Architected an end-to-end telemetry hardware system capturing real-time respiratory health data.",
        "Engineered secure data transmission controls to prevent information tampering over public networks.",
        "Enforced cryptographic data integrity to protect sensitive user healthcare telemetry from unauthorized interception."
      ],
      image: iotImg,
      caption: "Technical Exhibit 1: IoT Telemetry Access Verification",
      imageSize: "360px" 
    },
    {
      title: "Secure Image Steganography using Hybrid Cryptographic Algorithms",
      points: [
        "Developed a high-security data-hiding algorithm integrating Two's Complement, Dual Bit Addition, and Pseudo-Random Number Generators (PRNG).",
        "Focused on maximizing data embedding capacity while preserving absolute statistical invisibility within digital images.",
        "Optimized with a 16-bit End of Bit (EOB) technique to guarantee rapid, robust data extraction and exceptionally low bit error rates."
      ],
      image: stegoImg,
      caption: "Technical Exhibit 2: Robust Extraction Bit Error Rate Log",
      imageSize: "480px"
    },
    {
      title: "Enterprise Vulnerability Diagnostics & Traffic Analysis",
      points: [
        "Executed hands-on web application penetration testing using Burp Suite (Intruder, Decoder) to audit JWT predictability, username enumeration, and XSS filters.",
        "Conducted deep network-layer packet analysis via Wireshark to intercept and dissect unencrypted plain-text credentials over FTP and HTTP.",
        "Simulated automated backend exploits, user credential updates, and table creation using active SQL Injection (SQLi) deployment inside WebGoat environments."
      ],
      image: vunImg,
      caption: "Technical Exhibit 3: Deep Network-Layer Packet Dissection",
      imageSize: "480px"
    },
    {
      title: "Enterprise Network Traffic Forensics & Incident Isolation",
      points: [
        "Intercepted and dissected deep network-layer packet captures via Wireshark to isolate live security incidents and credential exposure.",
        "Reconstructed multi-stage TCP handshake sequences and TCP streams to investigate unencrypted plain-text communication vulnerabilities (FTP/HTTP).",
        "Analyzed Base64 encoded payloads within HTTP Basic Authentication headers to audit systemic weaknesses against eavesdropping attacks."
      ],
      image: wiresharkImg,
      caption: "Technical Exhibit 4: Live Plain-Text Credential Extraction & Packet Isolation",
      imageSize: "100%" // 🌐 DIUBAH KE 100% UNTUK KOTAK 4 SUPAYA GAMBAR WIRESHARK KEMBANG BESAR MAKSIMUM!
    }
  ];

  return (
    <div className="academic-projects-main" id="academic-projects" style={{ width: "100%", padding: "40px 0", boxSizing: "border-box" }}>
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA SEKSYEN */}
        <div style={{ textAlign: "left", marginBottom: "30px", width: "100%" }}>
          <h2 className={isDark ? "dark-mode" : ""} style={{ fontSize: "calc(1.8rem + 1vw)", fontWeight: "700", color: "#0d9488", marginBottom: "25px", marginTop: 0, lineHeight: "1.3" }}>
            Academic & Core Capstone Projects
          </h2>
          <p className={isDark ? "dark-sub" : ""} style={{ fontSize: "1rem", color: "#64748b", margin: 0 }}>
            Tangible implementation of secure communication protocols, digital forensics, and network defense validation.
          </p>
        </div>

        {/* LIST PROJEK SECARA ROW BERPERINGKAT */}
        <div style={{ display: "flex", flexDirection: "column", gap: "35px", width: "100%" }}>
          {academicProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className="anis-custom-project-row-card"
                style={{ 
                  display: "grid",
                  gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
                  alignItems: "center", 
                  width: "100%",
                  gap: "30px",
                  padding: "25px",
                  background: isDark ? "#171c28" : "#ffffff",
                  borderRadius: "14px", 
                  border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`, 
                  boxSizing: "border-box",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05)";
                }}
              >
                
                {/* SISI TEKS (SURE BERSIH TIADA CITE) */}
                <div style={{ 
                  width: "100%", 
                  textAlign: "left", 
                  boxSizing: "border-box",
                  order: window.innerWidth > 768 ? (isEven ? 1 : 2) : 1 
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "15px" }}>
                    <span style={{ 
                      padding: "5px 10px", 
                      background: "rgba(13, 148, 136, 0.15)", 
                      borderRadius: "8px", 
                      fontSize: "1rem", 
                      fontWeight: "700", 
                      color: "#0d9488",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      flexShrink: 0
                    }}>
                      0{index + 1}
                    </span> 
                    <h3 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#0d9488", margin: 0, lineHeight: "1.3" }}>
                      {project.title}
                    </h3>
                  </div>
                  <div style={{ height: "2px", background: "#0d9488", width: "50px", marginBottom: "20px" }}></div>
                  <ul style={{ paddingLeft: "18px", margin: "0 0 10px 0" }}>
                    {project.points.map((point, i) => (
                      <li key={i} style={{ fontSize: "0.95rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "10px", listStyleType: "square" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SISI GAMBAR (SAIZ KOTAK 4 DIPAKSA LEBAR MAKSIMUM) */}
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  width: "100%", 
                  boxSizing: "border-box",
                  order: window.innerWidth > 768 ? (isEven ? 2 : 1) : 2 
                }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: "100%", 
                      maxWidth: project.imageSize, 
                      height: "auto", 
                      borderRadius: "8px", 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                      display: "block",
                      margin: "0 auto"
                    }} 
                  />
                  <span style={{ display: "block", marginTop: "12px", fontSize: "0.8rem", color: "#64748b", fontStyle: "italic", textAlign: "center", width: "100%" }}>
                    {project.caption}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </Fade>
    </div>
  );
}