import React, { useContext } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Import 3 imej rasmi dari folder assets laptop hang
import iotImg from "../../assets/images/project-iot.png";
import stegoImg from "../../assets/images/project-stego.png";
import vunImg from "../../assets/images/project-vun.png";

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
    }
  ];

  return (
    <div className="academic-projects-main" id="academic-projects">
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA SEKSYEN */}
        <div className="projects-section-header">
          <h2 className={isDark ? "dark-mode" : ""}>Academic & Core Capstone Projects</h2>
          <p className={isDark ? "dark-sub" : ""}>
            Tangible implementation of secure communication protocols and hardware integration.
          </p>
        </div>

        {/* LIST PROJEK SECARA ROW BERPERINGKAT (SCROLL DOWN STYLE) */}
        <div className="projects-showcase-container">
          {academicProjects.map((project, index) => {
            // Logic Pintar: Projek ke-2 (index 1) akan auto-terbalikkan susunan gambar ke kiri, teks ke kanan
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`project-fullscreen-row ${isEven ? "normal-row" : "reverse-row"} ${isDark ? "dark" : ""}`}
              >
                
                {/* TIMAL KIRI/KANAN: HURAIAN TEKS PROJEK */}
                <div className="project-text-side">
                  <h3 className="project-row-title">
                    <span className="project-index-badge">0{index + 1}</span> {project.title}
                  </h3>
                  <div className="project-row-divider"></div>
                  <ul className="project-row-points">
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* TIMAL KANAN/KIRI: PAPARAN GAMBAR BESAR PENUH (FULL FRAME KEMAS) */}
                <div className="project-image-side">
                  <div className="project-showcase-frame">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="project-showcase-img" 
                    />
                  </div>
                  <span className="project-showcase-caption">{project.caption}</span>
                </div>

              </div>
            );
          })}
        </div>

      </Fade>
    </div>
  );
}