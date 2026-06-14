import React, { useContext } from "react";
import "./Achievement.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// 📸 IMPORT 6 IMEDJ SIJIL ASLI DARI LAPTOP HANG
import ccnaImg from "../../assets/images/cert-ccna.png";
import cisspImg from "../../assets/images/cert-cissp.png";
import huntingImg from "../../assets/images/cert-hunting.png";
import hackingImg from "../../assets/images/cert-hacking.png";
import mborImg from "../../assets/images/cert-mbor.png";
import webinarImg from "../../assets/images/cert-webinar.png";

export default function Certification() {
  const { isDark } = useContext(StyleContext);

  const certData = [
    {
      badge: "Cisco Verification",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      desc: "Validates core competence in enterprise network architecture, secure routing deployment, and traffic flow optimization.",
      img: ccnaImg
    },
    {
      badge: "HRD Corp Certified",
      title: "Certified Information Systems Security Professional (CISSP) Foundation",
      desc: "Demonstrates a profound understanding of global security governance, identity management, and proactive asset protection frameworks.",
      img: cisspImg
    },
    {
      badge: "HRD Corp Certified",
      title: "Cyber Threat Hunting & Defensive Security Operations",
      desc: "Covers live log triage, advanced malicious indicator detection, and rapid incident isolation methodologies across host environments.",
      img: huntingImg
    },
    {
      badge: "Great Learning Academy",
      title: "Ethical Hacking & Vulnerability Assessment Track",
      desc: "Practical training in penetration testing execution, token predictability testing, cross-site scripting (XSS), and logic bypass.",
      img: hackingImg
    },
    {
      badge: "UTM & MBOR Record",
      title: "National Record: Most Participants in Virtual Coding Programme",
      desc: "Honored in the Malaysia Book of Records for competitive software integration and large-scale virtual coding script executions.",
      img: mborImg
    },
    {
      badge: "UiTM Collaboration",
      title: "Webinar Cybercrime: The Next Victim Analysis",
      desc: "Academic exposure focusing on modern digital attack paths, data exfiltration patterns, and national cyber threats.",
      img: webinarImg
    }
  ];

  return (
    <div className="certs-section-main" id="certifications">
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA */}
        <div className="certs-header-div">
          <h2 className={isDark ? "dark-mode" : ""}>Certifications & Professional Trainings</h2>
          <p className={isDark ? "dark-sub" : ""}>
            Professional validation and academic achievements in security operations.
          </p>
        </div>

        {/* GRID LAYOUT 3 KOLUM UNTUK 6 KAD SIJIL */}
        <div className="certs-grid-container">
          {certData.map((cert, index) => (
            <div 
              key={index} 
              className={isDark ? "cert-premium-card dark" : "cert-premium-card"} 
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              
              <div className="cert-card-body" style={{ flexGrow: 1 }}>
                <span className="cert-badge-tag">{cert.badge}</span>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-desc">{cert.desc}</p>
              </div>

              {/* 🖼️ ZASSS! INDUK GAMBAR: TIADA FRAME, TIADA BACKGROUND, 100% AUTO-CENTRE KAT PHONE & LAPTOP */}
              <div style={{
                width: "100%",
                borderTop: isDark ? "1px dashed #334155" : "1px dashed #cbd5e1",
                padding: "20px", 
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center", // Paksa centre mendatar
                alignItems: "center",     // Paksa centre menegak
                margin: "0 auto"
              }}>
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  style={{
                    width: "100%",
                    maxWidth: "270px", // Saiz ngam-ngam paparan kad
                    height: "auto",
                    maxHeight: "190px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto", // Kunci mati center global browser mobile
                    opacity: 0.95
                  }}
                />
              </div>

            </div>
          ))}
        </div>

      </Fade>
    </div>
  );
}