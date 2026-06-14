import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImg from "../../assets/images/profile.png"; 

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  return (
  <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        
        {/* 📝 BAHAGIAN KIRI: TEKS UTAMA (Diberi ruang gap 40px supaya tak berlanggar dengan gambar) */}
        <div 
          className="greeting-text-div" 
          style={{ 
            flex: window.innerWidth > 768 ? "1 1 55%" : "1 1 100%", 
            maxWidth: window.innerWidth > 768 ? "58%" : "100%",
            paddingRight: window.innerWidth > 768 ? "40px" : "0px", // 🚀 KUNCI GAP: Paksa jarak selamat 40px dari gambar kat laptop!
            boxSizing: "border-box"
          }}
        >
          <div>
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            
            <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p"}>
              {greeting.subTitle}
            </p>
            
            <div id="resume" className="empty-div"></div>
            
            <SocialMedia />
            
            {/* BUTTON ZONE */}
            <div className="button-greeting-div" style={{ marginTop: "25px" }}>
              {greeting.resumeLink && (
                <a
                  href={greeting.resumeLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "13px 28px",
                    backgroundColor: "#0d9488",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: "700",
                    borderRadius: "8px",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 10px rgba(13, 148, 136, 0.3)",
                    transition: "all 0.2s ease-in-out"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#0f766e"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#0d9488"}
                >
                  Download My Resume
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 🖼️ BAHAGIAN KANAN: GAMBAR PROFIL (Dikunci saiznya supaya tak membesar gergasi kat laptop) */}
        <div 
          className="greeting-image-div" 
          style={{ 
            flex: window.innerWidth > 768 ? "1 1 35%" : "1 1 100%", 
            maxWidth: window.innerWidth > 768 ? "38%" : "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box"
          }}
        >
          <div className="profile-image-container-xl" style={{ maxWidth: window.innerWidth > 768 ? "360px" : "280px", width: "100%" }}>
            <img
              alt="Anis Nadia Graduation Portrait"
              src={profileImg}
              className="profile-img-xl"
              style={{ 
                width: "100%", 
                height: "auto", 
                display: "block",
                borderRadius: "50%" // Kekalkan bentuk bulatan suci hang
              }}
            />
            <div className="profile-cyber-ring"></div>
          </div>
        </div>

      </div>
    </div>
  </Fade>
)};