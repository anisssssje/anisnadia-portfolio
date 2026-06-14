import React, { useContext } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Import 4 imej rasmi dari folder assets laptop hang
import iotImg from "../../assets/images/project-iot.png";
import stegoImg from "../../assets/images/project-stego.png";
import vunImg from "../../assets/images/project-vun.png";
import wiresharkImg from "../../assets/images/project-wireshark.png"; // Gambar FTP Credentials Wireshark

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
      caption: "Technical Exhibit 1: IoT Telemetry Access Verification"
    },
    {
      title: "Secure Image Steganography using Hybrid Cryptographic Algorithms",
      points: [
        "Developed a high-security data-hiding algorithm integrating Two's Complement, Dual Bit Addition, and Pseudo-Random Number Generators (PRNG).",
        "Focused on maximizing data embedding capacity while preserving absolute statistical invisibility within digital images.",
        "Optimized with a 16-bit End of Bit (EOB) technique to guarantee rapid, robust data extraction and exceptionally low bit error rates."
      ],
      image: stegoImg,
      caption: "Technical Exhibit 2: Robust Extraction Bit Error Rate Log"
    },
    {
      title: "Enterprise Vulnerability Diagnostics & Traffic Analysis",
      points: [
        "Executed hands-on web application penetration testing using Burp Suite (Intruder, Decoder) to audit JWT predictability, username enumeration, and XSS filters.",
        "Conducted deep network-layer packet analysis via Wireshark to intercept and dissect unencrypted plain-text credentials over FTP and HTTP.",
        "Simulated automated backend exploits, user credential updates, and table creation using active SQL Injection (SQLi) deployment inside WebGoat environments."
      ],
      image: vunImg,
      caption: "Technical Exhibit 3: Deep Network-Layer Packet Dissection"
    },
    {
      title: "Enterprise Network Traffic Forensics & Incident Isolation",
      points: [
        "Intercepted and dissected deep network-layer packet captures via Wireshark to isolate live security incidents and credential exposure.",
        "Reconstructed multi-stage TCP handshake sequences and TCP streams to investigate unencrypted plain-text communication vulnerabilities (FTP/HTTP).",
        "Analyzed Base64 encoded payloads within HTTP Basic Authentication headers to audit systemic weaknesses against eavesdropping attacks."
      ],
      image: wiresharkImg,
      caption: "Technical Exhibit 4: Live Plain-Text Credential Extraction & Packet Isolation"
    }
  ];

  return (
    <div className="academic-projects-main" id="academic-projects" style={{ width: "100%", padding: "20px 0", boxSizing: "border-box" }}>
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA SEKSYEN */}
        <div className="projects-section-header" style={{ textAlign: "left", marginBottom: "40px" }}>
          <h2 className={isDark ? "dark-mode" : ""} style={{ fontSize: "calc(1.8rem + 1vw)", fontWeight: "700", color: "#0d9488", marginBottom: "10px" }}>
            Academic & Core Capstone Projects
          </h2>
          <p className={isDark ? "dark-sub" : ""} style={{ fontSize: "1rem", color: "#64748b" }}>
            Tangible implementation of secure communication protocols, digital forensics, and network defense validation.
          </p>
        </div>

        {/* LIST PROJEK SECARA ROW BERPERINGKAT (FLEXBOX AUTO-CENTER & NO FRAME) */}
        <div className="projects-showcase-container" style={{ display: "flex", flexDirection: "column", gap: "60px", width: "100%" }}>
          {academicProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                style={{ 
                  display: "flex",
                  flexDirection: isEven ? "row" : "row-reverse",
                  flexWrap: "wrap", // Auto-pecah baris menegak jika skrin phone sempit
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: "30px",
                  padding: "20px",
                  background: isDark ? "#171c28" : "#ffffff",
                  borderRadius: "12px",
                  border: `1px solid ${isDark ? "#334155" : "#e2e8f0"}`,
                  boxSizing: "border-box"
                }}
              >
                
                {/* TEKS PENERANGAN (FLEKSIBEL SEBELAH SISI) */}
                <div style={{ flex: "1 1 450px", minWidth: "0", textAlign: "left", boxSizing: "border-box" }}>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#0d9488", margin: "0 0 15px 0" }}>
                    <span style={{ padding: "4px 8px", background: "rgba(13, 148, 136, 0.1)", borderRadius: "6px", marginRight: "10px", fontSize: "1.1rem" }}>0{index + 1}</span> 
                    {project.title}
                  </h3>
                  <div style={{ height: "2px", background: "#0d9488", width: "60px", marginBottom: "20px" }}></div>
                  <ul style={{ paddingLeft: "18px", margin: 0 }}>
                    {project.points.map((point, i) => (
                      <li key={i} style={{ fontSize: "0.98rem", color: isDark ? "#cbd5e1" : "#475569", lineHeight: "1.6", marginBottom: "10px", listStyleType: "square" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMMEJ BERSIH TANPA FRAME (AUTO RE-SIZE DAN CENTERED) */}
                <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", boxSizing: "border-box" }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: "100%", 
                      maxWidth: "550px", 
                      height: "auto", 
                      borderRadius: "8px", 
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      display: "block"
                    }} 
                  />
                  <span style={{ display: "block", marginTop: "12px", fontSize: "0.82rem", color: "#64748b", fontStyle: "italic", textAlign: "center" }}>
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