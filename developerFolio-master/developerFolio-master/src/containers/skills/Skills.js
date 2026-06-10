import React, { useContext } from "react";
import "./Skills.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className="career-exploration-main" id="skills">
      <Fade bottom duration={1000}>
        
        {/* HEADER UTAMA */}
        <div className="career-header-div">
          <h1 className={isDark ? "dark-mode career-heading" : "career-heading"}>
            Career Exploration
          </h1>
          <h2 className="career-target-role">
            TARGET ROLE: SOC Analyst (Incident Responder)
          </h2>
        </div>

        {/* SYSTEM 2 KOLUM LAYOUT */}
        <div className="career-two-column-container">
          
          {/* KOLUM KIRI: TEKS VERSI POINT RINGKAS & PADAT */}
          <div className="career-text-column">
            
            {/* Kategori 1: Core Responsibilities */}
            <div className="career-category-group">
              <h3 className={isDark ? "dark-mode category-title" : "category-title"}>
                🛡️ Core Responsibilities
              </h3>
              <ul className="career-bullet-list">
                <li>
                  <strong>Continuous Monitoring:</strong> Execute active log triage, monitor SIEM alerts, and perform real-time network traffic analysis.
                </li>
                <li>
                  <strong>Incident Containment:</strong> Run rapid isolation and mitigation protocols to neutralize infrastructure security threats.
                </li>
              </ul>
            </div>

            {/* Kategori 2: Technical Expertise Required */}
            <div className="career-category-group">
              <h3 className={isDark ? "dark-mode category-title" : "category-title"}>
                💻 Technical Expertise Required
              </h3>
              <ul className="career-bullet-list">
                <li>
                  <strong>Packet Sniffing:</strong> Conduct advanced network packet dissection and anomaly investigation via Wireshark.
                </li>
                <li>
                  <strong>Automation Scripting:</strong> Deploy Python and shell tools to automate proactive threat hunting and security tasks.
                </li>
                <li>
                  <strong>System Hardening:</strong> Configure enterprise Linux/Windows access controls and firewall policy logging.
                </li>
              </ul>
            </div>

            {/* Kategori 3: Digital Forensics Integration */}
            <div className="career-category-group">
              <h3 className={isDark ? "dark-mode category-title" : "category-title"}>
                🔍 Digital Forensics Integration
              </h3>
              <ul className="career-bullet-list">
                <li>
                  <strong>Artifact Analysis:</strong> Investigate system footprints, reconstruct cyber attack paths, and preserve critical digital evidence.
                </li>
                <li>
                  <strong>Threat Intelligence:</strong> Deliver actionable diagnostic intelligence to prevent critical enterprise data exfiltration.
                </li>
              </ul>
            </div>

          </div>

          {/* KOLUM KANAN: GRAFIK ILUSTRASI VEKTOR PAPAN PEMUKA SOC ANALYST (PILIHAN A) */}
          <div className="career-graphic-column">
            <div className="soc-dashboard-vector-box">
              <svg viewBox="0 0 550 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
  
  {/* 🏢 LATAR BELAKANG AMBIENT GLOW (Bilik Operasi Keselamatan) */}
  <circle cx="360" cy="210" r="140" fill="#0d9488" opacity="0.04" filter="blur(20px)" />
  
  {/* 👤 KARAKTER: SOC ANALYST / INCIDENT RESPONDER (Sisi Kiri Menghadap Monitor) */}
  <g className="cyber-analyst-character" opacity="0.95">
    {/* Kerusi Pusing Ergonomik (Backrest) */}
    <path d="M75 180 C65 180 58 210 62 260 C64 290 75 320 85 330 L95 330 Z" fill="#334155" />
    <path d="M80 320 L70 390 M80 350 L100 390" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
    
    {/* Badan / Kot / Pakaian (Suit Jacket) */}
    <path d="M100 280 C110 260 135 255 155 265 C175 275 185 300 185 340 L110 390 Z" fill={isDark ? "#1e293b" : "#475569"} stroke="#0d9488" strokeWidth="1.5" />
    {/* Kolar Kemeja & Tali Leher Teal */}
    <path d="M140 260 L148 285 L156 260 Z" fill="#ffffff" />
    <path d="M146 280 L150 315 L154 280 Z" fill="#0d9488" />
    
    {/* Kepala & Gaya Rambut Profesional (Ikatan Kemas) */}
    <circle cx="148" cy="210" r="32" fill={isDark ? "#cbd5e1" : "#f8fafc"} stroke={isDark ? "#475569" : "#cbd5e1"} strokeWidth="1" />
    <path d="M122 200 C120 170 145 165 165 175 C180 185 182 210 175 225 C165 200 140 195 122 200 Z" fill="#1e293b" /> 
    
    {/* Fon Kepala Taktikal SOC (Cyber Headset dengan Mic) */}
    <path d="M132 182 C125 195 125 215 134 228" fill="none" stroke="#0d9488" strokeWidth="4" strokeLinecap="round" />
    <rect x="124" y="200" width="8" height="14" rx="3" fill="#0f172a" />
    <path d="M130 212 L148 222" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
    
    {/* Tangan Terjulur Tengah Mengawal Papan Kekunci */}
    <path d="M165 315 C180 315 205 325 215 335 L190 355 Z" fill={isDark ? "#cbd5e1" : "#f8fafc"} />
    <path d="M150 310 C165 300 185 305 195 325" fill="none" stroke={isDark ? "#1e293b" : "#475569"} strokeWidth="3" strokeLinecap="round" />
  </g>

  {/* ⌨️ PAPAN KEKUNCI SIBER (Keyboard & Mouse Setup) */}
  <rect x="220" y="340" width="90" height="8" rx="3" fill="#64748b" opacity="0.7" />
  <rect x="320" y="342" width="12" height="6" rx="2" fill="#0d9488" opacity="0.6" />

  {/* 🖥️ PROJEKSI MONITOR UTAMA: JAUH LEBIH BESAR & LUAS (Dinaikkan ke Skala 550x420) */}
  <g className="expanded-monitor-group">
    {/* Kaki Tapak Monitor */}
    <path d="M350 305 L330 365 L410 365 L390 305 Z" fill="#0d9488" opacity="0.8" />
    <rect x="310" y="360" width="120" height="8" rx="3" fill="#0d9488" />
    
    {/* Bingkai Luar Monitor Gergasi */}
    <rect x="230" y="35" width="295" height="270" rx="14" fill={isDark ? "#1e293b" : "#f1f5f9"} stroke="#0d9488" strokeWidth="4.5" />
    
    {/* Bar Atas Sistem Fail Window */}
    <rect x="242" y="48" width="271" height="30" rx="6" fill="#0d9488" opacity="0.15" />
    <circle cx="257" cy="63" r="4.5" fill="#ef4444" />
    <circle cx="270" cy="63" r="4.5" fill="#f59e0b" />
    <circle cx="283" cy="63" r="4.5" fill="#10b981" />
    <rect x="302" y="58" width="90" height="9" rx="3" fill="#0d9488" opacity="0.4" />
    
    {/* 📊 SUB-GRID INTERAKTIF DALAM SKRIN MONITOR BESAR */}
    
    {/* PANEL KIRI: LIVE SIEM TERMINAL STREAM (Tulisan Siber Jelas) */}
    <rect x="242" y="90" width="145" height="115" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#cbd5e1" strokeWidth="1" />
    <rect x="250" y="98" width="65" height="10" rx="2" fill="#0d9488" opacity="0.7" />
    
    <text x="250" y="125" fill="#ef4444" fontFamily="monospace" fontSize="7.5" fontWeight="bold">[ALERT] DDoS SynFlood</text>
    <text x="250" y="138" fill="#10b981" fontFamily="monospace" fontSize="7" fontWeight="bold">SRC: 192.168.10.24</text>
    <text x="250" y="152" fill="#f59e0b" fontFamily="monospace" fontSize="7.5" fontWeight="bold">[WARN] BruteForce SSH</text>
    <text x="250" y="165" fill="#0d9488" fontFamily="monospace" fontSize="6.5" fontWeight="bold">PORT: 22 — Triage Act</text>
    <text x="250" y="178" fill="#ef4444" fontFamily="monospace" fontSize="7" fontWeight="bold">[CRIT] Data Exfil Risk</text>
    <text x="250" y="191" fill="#64748b" fontFamily="monospace" fontSize="6.5">Status: Isolating...</text>
    
    <circle cx="372" cy="122" r="3.5" fill="#ef4444" className="pulse-dot" />
    <circle cx="372" cy="150" r="3.5" fill="#f59e0b" />
    <circle cx="372" cy="175" r="3.5" fill="#ef4444" className="pulse-dot" />

    {/* PANEL KANAN: RADAR ANOMALI RANGKAIAN (Membulat Hebat) */}
    <rect x="397" y="90" width="116" height="115" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#cbd5e1" strokeWidth="1" />
    <circle cx="455" cy="148" r="38" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    <circle cx="455" cy="148" r="20" stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.3" />
    <line x1="455" y1="110" x2="455" y2="186" stroke="#0d9488" strokeWidth="1" opacity="0.4" />
    <line x1="417" y1="148" x2="493" y2="148" stroke="#0d9488" strokeWidth="1" opacity="0.4" />
    {/* Titik Serangan Merah Menyala */}
    <circle cx="440" cy="130" r="5" fill="#ef4444" className="pulse-dot" />
    <circle cx="475" cy="165" r="4.5" fill="#10b981" />

    {/* PANEL BAWAH: GRAF METRIK TRAFIK TRAFFIC LIVE */}
    <rect x="242" y="215" width="271" height="78" rx="8" fill={isDark ? "#0f172a" : "#ffffff"} stroke="#cbd5e1" strokeWidth="1" />
    <path d="M 250 275 L 290 245 L 330 265 L 370 235 L 410 255 L 450 230 L 495 248" fill="none" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 250 275 L 290 245 L 330 265 L 370 235 L 410 255 L 450 230 L 495 248 L 495 285 L 250 285 Z" fill="url(#grad-extended)" opacity="0.12" />
  </g>

  {/* Definisi Warna Gradient Graf */}
  <defs>
    <linearGradient id="grad-extended" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#0d9488" />
      <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
    </linearGradient>
  </defs>
</svg>
            </div>
          </div>

        </div>

      </Fade>
    </div>
  );
}